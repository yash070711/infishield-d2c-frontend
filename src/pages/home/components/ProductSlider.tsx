import React, { useEffect } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
import sld1 from '../../../assets/img/feature/featured1.png';
import sld2 from '../../../assets/img/feature/featuredum2.png';
import sld3 from '../../../assets/img/feature/featuredum.png';
import 'swiper/css';

const ProductSlider = () => {
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
                                    src={sld1.src}
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
            
              {/* Devices & plans */}
           
              {/* call Us */}
          
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSlider;
