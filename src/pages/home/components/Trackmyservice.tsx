import Link from 'next/link'
import React from 'react'

function Trackmyservice() {
  return (
 <>
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
                        Track My Service
                      </li>
                    </ol>
                  </nav>
                  <div className="OuterBanner">
                    <div className="row g-0 d-flex justify-content-start align-items-center">
                      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 mb-7 mb-lg-0 p-0">
                        <div className="OuterBanner--left">
                          <div className="left_content">
                            <h2>InfyShield</h2>
                            <h1 className="display-3">Track My Service</h1>
                            <p>Hassle Free Claim with InfyShield</p>
                            <p>
                              • Intimate Claim &nbsp; • Upload documents &nbsp;
                              • Track Claim Status
                            </p>
                          </div>
                          <div className="left_action d-none">
                            <a href="#trackForm" className="ActionBtn">
                              {" "}
                              Track Now
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
  <div className="trackClaim--Section">
    <div className="container">
      <div className="row justify-content-center">
        <div id="trackForm" className="trackClaim--body">
          <div className="trackClaim--left">
            <div className="trackClaim--Formcards fixed">
              <h3>Please Enter Your Loan Details</h3>
              <small>
                Start your claim journey by filling following details
              </small>
              <form action="">
                <div className="row g-0 mb-3">
                  <div className="col-md-12">
                    <label htmlFor="inputPolicyNumber" className="form-label">
                      My Loan Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPolicyNumber"
                      placeholder="My Loan Number"
                    />
                  </div>
                </div>
                <div className="row g-0 mb-4">
                  <div className="col-md-12">
                    <label htmlFor="inputPolicyNumber" className="form-label">
                      Verify the captcha
                    </label>
                    <div className="input-group">
                      <input
                        type="tel"
                        aria-label="uerLLine"
                        className="form-control"
                        placeholder="Captcha"
                      />
                      <span className="input-group-text captchaBtn">75628</span>
                      <span className="input-group-text">
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            fill="currentColor"
                            className="bi bi-arrow-repeat"
                            viewBox="0 0 16 16"
                          >
                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                            <path
                              fillRule="evenodd"
                              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"
                            />
                          </svg>{" "}
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row g-0 d-flex justify-content-center">
                  <button
                    type="submit"
                    className="trackShield-btn btn-primary rounded-5 mb-3"
                  >
                    Track Now
                  </button>
                  <small className="smallTextInfo text-muted text-center w-75">
                    {" "}
                    <b>Note :</b>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </small>
                </div>
              </form>
            </div>
          </div>
          <div className="trackClaim--right">
            <h3>Claim Journey</h3>
            <div className="trackClaim--content">
              <div className="track--step">
                <div className="stepMedia">
                  <img
                    src="assets/img/trackClaim/Claim_Intimation.svg"
                    width={24}
                    height={24}
                    alt="Map Pin"
                  />
                </div>
                <div className="stepText w-75">
                  <h4>Claim stepText</h4>
                  <p>Initiate your claim with few details</p>
                </div>
              </div>
              <div className="track--step">
                <div className="stepMedia">
                  <img
                    src="assets/img/trackClaim/file-svgrepo-com.svg"
                    width={24}
                    height={24}
                    alt="Map Pin"
                  />
                </div>
                <div className="stepText">
                  <h4>Fill E-Claim Form</h4>
                  <p> Fill your E-Claim with few details instantly </p>
                </div>
              </div>
              <div className="track--step">
                <div className="stepMedia">
                  <img
                    src="assets/img/trackClaim/upload_doc.svg"
                    width={24}
                    height={24}
                    alt="Map Pin"
                  />
                </div>
                <div className="stepText">
                  <h4>Upload Documents</h4>
                  <p>Upload all documents in seconds </p>
                </div>
              </div>
              <div className="track--step">
                <div className="stepMedia">
                  <img
                    src="assets/img/trackClaim/claim_tracking.svg"
                    width={24}
                    height={24}
                    alt="Map Pin"
                  />
                </div>
                <div className="stepText">
                  <h4>Claim Tracking</h4>
                  <p> Track your claim status /Know your claim status </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  )
}

export default Trackmyservice