import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import iphonex1 from '../../../assets/img/heroBanner/iPhone-X1.png';
import sld1 from '../../../assets/img/sld1.png';
import sld2 from '../../../assets/img/sld2.png';
import sld3 from '../../../assets/img/sld3.png';
import whatsapp from '../../../assets/img/support/PNG/is-whatsapp.png'
import videocall from '../../../assets/img/support/PNG/video.png'
import voicecall from '../../../assets/img/support/PNG/call.png'
import email from '../../../assets/img/support/PNG/email.png'
import chatbot from '../../../assets/img/support/PNG/chatbot.png'
import FPMS from '../../../assets/img/support/PNG/FPMS.png'
import Mobile from '../../../assets/img/devices/PNG/Mobile.png'
import Laptop from '../../../assets/img/devices/PNG/Laptops.png'
import Tv from '../../../assets/img/devices/PNG/TVs.png'
import Ac from '../../../assets/img/devices/PNG/ACs.png'
import Camera from '../../../assets/img/devices/PNG/Cameras.png'
import AllDevices from '../../../assets/img/devices/PNG/AllDevices.png'
import fastprocess from '../../../assets/img/benefit/top/fastProcess.png'
import bestQuality from '../../../assets/img/benefit/top/bestQuality.png'
import solution from '../../../assets/img/benefit/top/solution.png'
import extendedwarranty from '../../../assets/img/benefit/png/extentedWarrantyIcons.png'
import replacement from '../../../assets/img/benefit/png/replacementIcons.png'
import panindia from '../../../assets/img/benefit/png/panIndia.png'
import oem from '../../../assets/img/benefit/png/OEM.png'
import accidental from '../../../assets/img/benefit/png/accidentalDamageOritection.png'
import allpartlabour from '../../../assets/img/benefit/png/allPartsLabour.png'
import allbrands from '../../../assets/img/benefit/png/allBrands.png'
import helpdesk from '../../../assets/img/benefit/png/helpdeskSupport.png'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

