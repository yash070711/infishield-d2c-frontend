import React from 'react'
import futhuregenrali from '../../../assets/img/partners/futuregenerali.png'
import amazon from '../../../assets/img/partners/amazon.png'
import ebay from '../../../assets/img/partners/ebay.png'
import europ from '../../../assets/img/partners/europ.png'
import rediff from '../../../assets/img/partners/rediff.png'
import shopclues from '../../../assets/img/partners/shopclues.png'
import snapdeal from '../../../assets/img/partners/snapdeal.png'
import groffers from '../../../assets/img/partners/groffers.png'
function OurPartner() {
  return (
    <>
    <>
  {/* Partners Section Start */}
  <section id="partnerSection">
    <div className="container">
      {/* title */}
      <div className="row">
        <div className="centerTitle">
          <h3>InfyShield</h3>
          <h2>Our Partners</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus.
          </p>
        </div>
      </div>
      {/* Our Partners */}
      <div className="row">
        <div className="partnerContent">
          <div className="pc_cards">
            <img
              src={futhuregenrali.src}
              width={257}
              height={93}
              alt="partners Name"
            />
          </div>
          <div className="pc_cards">
            <img
              src={amazon.src}
              width={257}
              height={93}
              alt="partners Name"
            />
          </div>
          <div className="pc_cards">
            <img
              src={ebay.src}
              width={257}
              height={93}
              alt="partners Name"
            />
          </div>
          <div className="pc_cards">
            <img
              src={europ.src}
              width={257}
              height={93}
              alt="partners Name"
            />
          </div>
          <div className="pc_cards">
            <img
              src={rediff.src}
              width={257}
              height={93}
              alt="partners Name"
            />
          </div>
          <div className="pc_cards">
            <img
              src={shopclues.src}
              width={257}
              height={93}
              alt="partners Name"
            />
          </div>
          <div className="pc_cards">
            <img
              src={snapdeal.src}
              width={257}
              height={93}
              alt="partners Name"
            />
          </div>
          <div className="pc_cards">
            <img
              src={groffers.src}
              width={257}
              height={93}
              alt="partners Name"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Partners Section Ends */}
</>

    </>
  )
}

export default OurPartner