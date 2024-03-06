import React from 'react'
import logored from '../../assets/img/plans/LogoRed.png'
import logogreen from '../../assets/img/plans/LogoGreen.png'
import logoblack from '../../assets/img/plans/LogoBlack.png'
function Plans() {
  return (
    <>
    <>
  {/* Plan Section Start */}
  <section id="planSection">
    <div className="container">
      {/* title */}
      <div className="row">
        <div className="centerTitle">
          <h3>InfyShield</h3>
          <h2>Our Plans</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus.
          </p>
        </div>
      </div>
      {/* Plan Cards */}
      <div className="row">
        <div className="swiper planFlexBox" id="slideOnsm">
          <div className="swiper-wrapper">
            <div className="swiper-slide ">
              <div className="planCard  light_brd">
                <div className="head">
                  <div className="media">
                    <img
                      src={logored.src}
                      width={74}
                      height={85}
                      alt="log - Extented Waranty with ADP "
                    />
                  </div>
                  <h3>Extented Waranty (EWS)</h3>
                </div>
                <div className="body">
                  <ul>
                    <li className="cross">
                      <p>Period Of Coverage Upto 3 Yr</p>
                    </li>
                    <li className="tick">
                      <p>Cover Start From the Date of Purchase </p>
                    </li>
                    <li className="tick">
                      <p>Eligibility From Date of Purchase</p>
                    </li>
                    <li className="tick">
                      <p>Cover All Parts and Labor</p>
                    </li>
                    <li className="tick">
                      <p>100% Free Repair For Normal Device Failure</p>
                    </li>
                    <li className="tick">
                      <p>
                        Replacement If Not Repair As per EWS or ADP Condition
                      </p>
                    </li>
                    <li className="tick">
                      <p>Accidental Physical Damage </p>
                    </li>
                  </ul>
                  <a href="dvicePlans.html" className="btn___Solidtbtn">
                    {" "}
                    Get Now{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="planCard popPlan">
                <div className="head">
                  <div className="media">
                    <img
                      src={logoblack.src}
                      width={72}
                      height={79}
                      alt="log - Extented Waranty with ADP "
                    />
                  </div>
                  <h3>Accidental Damage Protection (ADP)</h3>
                </div>
                <div className="body">
                  <ul>
                    <li className="tickDark">
                      <p>Period Of Coverage Upto 3 Yr</p>
                    </li>
                    <li className="tickDark">
                      <p>Cover Start From the Date of Purchase </p>
                    </li>
                    <li className="tickDark">
                      <p>Eligibility From Date of Purchase</p>
                    </li>
                    <li className="tickDark">
                      <p>Cover All Parts and Labor</p>
                    </li>
                    <li className="tickDark">
                      <p>100% Free Repair For Normal Device Failure</p>
                    </li>
                    <li className="tickDark">
                      <p>
                        Replacement If Not Repair As per EWS or ADP Condition
                      </p>
                    </li>
                    <li className="cross">
                      <p>Accidental Physical Damage </p>
                    </li>
                  </ul>
                  <a href="dvicePlans.html" className="btn___Lightbtn">
                    {" "}
                    Get Now{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide ">
              <div className="planCard light_brd">
                <div className="head">
                  <div className="media">
                    <img
                      src={logogreen.src}
                      width={72}
                      height={79}
                      alt="log - Extented Waranty with ADP "
                    />
                  </div>
                  <h3>Extented Waranty with ADP </h3>
                </div>
                <div className="body">
                  <ul>
                    <li className="tick">
                      <p>Period Of Coverage Upto 3 Yr</p>
                    </li>
                    <li className="cross">
                      <p>Cover Start From the Date of Purchase </p>
                    </li>
                    <li className="tick">
                      <p>Eligibility From Date of Purchase</p>
                    </li>
                    <li className="tick">
                      <p>Cover All Parts and Labor</p>
                    </li>
                    <li className="tick">
                      <p>100% Free Repair For Normal Device Failure</p>
                    </li>
                    <li className="cross">
                      <p>
                        Replacement If Not Repair As per EWS or ADP Condition
                      </p>
                    </li>
                    <li className="tick">
                      <p>Accidental Physical Damage </p>
                    </li>
                  </ul>
                  <a href="dvicePlans.html" className="btn___Solidtbtn">
                    {" "}
                    Get Now{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
          <div className="swiper-pagination" />
        </div>
      </div>
    </div>
  </section>
  {/* Plan Section Ends */}
</>

    </>
  )
}

export default Plans