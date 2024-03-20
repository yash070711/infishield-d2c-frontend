import Layout from '@/components/layouts/Layout';
import { getAllbrandlist, getBrandsByProducts, getProductSubcategoryList, getServicePlanOptions, getSubcategoryByProducts } from '@/services/global_services';
import React, { useEffect, useState } from 'react';
import mobiledw from "../../assets/img/devices/warranty/mobile-dw.png";
import registerIcon from "../../assets/img/registerIcon.png";
import acknowledgmentIcon from "../../assets/img/acknowledgmentIcon-152.png";
import demandServiceIcon from "../../assets/img/demandServiceIcon-152.png";
import extentedWarrantyIcons from "../../assets/img/benefit/png/extentedWarrantyIcons.png";
import replacementIcons from "../../assets/img/benefit/png/replacementIcons.png";
import panIndia from "../../assets/img/benefit/png/panIndia.png";
import OEM from "../../assets/img/benefit/png/OEM.png";
import accidentalDamageOritection from "../../assets/img/benefit/png/accidentalDamageOritection.png";
import allBrands from "../../assets/img/benefit/png/allBrands.png";
import allPartsLabour from "../../assets/img/benefit/png/allPartsLabour.png";
import helpdeskSupport from "../../assets/img/benefit/png/helpdeskSupport.png";
import iPhoneX from "../../assets/img/heroBanner/iPhone-X1.png"
import mobileClaim from "../../assets/img/devices/mobileClaim.png";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { NewProductList, RequestServicePlanInterfaces } from '@/interfaces/common.interfaces';