function Slider() {

  useEffect(() => {
    const swiper = new Swiper('.myheroSwiper', {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 30,
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: {
        delay: 3000, // Set delay to 3 seconds
      },
      modules:[Autoplay, Pagination, Navigation]
    });

    // Clean up on unmount

  }, []);

  return (
    <>
      <section id="heroSection">
        <div className="row g-0">
          <div className="container-fluid g-0">
            <div className="row g-0 justify-content-center">
              {/* Hero Slider Section Start */}
              <div className="heroSection___slider">
                <div className="swiper myheroSwiper">
                  <div className="swiper-wrapper">
                    {/* Your slides here */}
                    {/* Slide 1 */}
                    <div className="swiper-slide">
                      <div className="hero_sliedbox">
                        <div className="container g-0">
                          <div className="row d-flex justify-content-around justify-content-lg-center align-items-center g-0">
                            <div className="col-8 col-xs-8 col-sm-8 col-md-6 col-lg-6 mb-7 mb-lg-0 p-0">
                              <div className="hero_slidbox_left">
                                <div className="hero_slidbox_left_content">
                                  <h2>InfyShield</h2>
                                  <h1 className="display-3 drafRed">
                                    Protect Your Devices From Accidents
                                  </h1> 
                                  <p>
                                    InfyShield Protects Your Devices From Accidents!
                                  </p>
                                  <p>Want To Protect Your Device From Accidents?</p>
                                </div>
                                <div className="hero_slidbox_left_action">
                                  <a href="#" className="heroActionBtn">
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 p-0 ">
                              <div className="hero_slidbox_right">
                                <figure className="figure">
                                  {/* Replace src attribute with your actual image source */}
                                  <img
                                    src={iphonex1.src}
                                    className="figure-img img-fluid halfWidth"
                                    alt="banner right"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Slide 2 */}
                    <div className="swiper-slide">
                      <div className="hero_sliedbox">
                        <div className="container g-0">
                          <div className="row d-flex justify-content-around justify-content-lg-center align-items-center g-0">
                            <div className="col-8 col-xs-8 col-sm-8 col-md-6 col-lg-6 mb-7 mb-lg-0 p-0">
                              <div className="hero_slidbox_left">
                                <div className="hero_slidbox_left_content">
                                  <h2>InfyShield</h2>
                                  <h1 className="display-3 drafRed">
                                    Save Unexpected High Costs of Repairs
                                  </h1>
                                  <p>
                                    InfyShield Can Help You Save Thousands of Rupees!
                                  </p>
                                  <p>Want To Save High Repair Costs?</p>
                                </div>
                                <div className="hero_slidbox_left_action">
                                  <a href="dvicePlans.html" className="heroActionBtn">
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 p-0 ">
                              <div className="hero_slidbox_right">
                                <figure className="figure">
                                  {/* Replace src attribute with your actual image source */}
                                  <img
                                    src={iphonex1.src}
                                    className="figure-img img-fluid halfWidth"
                                    alt="banner right"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="hero_sliedbox">
                        <div className="container g-0">
                          <div className="row d-flex justify-content-around justify-content-lg-center align-items-center g-0">
                            <div className="col-8 col-xs-8 col-sm-8 col-md-6 col-lg-6 mb-7 mb-lg-0 p-0">
                              <div className="hero_slidbox_left">
                                <div className="hero_slidbox_left">
                                  <div className="hero_slidbox_left_content">
                                    <h2>InfyShield</h2>
                                    <h1 className="display-3 drafRed"> Save Unexpected High Costs of Repairs </h1>
                                    <p>InfyShield Can Help You Save Thousands of Rupees!</p> <p>Want To Save High Repair Costs?</p>
                                  </div>
                                  <div className="hero_slidbox_left_action">
                                  </div>
                                </div>
                                <div className="hero_slidbox_left_action">
                                  <a href="dvicePlans.html" className="heroActionBtn">
                                    Get Now
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 p-0 ">
                              <div className="hero_slidbox_right">
                                <figure className="figure">
                                  {/* Replace src attribute with your actual image source */}
                                  <img
                                    src={iphonex1.src}
                                    className="figure-img img-fluid halfWidth"
                                    alt="banner right"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*slider4 */}
                    <div className="swiper-slide">
                      <div className="hero_sliedbox">
                        <div className="container-fluid g-0">
                          <div className="row d-flex justify-content-center align-items-center g-0">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0 ">
                              <div className="hero_slidbox_right">
                                <figure className="figure">
                                  <img
                                    src={sld1.src}
                                    className="figure-img img-fluid fullWidth"
                                    width={326}
                                    height="auto"
                                    alt="banner right"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="hero_sliedbox">
                        <div className="container-fluid g-0">
                          <div className="row d-flex justify-content-center align-items-center g-0">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0 ">
                              <div className="hero_slidbox_right">
                                <figure className="figure">
                                  <img
                                    src={sld2.src}
                                    className="figure-img img-fluid fullWidth"
                                    width={326}
                                    height="auto"
                                    alt="banner right"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="hero_sliedbox">
                        <div className="container-fluid g-0">
                          <div className="row d-flex justify-content-center align-items-center g-0">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 p-0 ">
                              <div className="hero_slidbox_right">
                                <figure className="figure">
                                  <img
                                    src={sld3.src}
                                    className="figure-img img-fluid fullWidth"
                                    width={326}
                                    height="auto"
                                    alt="banner right"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Add more slides similarly */}
                  </div>
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                  <div className="swiper-pagination" />
                </div>
              </div>
              {/* Hero Slider Section Ends */}
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="container">
            {/* Hero Grid Card Start */}
            <div className="heroSection___gridTriCard">
              {/* Supports */}
              <div className="triCard">
                <div className="triCard___Title">
                  <h1>InfyShield Support</h1>
                </div>
                <div className="triCard___body">
                  <a href="#" className="infoCards">
                    <div className="media">
                      <img
                        src={whatsapp.src}
                        width={64}
                        height={64}
                        alt="wathsapp Supports"
                      />
                    </div>
                    Whats App
                  </a>
                  <a href="#" className="infoCards">
                    <div className="media">
                      <img
                        src={videocall.src}
                        width={64}
                        height={64}
                        alt="Video Supports"
                      />
                    </div>
                    Video Call
                  </a>
                  <a href="#" className="infoCards">
                    <div className="media">
                      <img
                        src={voicecall.src}
                        width={64}
                        height={64}
                        alt="Voice Supports"
                      />
                    </div>
                    Voice Call
                  </a>
                  <a href="#" className="infoCards">
                    <div className="media">
                      <img
                        src={email.src}
                        width={64}
                        height={64}
                        alt="Email Supports"
                      />
                    </div>
                    Email
                  </a>
                  <a href="#" className="infoCards">
                    <div className="media">
                      <img
                        src={chatbot.src}
                        width={64}
                        height={64}
                        alt="ChatBot Supports"
                      />
                    </div>
                    ChatBot
                  </a>
                  <a href="#" className="infoCards">
                    <div className="media">
                      <img
                        src={FPMS.src}
                        width={64}
                        height={64}
                        alt="FPMS Supports"
                      />
                    </div>
                    FPMS
                  </a>
                </div>
              </div>
              {/* Devices & plans */}
              <div className="triCard">
                <div className="triCard___Title">
                  <h1>Devices &amp; Plans</h1>
                </div>
                <div className="triCard___body">
                  <a href="dvicePlans.html" className="infoCards">
                    <div className="media">
                      <img
                        src={Mobile.src}
                        width={64}
                        height={64}
                        alt="Mobiles"
                      />
                    </div>
                    Mobiles
                  </a>
                  <a href="dvicePlans.html" className="infoCards">
                    <div className="media">
                      <img
                        src={Laptop.src}
                        width={64}
                        height={64}
                        alt="Laptops"
                      />
                    </div>
                    Laptops
                  </a>
                  <a href="dvicePlans.html" className="infoCards">
                    <div className="media">
                      <img
                        src={Tv.src}
                        width={64}
                        height={64}
                        alt="Smart TV"
                      />
                    </div>
                    Smart TV
                  </a>
                  <a href="dvicePlans.html" className="infoCards">
                    <div className="media">
                      <img
                        src={Ac.src}
                        width={64}
                        height={64}
                        alt="AC"
                      />
                    </div>
                    AC
                  </a>
                  <a href="dvicePlans.html" className="infoCards">
                    <div className="media">
                      <img
                        src={Camera.src}
                        width={64}
                        height={64}
                        alt="Camera"
                      />
                    </div>
                    Camera
                  </a>
                  <a href="dvicePlans.html" className="infoCards">
                    <div className="media">
                      <img
                        src={AllDevices.src}
                        width={64}
                        height={64}
                        alt="More Devices"
                      />
                    </div>
                    More
                  </a>
                </div>
              </div>
              {/* call Us */}
              <div className="triCard">
                <div className="triCard___Title">
                  <h1>For Any Assist</h1>
                </div>
                <div className="triCard___body fullCollength">
                  <div className="callCard">
                    <h3>For any assistance, please call our customer care number.</h3>
                    <h2>+91 9911&nbsp;33&nbsp;2320</h2>
                    <a href="tel:+919911332320" className="callNowbtn">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefitSection">
  <div className="container">
    {/* hero */}
    <div className="row">
      <div className="benefitHeroSection">
        {/* title */}
        <div className="lightTitle">
          <h2>Our Benefit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus.
          </p>
        </div>
        {/* fancy flex card */}
        <div className="fancyCard___box">
          <div className="fancyCard">
            <div className="fancyCard___media">
              <img
                src={fastprocess.src}
                width={62}
                height={62}
                alt="fast process"
              />
            </div>
            <div className="fancyCard___body">
              <h3>Fast Process</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="fancyCard darkbg-shield">
            <div className="fancyCard___media">
              <img
                src={bestQuality.src}
                width={62}
                height={62}
                alt="fast process"
              />
            </div>
            <div className="fancyCard___body">
              <h3>Best Quality</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="fancyCard">
            <div className="fancyCard___media">
              <img
                src={solution.src}
                width={62}
                height={62}
                alt="fast process"
              />
            </div>
            <div className="fancyCard___body">
              <h3>Solution</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* grid icons */}
    <div className="row g-0">
      <div className="fancyIcon___box">
        <div className="fancyIcon___Card">
          <div className="media">
            <img
              src={extendedwarranty.src}
              width={54}
              height={54}
              alt="Extented Warranty"
            />
          </div>
          <div className="title"> Extented Warranty</div>
        </div>
        <div className="fancyIcon___Card">
          <div className="media">
            <img
              src={replacement.src}
              width={54}
              height={54}
              alt="Replacement If not Repaired"
            />
          </div>
          <div className="title"> Replacement If not Repaired</div>
        </div>
        <div className="fancyIcon___Card">
          <div className="media">
            <img
              src={panindia.src}
              width={54}
              height={54}
              alt="Pan India Coverage"
            />
          </div>
          <div className="title"> Pan India Coverage</div>
        </div>
        <div className="fancyIcon___Card">
          <div className="media">
            <img
              src={oem.src}
              width={54}
              height={54}
              alt="OEM Authorized Service Center"
            />
          </div>
          <div className="title"> OEM Authorized Service Center</div>
        </div>
        <div className="fancyIcon___Card">
          <div className="media">
            <img
              src={accidental.src}
              width={54}
              height={54}
              alt="Accidental Damage Protection"
            />
          </div>
          <div className="title"> Accidental Damage Protection</div>
        </div>
        <div className="fancyIcon___Card">
          <div className="media">
            <img
              src={allpartlabour.src}
              width={54}
              height={54}
              alt="All Parts & Labour Covered"
            />
          </div>
          <div className="title"> All Parts &amp; Labour Covered</div>
        </div>
        <div className="fancyIcon___Card">
          <div className="media">
            <img
              src={allbrands.src}
              width={54}
              height={54}
              alt="All Products & Brands"
            />
          </div>
          <div className="title"> All Products &amp; Brands</div>
        </div>
        <div className="fancyIcon___Card">
          <div className="media">
            <img
              src={helpdesk.src}
              width={54}
              height={54}
              alt="Helpdesk Support"
            />
          </div>
          <div className="title"> Helpdesk Support</div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>

  )
}

export default Slider