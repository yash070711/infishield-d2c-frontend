import React from 'react'
import logowithShield from '../../assets/img/about/logowithShield.png'
function InfyAbout() {
  return (
  <>
  {/* About Section Start */}
  <section id="aboutSection">
    <div className="container">
      <div className="row">
        <div className="aboutContent">
          <div className="left">
            <div className="aboutLogo">
              <img src={logowithShield.src}
               alt="" />
            </div>
          </div>
          <div className="right">
            <div className="startTitle">
              <h3>InfyShield</h3>
              <h2>About&nbsp;InfyShield Extended Warranty</h2>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullam corper mattis, pulvinar dapibus.</p> */}
            </div>
            <div className="startContent">
              <p>
                {" "}
                <b>InfyShield </b>is an Extended Warranty Solution from{" "}
                <b>Infinity Assurance Solutions Private Limited</b>.{" "}
                <b>InfyShield </b> Extended Warranty Service Plans are available
                for a wide variety of products which have electrical, electronic
                and mechanical parts &amp; components and are prone to Hardware
                Defects. The product categories include IT, Office Automation,
                Telecom, Consumer Electronics, Consumer Durables, Mobility,
                Security &amp; Surveillance, Networking, Cameras etc. InfyShield
                offers an impressive range of service plans, programs and
                technology that is created to meet the needs of our customers.
              </p>
              <p>
                Headquarted in New Delhi, India,{" "}
                <b>Infinity Assurance Solutions</b> is the leading Warranty and
                Extended Warranty Service provider of India. Promoted by the
                most experienced After-Market-Services professionals, we deliver
                the Best Customer Service experience to Indian consumers. We
                have decades of national and international experience in
                Customer Service delivery for Technology products.
              </p>
              <p>
                We pride ourselves in delivering services that are consistent
                and reliable, and the solutions which are flexible and open
                enough to meet any customers requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About Section Ends */}
</>


  )
}

export default InfyAbout