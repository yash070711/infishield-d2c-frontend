import styles from './styles/Footer.module.scss';
import help from '../../assets/img/footer/NeedHelp-iconFt.svg'
import logo from '../../assets/img/logo/logo.png'
import WhatsApp from '../../assets/img/footer/socials/WhatApp.svg'
import Instagram from '../../assets/img/footer/socials/insta.svg'
import Fb from '../../assets/img/footer/socials/fb.svg'
import Linkedin from '../../assets/img/footer/socials/linkedIn.svg'
import piniconFT from '../../assets/img/footer/pin-iconFT.svg'
import calliconFt from '../../assets/img/footer/call-iconFt.svg'
import mailicon from '../../assets/img/footer/mail-iconFt.svg'
import infinityAssuranceFt from '../../assets/img/footer/infinityAssuranceFt.png'
import footerpayment from '../../assets/img/footer/footer-payment.png'
import sslft from '../../assets/img/footer/sslFt.png'
const Footer: React.FC = () => {
	return (
		<>
	<>
  {/* Footer Section Start */}
  <footer id="fotterSection">
    <div className="container">
      {/* Subscribe Now */}
      <div className="row g-0 justify-content-center">
        <div className="newsLetter">
          <div className="head">
            <h2>Subscribe Newsletter</h2>
            <p>
              Subscribe to our newsletter for all the latest news and cool tips
              and tricks to keep your mobile devices safe &amp; secure. We
              promise we never spam, and you can unsubscribe easily.
            </p>
          </div>
          <div className="newsInputs">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email here...."
                aria-label="Enter your email here...."
                aria-describedby="button-addon2"
              />
              <button className="btn btnSubs" type="button" id="button-addon2">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Need Help */}
      <div className="row">
        <div className="needHelp">
          <div className="nh_left">
            <div className="media">
              <img
                src={help.src}
                width={73}
                height={73}
                alt="need Help"
              />
            </div>
            <div className="content">
              <h2>Need help for Claim?</h2>
              <p>Talk to our Liberty Home Guard Agents 24/7.</p>
            </div>
          </div>
          <div className="nh_right">
            <a href="tel:+919911332320">
              <h1>+91 9911 33 2320 </h1>
            </a>
            <p className="d-lg-none">
              Talk to our Liberty Home Guard Agents 24/7.
            </p>
          </div>
        </div>
      </div>
      {/* footers Top Links */}
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="ft_logo">
            <img
              src={logo.src}
              width={90}
              height={99}
              alt="ft-logo"
            />
            <p>
              InfyShield&nbsp;is an Extended Warranty Solution
              from&nbsp;Infinity Assurance Solutions Private Limited
            </p>
            <div className="ft_social">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src={WhatsApp.src}
                      width={27}
                      height={27}
                      alt="whatsapp"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={Instagram.src}
                      width={27}
                      height={27}
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={Fb.src}
                      width={27}
                      height={27}
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={Linkedin.src}
                      width={27}
                      height={27}
                      alt="Linkedin"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-9">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="ft_links">
                <h3>Device &amp; Plans</h3>
                <ul>
                  <li>
                    <a href="detailPlan.html">
                      {" "}
                      Televisions &amp; Entertainment
                    </a>
                  </li>
                  <li>
                    <a href="detailPlan.html"> Mobile Phones &amp; Tablets</a>
                  </li>
                  <li>
                    <a href="detailPlan.html"> Large Appliances</a>
                  </li>
                  <li>
                    <a href="detailPlan.html"> Laptops, PCs &amp; Computing</a>
                  </li>
                  <li>
                    <a href="detailPlan.html">
                      {" "}
                      Office &amp; Retail Automation
                    </a>
                  </li>
                  <li>
                    <a href="detailPlan.html"> Kitchen Appliances</a>
                  </li>
                  <li>
                    <a href="detailPlan.html"> Home Appliances</a>
                  </li>
                  <li>
                    <a href="detailPlan.html"> Cameras &amp; Photography</a>
                  </li>
                  <li>
                    <a href="detailPlan.html">
                      {" "}
                      Display, Projection &amp; Conferencing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="ft_links">
                <h3>Our Company</h3>
                <ul>
                  <li>
                    <a href="about-InfyShield.html"> About</a>
                  </li>
                  <li>
                    <a href="track-Myservice.html"> Track My Claim</a>
                  </li>
                  <li>
                    <a href="protect-InfyShield.html">
                      {" "}
                      Protect with InfyShield
                    </a>
                  </li>
                  <li>
                    <a href="Earn-InfyShield.html"> Earn with InfyShield</a>
                  </li>
                  <li>
                    <a href="#"> Partner with InfyShield</a>
                  </li>
                  <li>
                    <a href="faqs.html"> FAQs</a>
                  </li>
                  <li>
                    <a href="#"> Media</a>
                  </li>
                  <li>
                    <a href="contactUs.html"> Contact Us</a>
                  </li>
                  <li>
                    <a href="customerCare.html"> Customer Care</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className="ft_links">
                <h3>Contact Details</h3>
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src={piniconFT.src}
                        width={27}
                        height={27}
                        alt="Location"
                      />{" "}
                      Infinity Assurance Solution Pvt.Ltd., 24, US Complex,
                      Adjacent to Jasola Apollo Metro Station, 120, Mathura
                      Road, New Delhi - 110076(India)
                    </a>
                  </li>
                  <li>
                    <a href="callto:+919911332320">
                      <img
                        src={calliconFt.src}
                        width={27}
                        height={27}
                        alt="call"
                      />
                      +91 9911 33 2320
                    </a>
                  </li>
                  <li>
                    <a href="mailto:buy@infyshield.com">
                      <img
                        src={mailicon.src}
                        width={27}
                        height={27}
                        alt="mail"
                      />
                      buy@infyshield.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footers Middle Links */}
      <div className="row">
        <div className="ft_medias">
          <ul>
            <li>
              <img
                src={sslft.src}
                width={245}
                height={69}
                alt="ssl"
              />
            </li>
            <li>
              <a href="https://www.infinityassurance.com/">
                <img
                  src={infinityAssuranceFt.src}
                  width={245}
                  height={69}
                  alt="www.infinityassurance.com"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* footer Bottom Links */}
      <div className="row">
        <div className="ft_bottom">
          <div className="left">
            <ul>
              <li>
                <a href="#">Terms Of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="copyRight">
              <p>Copyright © InfyShield. All rights reserved.</p>
            </div>
            <div className="payModes">
              <img
                src={footerpayment.src}
                width={212}
                height={25}
                alt="payModes"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer Section Ends */}
</>

		</>
	);
};

export default Footer;
