import no1choice from '../../../assets/img/network/no1peopleChoice.svg'
import claim100 from '../../../assets/img/network/100Claims.svg'
import allbrands from '../../../assets/img/network/allBrands.svg'
import googlerating from '../../../assets/img/network/googleRating.svg'
import star from '../../../assets/img/star.png'
import girl from '../../../assets/img/girl.png'
import Man from '../../../assets/img/man.png'
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const reviews = [
    {
      profileImage: girl.src,
      name: "Name of profile",
      location: "Location of profile",
      rating: 4.5,
      reviewText: "A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer."
    },
    {
      profileImage: Man.src,
      name: "Yash",
      location: "Delhi",
      rating: 4.5,
      reviewText: "A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer."
    },
    {
      profileImage: Man.src,
      name: "Rahul",
      location: "Uttar Pradesh",
      rating: 5,
      reviewText: "A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer."
    },
    {
      profileImage: girl.src,
      name: "Rachita",
      location: "Punjab",
      rating: 4.5,
      reviewText: "A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer."
    },
    {
      profileImage: Man.src,
      name: "Rammu",
      location: "Andhra Pradesh",
      rating: 4.5,
      reviewText: "A review is a survey over a whole subject or division of it, or especially an article making a critical reconsideration and summary of something written: a review of the latest book on Chaucer."
    },
    // Add more reviews as needed
  ];
function Networks() {
    useEffect(() => {
        // Initialize swiper when component mounts
        new Swiper('.reviewSwiper', {
          // Your swiper options here
          slidesPerView: 'auto',
          spaceBetween: 30,
          speed: 1500,
          loop: true, // Enable continuous loop
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
      }, []);
  return (
<>
  {/* Network Section start */}
  <section id="networkSection">
    <div className="container">
      {/* title */}
      <div className="row">
        <div className="centerTitle">
          <h3>InfyShield</h3>
          <h2>Our Network</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullam corper mattis, pulvinar dapibus.
          </p>
        </div>
      </div>
      {/* Plan Cards */}
      <div className="row">
        <div className="networkContent">
          <div className="nc_left">
            <div className="title">
              <h2>
                <span>INFYSHIELD’S</span> ALL INDIA SERVICE NETWORK
              </h2>
            </div>
            <div className="contentBody">
              <p>
                Our services are backed by an ever increasing network of
                authorized service partners.
              </p>
              <p>
                Our service partners are technically competent, regularly
                trained, audited and ranked to deliver excellent support to you.
              </p>
              <p>
                Just approach our technical centre for reporting any defect with
                your product. Your complaint will be recorded and the nearest
                service centre will be informed to take action as soon as
                possible.
              </p>
              <p>Currently, we offer support in over 300 cities.</p>
            </div>
          </div>
          <div className="nc_right">
            <div className="nc_counterTop">
              <div className="nc_card ">
                <span>300+</span>
                <p>Cities</p>
              </div>
              <div className="nc_card">
                <span>3000+</span>
                <p>Service Centers</p>
              </div>
              <div className="nc_card">
                <span>8000+</span>
                <p>Pin Codes</p>
              </div>
            </div>
            <div className="nc_counterBottom">
              <div className="nc_iconCard">
                <img
                  src={no1choice.src}
                  width=""
                  height=""
                  alt="No.1 People Choice"
                />
                <p>No.1 Choice</p>
              </div>
              <div className="nc_iconCard">
                <img
                  src={claim100.src}
                  width=""
                  height=""
                  alt="100% Claim"
                />
                <p>100% Claims</p>
              </div>
              <div className="nc_iconCard">
                <img
                  src={allbrands.src}
                  width=""
                  height=""
                  alt="All Brands Devices"
                />
                <p>All Brands</p>
              </div>
              <div className="nc_iconCard">
                <img
                  src={googlerating.src}
                  width=""
                  height=""
                  alt="Google Rating"
                />
                <p>Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Network Section Ends */}
  <section id="reviewSection">
      <div className="container">
        <div className="row">
          <div className="swiper reviewSwiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="row">
                  {reviews.slice(0, 3).map((review, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="reviewCards">
                        <div className="head">
                          <div className="profile">
                            <img
                              src={review.profileImage}
                              width={512}
                              height={512}
                              alt="profile image"
                            />
                          </div>
                          <div className="profileInfo">
                            <h3>{review.name}</h3>
                            <h4>{review.location}</h4>
                            <div className="rating">
                              <span className="rateCount">{review.rating}</span>
                              <ul>
                                {[...Array(Math.floor(review.rating))].map((_, i) => (
                                  <li key={i}>
                                    <img src={star.src} alt="star" />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="body">
                          <p>{review.reviewText}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="swiper-slide">
                <div className="row">
                  {reviews.slice(3, 5).map((review, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="reviewCards">
                        <div className="head">
                          <div className="profile">
                            <img
                              src={review.profileImage}
                              width={512}
                              height={512}
                              alt="profile image"
                            />
                          </div>
                          <div className="profileInfo">
                            <h3>{review.name}</h3>
                            <h4>{review.location}</h4>
                            <div className="rating">
                              <span className="rateCount">{review.rating}</span>
                              <ul>
                                {[...Array(Math.floor(review.rating))].map((_, i) => (
                                  <li key={i}>
                                    <img src={star.src} alt="star" />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="body">
                          <p>{review.reviewText}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* nav and pagination */}
            <div className="swiper-button-next" />
            <div className="swiper-button-prev" />
            <div className="swiper-pagination mt-sm-2 mt-4" />
          </div>
        </div>
      </div>
    </section>
</>
  )
}

export default Networks