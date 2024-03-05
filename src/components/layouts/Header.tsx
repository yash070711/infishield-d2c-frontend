import Link from 'next/link';
import  style from '../../styles/main.css';
import logo from '../../assets/img/logo/logo.png';

const Header: React.FC = () => {
    return (
        <>
      {/* Header Section Start */}
      <header id="headerSection">
        <div className="container-fluid">
          <div className="row">
            {/* top Header */}
            <div className="topHeader">
              <div className="container">
                <div className="row">
                  <div className="navTop">
                    <ul>
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {" "}
                          About
                        </a>
                        <div className="dropdown-menu pb-0">
                          <div className="row">
                            <div className="col-12">
                              <a
                                className="dropdown-item"
                                href="about-InfyShield.html"
                              >
                                InfyShield
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a
                                className="dropdown-item"
                                href="board-members.html"
                              >
                                Board Of Directors
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a
                                className="dropdown-item"
                                href="media-InfyShield.html"
                              >
                                Media center
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a
                                className="dropdown-item"
                                href="awards-InfyShield.html"
                              >
                                Awards &amp; Recognition
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a
                                className="dropdown-item mb-1"
                                href="career-InfyShield.html"
                              >
                                Career opportunities
                              </a>
                              {/* <hr class="dropdown-divider w-100 opacity-0"> */}
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="dropdown">
                        <a
                          className="dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {" "}
                          Reach Us
                        </a>
                        <div className="dropdown-menu pb-0">
                          <div className="row">
                            <div className="col-12">
                              <a className="dropdown-item" href="contactUs.html">
                                Contact Us
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a
                                className="dropdown-item"
                                href="customerCare.html"
                              >
                                Customer Care
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a
                                className="dropdown-item"
                                href="serviceRequest.html"
                              >
                                Service Requests
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a className="dropdown-item" href="#">
                                Online Assist
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a className="dropdown-item" href="feedback.html">
                                Feedback
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a className="dropdown-item" href="faqs.html">
                                FAQs
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a
                                className="dropdown-item"
                                href="report-Suspicious-behaviour.html"
                              >
                                Report Suspicious Behaviour
                              </a>
                              <hr className="dropdown-divider w-100" />
                              <a
                                className="dropdown-item mb-1"
                                href="report-unauthorized-transaction.html"
                              >
                                Report unauthorized Transaction
                              </a>
                              {/* <hr class="dropdown-divider w-100 opacity-0"> */}
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="tel:+919911332320" className="callSupport">
                          {" "}
                          +91 9911 33 2320
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Main Header */}
            <div className="mainHeader">
              {/* Middle Header */}
              <div className="container p-0">
                <div className="middleHeader">
                  <div className="middleHeader___Left">
                    <div className="headerbrand">
                      <a href="index.html">
                        {" "}
                        <img
                          src={logo.src}
                          width="90px"
                          height="98.6px"
                          alt="infyShield Logo"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="middleHeader___Right navbar navbar-expand-lg">
                    <div className="headerForm">
                      <form action="dvicePlans.html">
                        <div className="input-group">
                          <input
                            className="form-control"
                            name="search"
                            type="text"
                            id="search"
                          />
                          <span className="input-group-append">
                            <button className="btn btnSearch" type="button">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-search"
                              >
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                              </svg>
                            </button>
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="headergroup">
                      <ul>
                        <li className="dropdown">
                          <a
                            href="#"
                            className="loginBtn dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="LoginAvtar" /> login{" "}
                          </a>
                          <div className="dropdown-menu mb-0 pb-0">
                            <div className="row">
                              <div className="col-12">
                                <a
                                  className="dropdown-item"
                                  href="customerLogin.html"
                                >
                                  Sign In/Sign Up
                                </a>
                                <hr className="dropdown-divider w-100" />
                                <a className="dropdown-item" href="#">
                                  My Plans
                                </a>
                                <hr className="dropdown-divider w-100" />
                                <a className="dropdown-item" href="#">
                                  My Profile
                                </a>
                                <hr className="dropdown-divider w-100" />
                                <a className="dropdown-item" href="#">
                                  Raise Service Request
                                </a>
                                <hr className="dropdown-divider w-100" />
                                <a className="dropdown-item" href="#">
                                  Help &amp; Support
                                </a>
                                <hr className="dropdown-divider w-100" />
                                <a className="dropdown-item epp-item" href="#">
                                  Enterprise Partner Sign In
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a href="myCart.html" className="cartBtn">
                            {" "}
                            <span className="cartIcon" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                  </div>
                </div>
              </div>
              {/* bottom Header */}
              <div className="row">
                <div className="bottomHeader">
                  <div className="container p-0">
                    <nav className="navbar navbar-expand-lg">
                      <div className="container-fluid p-0">
                        <div
                          className="collapse navbar-collapse justify-content-end"
                          id="navbarNavDropdown"
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                aria-current="page"
                                href="index.html"
                              >
                                Home
                              </Link>
                            </li>
                            <li className="nav-item dropdown w-lg-auto">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Device &amp; Plans
                              </a>
                              <div className="dropdown-menu pb-0">
                                <a
                                  href="#"
                                  className="mega-menu-title w-dropdown-link"
                                  tabIndex={0}
                                >
                                  InfyShield Popular Categories
                                </a>
                                <ul className="flex-dropdown-List">
                                  <li className="dropdown-item">
                                    <a href="#" className="dropdown-item-links">
                                      <img
                                        className="navMedia"
                                        src="assets/img/navIcon.png"
                                        width={48}
                                        height={48}
                                        alt="mobile"
                                      />
                                      <div className="navText">
                                        <h3>Mobile Phones and Tablets</h3>
                                        <span>48 brands Covered</span>
                                      </div>
                                    </a>
                                  </li>
                                  {/* Other categories */}
                                </ul>
                                {/* Additional content */}
                              </div>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="protect-InfyShield.html"
                              >
                                Protect with InfyShield
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="track-My-service.html"
                              >
                                Track My Service
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="Earn-InfyShield.html"
                              >
                                Earn with InfyShield
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Partners with InfyShield
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section Ends */}
    </>
    )
}

export default Header;