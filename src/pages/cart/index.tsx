/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout"
import mobileIcon from '../../assets/img/devices/mobileIcon.png'
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';
import { CartItem } from "@/interfaces/common.interfaces";
import DeviceCategoryModal from "@/components/products/DeviceCategoryModal";
import PaytmChecksum from "@/helpers/paytm/PaytmChecksum";
import Script from "next/script";



const dotenv = require('dotenv');
dotenv.config();
const https = require('https');

interface PayTMRequestInterface {
    token: string;
    order: string;
    mid: string;
    amount: number;
}

interface PaytmConfig {
    root: string;
    data: {
        orderId: string;
        token: string;
        tokenType: string;
        amount: number;
    };
    payMode: {
        labels: Record<string, any>;
        filter: {
            exclude: string[];
        };
        order: string[];
    };
    website: string;
    flow: string;
    merchant: {
        mid: string;
        redirect: boolean;
    };
    handler: {
        transactionStatus: (paymentStatus: Record<string, any>) => void;
        notifyMerchant: (eventName: string, data: Record<string, any>) => void;
    };
}
export interface PaytmConfigInterface {
    root: string;
    data: {
        orderId: string;
        token: string;
        tokenType: string;
        amount: number;
    };
    payMode: {
        labels: Record<string, any>;
        filter: {
            exclude: string[];
        };
        order: string[];
    };
    website: string;
    flow: string;
    merchant: {
        mid: string;
        redirect: boolean;
    };
    handler: {
        transactionStatus: (paymentStatus: Record<string, any>) => void;
        notifyMerchant: (eventName: string, data: Record<string, any>) => void;
    };
}
const CartPage: React.FC = () => {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [subcategoryid, setSubcategoryId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [payTMData, setPayTM] = useState<PayTMRequestInterface>({
        token: '',
        order: '',
        mid: 'InfinA73791511910258',
        amount:1.00
    });


    useEffect(() => {

        const getCartItemsFromSessionStorage = () => {
            const invoiceAmount = sessionStorage.getItem("invoiceamount");
            const invoiceDate = sessionStorage.getItem("invoicedate");
            const plan = sessionStorage.getItem("plan");
            const price = sessionStorage.getItem("price");
            const brand = sessionStorage.getItem("brand");
            const subcategoryid = sessionStorage.getItem("subcategoryid");

            if (invoiceAmount && invoiceDate && plan && price && brand && subcategoryid) {

                const cartItem = {
                    productName: plan,
                    devicePrice: price,
                    planDuration: invoiceDate,
                    totalAmount: invoiceAmount,
                    brand: brand,
                    subcategoryid: subcategoryid
                };

                setSubcategoryId(subcategoryid);
                const cartItems = Cookies.get('cartitems');
                if (cartItems) {
                    const parsedCartItems = JSON.parse(cartItems);
                    setCartItems(parsedCartItems);
                }
            }
        };

        getCartItemsFromSessionStorage();
    }, []);

    useEffect(() => {
        const orderId = sessionStorage.getItem('orderId');
        if (orderId) {
            setPayTM((prevPayTMData) => ({
                ...prevPayTMData,
                order: orderId
            }));
        }
    }, []);
    const initializePayment = useMemo(() => {
        return async () => {
            const orderId = 'Order_' + new Date().getTime();
            sessionStorage.setItem('orderId', JSON.stringify(orderId));
            const mid = 'InfinA73791511910258';
            const mkey = 'Xv#3x9vZ%cawdcD1';
            const paytmBody = {
                requestType: 'Payment',
                mid: mid,
                websiteName: 'InfinAWEB',
                orderId: orderId,
                callbackUrl: `${process.env.APP_URL}/api/payment`,
                txnAmount: {
                   
                    value: 1.00,
                    currency: 'INR',
                },
                userInfo: {
                    custId: '250',
                },
            };

            try {
                const checksum = await PaytmChecksum.generateSignature(
                    JSON.stringify(paytmBody),
                    mkey
                );
                const paytmParams = {
                    body: paytmBody,
                    head: {
                        signature: checksum,
                    }
                };
                const post_data = JSON.stringify(paytmParams);
                const options = {
                    hostname: 'securegw.paytm.in',
                    port: 443,
                    path: `/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${orderId}`,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Length': post_data.length,
                    },
                };

                var response = "";
                var post_req = https.request(options, function (post_res: any) {
                    post_res.on('data', function (chunk: any) {
                        response += chunk;
                    });

                    post_res.on('end', function () {
                        const responseBody = JSON.parse(response);
                        if (responseBody.body && responseBody.body.txnToken) {
                            const { txnToken } = responseBody.body;
                            setPayTM({
                                ...payTMData,
                                token: txnToken,
                                order: orderId,
                                mid: mid,
                            });
                        }
                    });
                });
                
                post_req.write(post_data);
                post_req.end();
               
            } catch (error) {
                console.error('Error:', error);
            }
        };
    }, []);

    useEffect(() => {
        initializePayment();
    }, []);

    const makePaytmPayment = async () => {
        const config: PaytmConfigInterface = {
          root: '',
          data: {
            orderId: payTMData.order,
            token: payTMData.token,
            tokenType: 'TXN_TOKEN',
            // amount: formik.values.AmountPayBy,
            amount: 1.00,
          },
          payMode: {
            labels: {},
            filter: {
              exclude: [],
            },
            order: ['CC', 'DC', 'NB', 'UPI', 'PPBL', 'PPI', 'BALANCE'],
          },
          website: 'WEBSTAGING',
          flow: 'DEFAULT',
          merchant: {
            mid: payTMData.mid,
            redirect: true,
          },
          handler: {
            transactionStatus: async (paymentStatus: Record<string, any>) => {
            
              router.push(`/payment`)
    
            },
            notifyMerchant: (eventName: string, data: Record<string, any>) => {
            
              console.log('Closed');
            },
          },
        };
    
        if (typeof window !== 'undefined' && (window as any).Paytm && (window as any).Paytm.CheckoutJS) {
          (window as any).Paytm.CheckoutJS.init(config)
            .then(() => {
              (window as any).Paytm.CheckoutJS.invoke();
            })
            .catch((error: any) => {
              console.log('Error => ', error);
            });
        } else {
          console.error('Paytm or CheckoutJS not available in the window object.');
        }
      };
    const handleProceedToPayment = async () => {
        try {
            // Initialize payment
            await makePaytmPayment();

            // Redirect to Paytm payment page with the orderId
            window.location.href = `https://securegw.paytm.in/theia/processTransaction?orderid=${payTMData.order}`;
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };
    
    

 
    const handleclick = () => {
        console.log("click");
        router.push(`/productlist?subcategoryid=${subcategoryid}`);
    };
    console.log('cartItemscart', cartItems);
    const totalSum = cartItems.reduce((accumulator, item) => {
        const devicePrice = parseFloat(item.Price);
        return isNaN(devicePrice) ? accumulator : accumulator + devicePrice;
    }, 0);
    const handleRemoveItem = (indexToRemove: number) => {
        const updatedCartItems = cartItems.filter((item, index) => index !== indexToRemove);
        setCartItems(updatedCartItems);
        Cookies.set('cartitems', JSON.stringify(updatedCartItems));
        // Also update the cookie or session storage with the new cartItems if necessary
    };


    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <Layout>
                <Script
                type="text/javascript"
                src="https://securegw.paytm.in/merchantpgpui/checkoutjs/merchants/InfinA73791511910258.js"
                strategy="beforeInteractive"
                crossOrigin="anonymous"
            />
            <section className="pageTop--MainContent mb-0">
                <div className="container g-0">
                    <div className="row g-0">
                        <div className="pageHead-Outer">
                            <div className="row g-0">
                                <div className="outerHero">
                                    <div className="container g-0">
                                        <div className="row g-0">
                                            <nav aria-label="breadcrumb" className="g-0">
                                                <ol className="breadcrumb">
                                                    <li className="breadcrumb-item">
                                                        <Link href="/">Home</Link>
                                                    </li>
                                                    <li
                                                        className="breadcrumb-item active"
                                                        aria-current="page"
                                                    >
                                                        My Cart
                                                    </li>
                                                </ol>
                                            </nav>
                                            <div className="OuterBanner">
                                                <div className="row g-0 d-flex justify-content-start align-items-center">
                                                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mb-7 mb-lg-0 p-0">
                                                        <div className="OuterBanner--left">
                                                            <div className="left_content">
                                                                <h2>InfyShield</h2>
                                                                <h1 className="display-3"> Your Cart</h1>
                                                                <p>
                                                                    A complete mobile protection plan covering
                                                                    additional warranty, damage protection and assured
                                                                    buyback
                                                                </p>
                                                            </div>
                                                            <div className="left_action d-none">
                                                                <a href="#dwFormBox" className="ActionBtn">
                                                                    {" "}
                                                                    Get Now
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 p-0 d-none">
                                                        <div className="OuterBanner--right d-flex justify-content-center">
                                                            <figure className="figure">
                                                                <img
                                                                    src="assets/img/heroBanner/iPhone-X 1.png"
                                                                    className="figure-img img-fluid"
                                                                    width={200}
                                                                    height={398}
                                                                    alt="banner right"
                                                                />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="myCart">
                <div className="container">
                    <div className="row">
                        <div className="myCart--body">
                            <div className="myCart--left">
                                <div className="myCart-header">
                                    <ul>
                                        <li>Product Name</li>
                                        <li>Device Price</li>
                                        <li>Plan Duration</li>
                                        <li>Total Amount</li>
                                    </ul>
                                </div>
                                <hr />
                                {cartItems.length === 0 ? (
                                    <p>Your cart is empty</p>
                                ) : (
                                    cartItems.map((item, index) => (
                                        <div className="myCart--item" key={index}>
                                            <button type="button" className="btn-close" aria-label="Close" onClick={() => handleRemoveItem(index)} />
                                            <div className="itemTop">
                                                <div className="itemHead">
                                                    <div className="media">
                                                        <img src={mobileIcon.src} width={64} height={64} alt="device type image" />
                                                    </div>
                                                    <div className="itemName">
                                                        <h3>{item.Plan}</h3>
                                                        <p>{item.brand}</p>
                                                    </div>
                                                </div>
                                                <div className="itemDetail">
                                                    <div className="itemPrice">
                                                        <span>Device Price</span>
                                                        <span>₹ {item.invoiceamount}</span>
                                                    </div>
                                                    <div className="itemTime">
                                                        <span>Plan Duration</span>
                                                        <span>{item.Plan.substring(0, 7)}</span>
                                                    </div>
                                                    <div className="itemAmount">
                                                        <span>Total Amount</span>
                                                        <span>₹ {item.Price}</span>
                                                        {/* <button className="editBtn" type="button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                                            </svg>
                                                        </button> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="itembottom">
                                                <form action="">
                                                    <div className="input-group mt-1">
                                                        <input type="text" className="form-control" placeholder={subcategoryid === '2' ? "Enter IMEI Number" : "Enter Invoice Number"} aria-label="Enter IMEI Number" aria-describedby="button-addon2" />
                                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Verify</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    ))
                                )}

                                <div className="myCart-footer">
                                    <button className="addDevices" type="button"
                                        onClick={() => {
                                            handleShowModal()
                                        }}>
                                        {" "}
                                        Add More Devices

                                    </button>
                                    <DeviceCategoryModal
                                        showModal={showModal}
                                        toggleModal={handleCloseModal}

                                    />
                                    <div className="promoInput">
                                        <form action="">
                                            <div className="input-group mt-1">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Have Promo Code?"
                                                    aria-label="Enter IMEI Number"
                                                    aria-describedby="button-addon2"
                                                />
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    id="button-addon2"
                                                >
                                                    Apply
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="myCart--right">
                                <div className="summary--Header">
                                    <h3>Your Cart Summary</h3>
                                </div>
                                <div className="summary--body">
                                    <ul className="itemList">
                                        <li>
                                            <span className="textName">Total Iteams</span>{" "}
                                            <span className="textCount">{cartItems.length}</span>
                                        </li>
                                        <li>
                                            <span className="textName">Total Cost</span>{" "}
                                            <span className="textCount">₹{totalSum.toFixed(2)}</span>
                                        </li>
                                        <li>
                                            <span className="textName">Other Charges</span>{" "}
                                            <span className="textCount">0</span>
                                        </li>
                                    </ul>
                                    <div className="termsbox">
                                        <form action="">
                                            <div className="form-check">
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="termsCondition1"
                                                >
                                                    Device Manufacturer Warranty should be 1 year or more
                                                </label>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="termsCondition1"
                                                    defaultValue="option1"
                                                />
                                            </div>
                                            <div className="form-check">
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="termsCondition2"
                                                >
                                                    By proceeding, you agree to the <b>Term and Condition</b>{" "}
                                                </label>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="termsCondition2"
                                                    defaultValue="option2"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="summary--Footer">
                                    <button className="ptpBtn" type="button" onClick={handleProceedToPayment}>
                                        Proceed to Payment
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*-------------address-------------------------------*/}

        </Layout>
    )
}

export default CartPage;