function Plan() {

  const [deviceList, setDeviceList] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState(null); // Track selected device
  const router = useRouter(); // Initialize useRouter
  const [categories, setCategories] = useState<any[]>([]);
  const [price,setprice]=useState<{ Plan: string; Price: number; }[]>([]);
  const { subcategoryid, brand } = router.query;
  const [requestPlan, setRequestPlan] = useState<RequestServicePlanInterfaces>({
    ProductSubCatgID: subcategoryid ? parseInt(subcategoryid as string) : undefined,
    invoiceamount: '',
    invoicedate: '',
    Status: 'N',
    subcategoryid: subcategoryid ? parseInt(subcategoryid as string).toString() : undefined, // Convert to string
  });
  


  useEffect(() => {

    async function fetchData() {
      try {
        const response = await getBrandsByProducts(subcategoryid);
        if (response.statusCode === 200 && response.isSuccess && response.data) {
          setDeviceList(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [subcategoryid]);

  const fetchServicePlanOptions = async () => {
    try {
      const response = await getServicePlanOptions(requestPlan);
      if (response.statusCode === 200 && response.isSuccess && response.data) {
        // Type assertion to let TypeScript know that response.data is an array of objects
        const prices = (response.data as { Plan: string; Price: number }[]).map(plan => ({ Plan: plan.Plan, Price: plan.Price }));
        // Setting the prices to the state variable
        setprice(prices);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  const fetchCategories = async () => {
    try {
      const response = await getProductSubcategoryList('');
      setCategories(response.data);
      // Assuming the API response has a `data` property containing the list of categories
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };


  const handleDeviceChange = (event: any) => {
    setSelectedDevice(event.target.value);
  };
  const handleAddToCart = () => {
    router.push('/cart');
  };
  return (
    <Layout>
      <>
        {/* Main Content Section Start */}
        <section className="pageMainContent">
          <div className="row g-0">
            <div className="container g-0">
              <div className="pageHead-Outer">
                <div className="row g-0">
                  <div className="outerHero">
                    <div className="container g-0">
                      <div className="row g-0">
                        {/* Breadcrumb start */}
                        <nav aria-label="breadcrumb" className="g-0">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <Link href="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="#">Devices &amp; Plans</a>
                            </li>
                            <li
                              className="breadcrumb-item active"
                              aria-current="page"
                            >
                              Mobile Phones &amp; Tablets
                            </li>
                          </ol>
                        </nav>
                        {/* Breadcrumb ends */}
                        {/* banner start */}
                        <div className="OuterBanner">
                          <div className="row g-0 d-flex justify-content-center align-items-center">
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mb-7 mb-lg-0 p-0">
                              <div className="OuterBanner--left">
                                <div className="left_content">
                                  <h2>InfyShield</h2>
                                  <h1 className="display-3">
                                    {" "}
                                    Extented Waranty (EWS): Comprehensive Protection
                                    for Your Mobile Phone
                                  </h1>
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
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 p-0 ">
                              <div className="OuterBanner--right d-flex justify-content-center">
                                <figure className="figure">
                                  <img
                                    src={iPhoneX.src}
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
                        {/* banner ends */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content Section Ends */}

        {/* Select Plan Section Start */}
        <section className="selectPlanbox">
          <div className="container">
            <div className="row g-0">
              <div className="pageHead-Inner">
                <div className="dw--left">
                  <div className="dw--head">
                    <h2 className="dw--title">
                      EXTENDED WARRANTY
                    </h2>

                    <h5 className="text-muted fw-bold">For Your <b>{brand}</b>  Product</h5>
                    <p className="dw--para">Fill the below details to generate best infyShield Plan for
                      your device</p>
                  </div>
                  <div id="dwFormBox" className="dw--form">
                    <form action="" autoComplete="off">
                      <div className="row g-0 mb-3">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 p-0">
                          <input type="radio" className="btn-check" name="claimType" id="extendedWarranty"
                            autoComplete="off" checked />
                          <label className="btn btn-outline-secondary  rounded-0 w-100"
                            htmlFor="extendedWarranty">Extended Warranty</label>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 p-0">
                          <input type="radio" className="btn-check" name="claimType" id="damageProtection"
                            autoComplete="off" />
                          <label className="btn btn-outline-secondary rounded-0 w-100 "
                            htmlFor="damageProtection">Damage Protection</label>
                        </div>
                      </div>
                      <div className="row g-0 mb-3 d-none">
                        <div className="col-md-6">
                          <label htmlFor="forDevice" className="form-label">Device</label>
                          <input type="text" className="form-control" id="inputforDevice"
                            placeholder="Android" disabled />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="Select Device Brand" className="form-label">Select
                            Brand</label>
                          <select id="inputDeviceBrand" className="form-select">
                            <option selected>Select Brand...</option>
                            <option>iPhone</option>
                            <option>One Plus</option>
                            <option>Samsung</option>
                            <option>Nothing</option>
                            <option>Oppo</option>
                            <option>Vivo</option>
                            <option>Xiaomi</option>
                          </select>
                        </div>
                      </div>
                      <div className="row g-0 mb-3">
                        <div className="col-md-6">
                          <label htmlFor="inputDevicePrice" className="form-label">Device
                            Price</label>
                          <input type="text" className="form-control" id="inputDevicePrice" onChange={(event) => {
                            setRequestPlan({
                              ...requestPlan,
                              invoiceamount: event.target.value
                            });
                          }}
                            placeholder="Enter Price" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="purchaseDate" className="form-label">Device Purchase
                            Date</label>
                          <input id="purchaseDate" className="form-control" type="date" onChange={(event) => {
                            setRequestPlan({
                              ...requestPlan,
                              invoicedate: event.target.value
                            });
                          }} />
                        </div>
                      </div>
                      <div className="row g-0 mb-4">
                        <div className="col-md-6">
                          <label htmlFor="userEmail" className="form-label">Email</label>
                          <input type="email" className="form-control" id="userEmail"
                            placeholder="Enter Email" />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="uerMobile" className="form-label">Mobile Number</label>
                          <input type="number" className="form-control" id="uerMobile"
                            placeholder="Enter Mobile No." />
                        </div>
                      </div>
                      <div className="row g-0">
                        <div className="dwFormBottom">
                          <a type="submit" className="getShield-btn btn-primary rounded-5 mb-3" onClick={fetchServicePlanOptions}>Get
                            Shield</a>
                          <small className="smallTextInfo text-muted text-center w-75"> <b>Note :</b>
                            Also, you understand that the device is brand new & purchased on or
                            after <b>22-May-2023</b> </small>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dw--right">
                  <div className="dw--media">
                    <img src={mobileClaim.src} width="327" height="219" alt="dw-mobile" />
                    <small className="smallTextInfo text-center w-75"> <b>*</b> Any
                      Malfunction because of Tampering is not covered </small>
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="coverdtext green"> <span className="roundOk green"></span>
                        Covered</p>
                      <p className="coverdtext red"> <span className="roundOk red"></span> Not
                        Covered</p>
                    </div>
                  </div>
                  <div className="dw--content">
                    <h2>Best plans for your device</h2>
                    <div className="dw--planForm">
  <form action="">
    <div className="radio-buttons">
      {price.map((plan, index) => (
        <label className="custom-radio" key={index}>
          <input type="radio" name="radio" />
          <span className="radio-btn">
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
              </svg>
            </i>
        
  <div className="hobbies-icon">
    <span>1 Year</span>
    <h3 className="">&#8377; {plan.Price}</h3>
  </div>


  <div className="hobbies-icon">
    <span>2 Years</span>
    <h3 className="">&#8377; {plan.Price}</h3>
  </div>

          </span>
        </label>
      ))}
    </div>
    <div className="row d-flex justify-content-center align-items-center">
      <button type="submit" className="addTocard-btn btn-outline-primary rounded-5 mb-3" onClick={handleAddToCart}>Add To Cart</button>
    </div>
  </form>
</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Select Plan Section Ends */}

        {/* Why InfyShield Section Start */}
        <section className="whyInfyshield">
          <div className="container">
            {/* title */}
            <div className="row">
              <div className="centerTitle">
                <h3>InfyShield</h3>
                <h2>Why InfyShield</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullam corper mattis, pulvinar dapibus.
                </p>
              </div>
            </div>
            {/* flex info cards */}
            <div className="row">
              <div className="infoFlex--conatainer">
                <div className="infoFlex--card">
                  <div className="media">
                    <div className="d-flex justify-content-center align-self-center">
                      <img
                        src={extentedWarrantyIcons.src}
                        alt="Extended Warranty"
                      />
                    </div>
                    <div className="media-body">
                      <h3>Extended Warranty</h3>
                      <p>some text go here for extended warranty</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="d-flex justify-content-center align-self-center">
                      <img
                        src={replacementIcons.src}
                        alt="Replacement If not Repaired"
                      />
                    </div>
                    <div className="media-body">
                      <h3>Replacement If not Repaired</h3>
                      <p>some text go here for extended warranty</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="d-flex justify-content-center align-self-center">
                      <img
                        src={panIndia.src}
                        alt="Pan India Coverage"
                      />
                    </div>
                    <div className="media-body">
                      <h3>Pan India Coverage</h3>
                      <p>some text go here for extended warranty</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="d-flex justify-content-center align-self-center">
                      <img
                        src={OEM.src}
                        alt="OEM Authorized Service Center"
                      />
                    </div>
                    <div className="media-body">
                      <h3>OEM Authorized Service Center</h3>
                      <p>some text go here for extended warranty</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="d-flex justify-content-center align-self-center">
                      <img
                        src={accidentalDamageOritection.src}
                        alt="Accidental Damage Protection"
                      />
                    </div>
                    <div className="media-body">
                      <h3>Accidental Damage Protection</h3>
                      <p>some text go here for extended warranty</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="d-flex justify-content-center align-self-center">
                      <img
                        src={allPartsLabour.src}
                        alt="All Parts & Labour Covered"
                      />
                    </div>
                    <div className="media-body">
                      <h3>All Parts &amp; Labour Covered</h3>
                      <p>some text go here for extended warranty</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="d-flex justify-content-center align-self-center">
                      <img
                        src={allBrands.src}
                        alt="All Products  & Brands"
                      />
                    </div>
                    <div className="media-body">
                      <h3>All Products &amp; Brands</h3>
                      <p>some text go here for extended warranty</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="d-flex justify-content-center align-self-center">
                      <img
                        src={helpdeskSupport.src}
                        alt="Helpdesk Support"
                      />
                    </div>
                    <div className="media-body">
                      <h3>Helpdesk Support</h3>
                      <p>some text go here for extended warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why InfyShield Section Ends */}

        {/* How It Work Section Start */}
        <section className="hoeItwork">
          <div className="container">
            {/* title */}
            <div className="row">
              <div className="centerTitle">
                <h3>InfyShield</h3>
                <h2>How Does It Work</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullam corper mattis, pulvinar dapibus.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="hoeItwork--container">
                <div className="hoeItwork--steps">
                  <span className="stepCount">01</span>
                  <div className="stepBody">
                    <h3>Register on InfyShield</h3>
                    <p>
                      <a href="#">Register</a> at infyShield by just filling your
                      mobiles details and choose a Plan for your Device.
                    </p>
                  </div>
                  <div className="stepMedia">
                    <img
                      src={registerIcon.src}
                      width={152}
                      height={135}
                      alt="Register"
                    />
                  </div>
                </div>
                <div className="hoeItwork--steps">
                  <span className="stepCount">02</span>
                  <div className="stepBody">
                    <h3>Retain Acknowledgment</h3>
                    <p>
                      just retain your acknowledgment through any mode of support of
                      infyShield.
                    </p>
                  </div>
                  <div className="stepMedia">
                    <img
                      src={acknowledgmentIcon.src}
                      width={152}
                      height={135}
                      alt="Retain Acknowledgment"
                    />
                  </div>
                </div>
                <div className="hoeItwork--steps">
                  <span className="stepCount">03</span>
                  <div className="stepBody">
                    <h3>Demand Services</h3>
                    <p>
                      Demand infyShield Services when product get Damage or Defective.
                    </p>
                  </div>
                  <div className="stepMedia">
                    <img
                      src={demandServiceIcon.src}
                      width={152}
                      height={135}
                      alt="Demand Services"
                    />
                  </div>
                </div>
              </div>
              <div className="ctaConnect">
                <div className="ctaBody">
                  <h3>Need Help to Protect Your Devices.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Reprehenderit, consequatur dolor?
                  </p>
                </div>
                <a href="tel:+911234561234" className="ctaBtn">
                  {" "}
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* How It Work Section Ends */}

        {
          /* FAQ Section Start */
        }
        <section className="faqSection">
          <div className="container">
            {/* title */}
            <div className="row">
              <div className="centerTitle">
                <h3>InfyShield</h3>
                <h2>FAQ&rsquo;s</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullam corper mattis, pulvinar dapibus.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="faqs">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is the term of Mobile Total Care?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Onsitego Mobile Total Care offers a comprehensive mobile
                        protection cover and comes with a validity of 2 years. The plan
                        period is calculated from the purchase date of your device as
                        mentioned on its invoice. Assured Buyback can be availed any
                        time before the validity of your mobile protection plan expires.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What is the term of Mobile Total Care?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Onsitego Mobile Total Care offers a comprehensive mobile
                        protection cover and comes with a validity of 2 years. The plan
                        period is calculated from the purchase date of your device as
                        mentioned on its invoice. Assured Buyback can be availed any
                        time before the validity of your mobile protection plan expires.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        What is the term of Mobile Total Care?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Onsitego Mobile Total Care offers a comprehensive mobile
                        protection cover and comes with a validity of 2 years. The plan
                        period is calculated from the purchase date of your device as
                        mentioned on its invoice. Assured Buyback can be availed any
                        time before the validity of your mobile protection plan expires.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>;
        {
          /* FAQ Section Ends */
        }


      </>

    </Layout>
  )
}

export default Plan