import Layout from '@/components/layouts/Layout';
import { getAllbrandlist, getProductSubcategoryList } from '@/services/global_services';
import React, { useEffect, useState } from 'react';
import mobiledw from "../../assets/img/devices/warranty/mobile-dw.png";
import registerIcon from "../../assets/img/registerIcon.png";
import acknowledgmentIcon from  "../../assets/img/acknowledgmentIcon-152.png";
import demandServiceIcon from  "../../assets/img/demandServiceIcon-152.png";
import extentedWarrantyIcons from  "../../assets/img/benefit/png/extentedWarrantyIcons.png";
import replacementIcons from  "../../assets/img/benefit/png/replacementIcons.png";
import panIndia from  "../../assets/img/benefit/png/panIndia.png";
import OEM from  "../../assets/img/benefit/png/OEM.png";
import accidentalDamageOritection from  "../../assets/img/benefit/png/accidentalDamageOritection.png";
import allBrands from  "../../assets/img/benefit/png/allBrands.png";
import allPartsLabour from "../../assets/img/benefit/png/allPartsLabour.png";
import helpdeskSupport from "../../assets/img/benefit/png/helpdeskSupport.png";
import iPhoneX from "../../assets/img/heroBanner/iPhone-X1.png"
import { useRouter } from 'next/router';
function Plan() {
    const [deviceList, setDeviceList] = useState([]);
    const [brandList, setBrandList] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState(null); // Track selected device
    const router = useRouter(); // Initialize useRouter
    useEffect(() => {
        const fetchDeviceList = async () => {
            try {
                const response = await getProductSubcategoryList();
                setDeviceList(response.data); 
            } catch (error) {
                console.error('Error fetching device list:', error);
            }
        };

        const fetchBrandList = async () => {
            try {
                const response = await getAllbrandlist();
                setBrandList(response.data); 
            } catch (error) {
                console.error('Error fetching brand list:', error);
            }
        };
  
        fetchDeviceList();
        fetchBrandList();
    }, []);

    const handleDeviceChange = (event:any) => {
        setSelectedDevice(event.target.value); // Update selected device
    };
    const handleAddToCart = () => {
        router.push('/cart'); // Navigate to /cart route
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
                        <a href="index.html">Home</a>
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
                          <div className="left_action">
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
          <div className="pageHead-Inner">
            <div className="container">
              <div className="row">
                <div className="dw--left">
                  <div className="dw--head">
                    <h2 className="dw--title">
                      EXTENDED WARRANTY FOR MOBILE PHONE
                    </h2>
                    <p className="dw--para">
                      Fill the below details to generate best infyShield Plan
                      for your device
                    </p>
                  </div>
                  <div id="dwFormBox" className="dw--form">
                    <form action="">
                      <div className="row d-flex g-0 mb-3">
                        <div className="col-md-6 p-0">
                          <input
                            type="radio"
                            className="btn-check"
                            name="claimType"
                            id="extentedWarranty"
                            autoComplete="off"
                          
                          />
                          <label
                            className="btn btn-outline-secondary  rounded-0 w-100"
                            htmlFor="extentedWarranty"
                          >
                            Extended Warranty
                          </label>
                        </div>
                        <div className="col-md-6 p-0">
                          <input
                            type="radio"
                            className="btn-check"
                            name="claimType"
                            id="damageProtection"
                            autoComplete="off"
                          />
                          <label
                            className="btn btn-outline-secondary rounded-0 w-100 "
                            htmlFor="damageProtection"
                          >
                            Damage Protection
                          </label>
                        </div>
                      </div>
                      <div className="row g-0 mb-3">
                        <div className="col-md-6">
                          <label htmlFor="Select Device" className="form-label">
                            Select Device
                          </label>
                          <select id="inputDevice" className="form-select form-select-lg" onChange={handleDeviceChange}>
                        <option>Select Device...</option>
                        {deviceList.map((device, index) => (
                            <option key={index}>{device.subcategoryname}</option>
                        ))}
                    </select>
                        </div>
                        <div className="col-md-6">
                          <label
                            htmlFor="Select Device Brand"
                            className="form-label"
                          >
                            Select Brand
                          </label>
                          <select id="inputDeviceBrand" className="form-select" disabled={!selectedDevice}>
                        <option>Select Brand...</option>
                        {brandList.map((brand, index) => (
                            <option key={index}>{brand.brand}</option> 
                        ))}
                    </select>
                        </div>
                      </div>
                      <div className="row g-0 mb-3">
                        <div className="col-md-6">
                          <label
                            htmlFor="inputDevicePrice"
                            className="form-label"
                          >
                            Device Price
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputDevicePrice"
                            placeholder="Enter Price"
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="purchaseDate" className="form-label">
                            Device Purchase Date
                          </label>
                          <input
                            id="purchaseDate"
                            className="form-control"
                            type="date"
                          />
                        </div>
                      </div>
                      <div className="row g-0 mb-4">
                        <div className="col-md-6">
                          <label htmlFor="userEmail" className="form-label">
                            Email
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
                            Mobile Number
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            id="uerMobile"
                            placeholder="Enter Mobile No."
                          />
                        </div>
                      </div>
                      <div className="row g-0 d-flex justify-content-center">
                        <button
                          type="submit"
                          className="getShield-btn btn-primary rounded-5 mb-3"
                        >
                          Get Shield
                        </button>
                        <small className="smallTextInfo text-muted text-center w-75">
                          {" "}
                          <b>Note :</b>
                          Also, you understand that the device is brand new
                          &amp; purchased on or after <b>22-May-2023</b>{" "}
                        </small>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="dw--right">
                  <div className="dw--media">
                    <img
                      src={mobiledw.src}
                      width={327}
                      height={219}
                      alt="dw-mobile"
                    />
                    <h3>iPhone 15 pro Max</h3>
                  </div>
                  <div className="dw--content">
                    <h2>Best plans for your device</h2>
                    <div className="dw--planForm">
                      <form action="">
                        <div className="radio-buttons">
                          <label className="custom-radio">
                            <input
                              type="radio"
                              name="radio"
                              
                            />
                            <span className="radio-btn">
                              <i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-check-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                              </i>
                              <div className="hobbies-icon">
                                <span> 2 Years </span>
                                <h3 className="">₹ 3599</h3>
                              </div>
                            </span>
                          </label>
                          <label className="custom-radio">
                            <input type="radio" name="radio" />
                            <span className="radio-btn">
                              <i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-check-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                              </i>
                              <div className="hobbies-icon">
                                <span> 3 Years </span>
                                <h3 className="">₹ 6599</h3>
                              </div>
                            </span>
                          </label>
                          <label className="custom-radio">
                            <input type="radio" name="radio" />
                            <span className="radio-btn">
                              <i>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-check-lg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                              </i>
                              <div className="hobbies-icon">
                                <span> 5 Years </span>
                                <h3 className="">₹ 9599</h3>
                              </div>
                            </span>
                          </label>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center">
                        <button
                        type="button"
                        className="addTocard-btn btn-outline-primary rounded-5 mb-3"
                        onClick={handleAddToCart} 
                    >
                        Add To Cart
                    </button>
                          <small className="smallTextInfo text-center w-75">
                            {" "}
                            <b>*</b> Any Malfunction because of Tampering is not
                            covered{" "}
                          </small>
                          <div className="d-flex justify-content-center align-items-center">
                            <p className="coverdtext green">
                              {" "}
                              <span className="roundOk green" />
                              Covered
                            </p>
                            <p className="coverdtext red">
                              {" "}
                              <span className="roundOk red" /> Not Covered
                            </p>
                          </div>
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
  </section>
  {/* Main Content Section Ends */}
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
  {/* Why need Protection Section Start */}
  <section className="whyInfyshield d-none">
    <div className="container">
      {/* title */}
      <div className="row">
        <div className="centerTitle">
          <h3>InfyShield</h3>
          <h2>Why Get InfyShield</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus.
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* Why need Protection Section Ends */}
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
</>

</Layout>
  )
}

export default Plan