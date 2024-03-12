import Layout from "@/components/layouts/Layout"
import mobileIcon from '../../assets/img/devices/mobileIcon.png'
import Link from "next/link";
const CartPage: React.FC = () => {
    return (
        <Layout>
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
                                <div className="myCart--item">
                                    <button type="button" className="btn-close" aria-label="Close" />
                                    <div className="itemTop">
                                        <div className="itemHead">
                                            <div className="media">
                                                <img
                                                    src={mobileIcon.src}
                                                    width={64}
                                                    height={64}
                                                    alt="device type image"
                                                />
                                            </div>
                                            <div className="itemName">
                                                <h3>product Name Here....</h3>
                                            </div>
                                        </div>
                                        <div className="itemDetail">
                                            <div className="itemPrice">
                                                <span>Device Price</span>
                                                <span>₹ 24000</span>
                                            </div>
                                            <div className="itemTime">
                                                <span>Plan Duration</span>
                                                <span>2 Years</span>
                                            </div>
                                            <div className="itemAmount">
                                                <span>Total Amount</span>
                                                <span>₹ 3599</span>
                                                <button className="editBtn" type="button">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={16}
                                                        height={16}
                                                        fill="currentColor"
                                                        className="bi bi-pencil"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itembottom">
                                        <form action="">
                                            <div className="input-group mt-1">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter IMEI Number"
                                                    aria-label="Enter IMEI Number"
                                                    aria-describedby="button-addon2"
                                                />
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    id="button-addon2"
                                                >
                                                    Verify
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>


                                <div className="myCart-footer">
                                    <button className="addDevices" type="button">
                                        {" "}
                                        Add More Devices
                                    </button>
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
                                            <span className="textCount">3</span>
                                        </li>
                                        <li>
                                            <span className="textName">Total Cost</span>{" "}
                                            <span className="textCount">₹ 3599</span>
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
                                    <button className="ptpBtn" type="button">
                                        {" "}
                                        Proceed To Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cartAddress">
                <div className="container">
                    <div className="row">
                        <div className="addCard">
                            <div className="accordion" id="accordionAddress">
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
                                            Your Address{" "}
                                            <i className="fa fa-address-book" aria-hidden="true" />
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#accordionAddress"
                                    >
                                        <div className="accordion-body">
                                            <div className="row g-0">
                                                <div id="cartAddFormBox" className="cartAdd--form">
                                                    <form action="">
                                                        <div className="row g-0 mb-0">
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="Select Device"
                                                                    className="form-label"
                                                                >
                                                                    Salutation <span className="text-danger"> *</span>{" "}
                                                                </label>
                                                                <select
                                                                    id="inputDevice"
                                                                    className="form-select form-select-lg"

                                                                >
                                                                    <option >Select Salutation...</option>
                                                                    <option>Mr.</option>
                                                                    <option>Ms.</option>
                                                                    <option>Mrs.</option>
                                                                    <option>Dr.</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="customerName"
                                                                    className="form-label"
                                                                >
                                                                    Customer Name{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="customerName"
                                                                    placeholder="Enter Your full name"

                                                                />
                                                                <small className="ms-2">
                                                                    please enter name same as in your{" "}
                                                                    <b className="text-info">AADHAAR CARD/PAN</b>{" "}
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="row g-0 mb-1">
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="inputAddressLine1"
                                                                    className="form-label"
                                                                >
                                                                    Address Line 1{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputAddressLine1"
                                                                    placeholder="Address line 1"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="inputAddressLine2"
                                                                    className="form-label"
                                                                >
                                                                    Address Line 2{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputAddressLine2"
                                                                    placeholder="Address line 2"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="inputAddressLine3"
                                                                    className="form-label"
                                                                >
                                                                    Address Line 3{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputAddressLine3"
                                                                    placeholder="Address line 3"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="pinCode" className="form-label">
                                                                    Pin Code <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="pinCode"
                                                                    placeholder="Enter Pin Code"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="inputCity" className="form-label">
                                                                    City <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputCity"
                                                                    placeholder="Enter City"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="inputState" className="form-label">
                                                                    State <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputState"
                                                                    placeholder="Enter State"

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row g-0 mb-4">
                                                            <div className="col-md-6">
                                                                <label htmlFor="userEmail" className="form-label">
                                                                    Email <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    id="userEmail"
                                                                    placeholder="Enter Email"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="uerMobile" className="form-label">
                                                                    Mobile Number{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <div className="input-group">
                                                                    <span
                                                                        className="input-group-text"
                                                                        id="basic-addon1"
                                                                    >
                                                                        +91
                                                                    </span>
                                                                    <input
                                                                        type="tel"
                                                                        className="form-control"
                                                                        id="uerMobile"
                                                                        placeholder="Enter Mobile No."
                                                                        aria-label="Username"
                                                                        aria-describedby="basic-addon1"

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="uerLLine" className="form-label">
                                                                    Landline Number{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <div className="input-group">
                                                                    <span className="input-group-text">+91</span>
                                                                    <input
                                                                        type="tel"
                                                                        aria-label="uerLLine"
                                                                        className="form-control"
                                                                        placeholder="XXX"
                                                                    />
                                                                    <input
                                                                        type="tel"
                                                                        aria-label="uerLLine"
                                                                        className="form-control"
                                                                        placeholder="XXXXX"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row g-0 d-flex flex-column align-items-center justify-content-center">
                                                            <button
                                                                type="submit"
                                                                className="setAdd-btn btn-primary rounded-5 mb-3"
                                                            >
                                                                Add Address
                                                            </button>
                                                            <small className="smallTextInfo text-muted text-center w-75">
                                                                {" "}
                                                                <b>Note :</b>
                                                                All field with <b>*</b> are mandatory to be filled{" "}
                                                            </small>
                                                        </div>
                                                    </form>
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

        </Layout>
    )
}

export default CartPage;