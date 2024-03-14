import React, { useEffect, useState } from 'react';
import Layout from '@/components/layouts/Layout';
import { getAllnewproductcategory } from '@/services/global_services';
import { NewProductList } from '@/interfaces/common.interfaces';
import mp3PlayerImage from '../../assets/img/product/mp3player.jpg';
import lcdImage from '../../assets/img/product/Lcd.jpeg';
import ledTvImage from '../../assets/img/product/LED TV.png';
import crtTvImage from '../../assets/img/product/Tv CRT.webp';
import plasmaTvImage from '../../assets/img/product/tv plasma.jpg';
import setupBoxImage from '../../assets/img/product/setupbox.jpg';
import homeTheatreImage from '../../assets/img/product/home theatre.jpg';
import bluplayer from '../../assets/img/product/blu player.jpg';
import multimediaspeaker from '../../assets/img/product/mulitimedia speaker.webp';
import mediaplayer from '../../assets/img/product/multi media.jpg';
import dvdPlayerImage from '../../assets/img/product/dvd player.jpg';
import ebook from '../../assets/img/product/ebookreader.jpg';
import smart from '../../assets/img/product/mobile smat.jpg';
import feature from '../../assets/img/product/mobile feature.jpeg';
import tablet from '../../assets/img/product/mobileand tablet.jpg';
import Link from 'next/link';


const getCategoryImage = (subcategoryid: number): string => {
  switch (subcategoryid) {
    case 4:
      return mp3PlayerImage.src;
    case 5:
      return lcdImage.src;
    case 6:
      return ledTvImage.src;
    case 7:
      return crtTvImage.src;
    case 8:
      return plasmaTvImage.src;
    case 17:
      return setupBoxImage.src;
    case 18:
      return homeTheatreImage.src;
    case 19:
      return dvdPlayerImage.src;
    case 20:
      return bluplayer.src;
    case 82:
      return multimediaspeaker.src;
    case 94:
      return mediaplayer.src;
    case 107:
      return ebook.src;
    case 1:
      return smart.src;
    case 2:
      return feature.src;
    case 3:
      return tablet.src;
    default:
      return '';
  }
};


function ProductList() {
  const [products, setProducts] = useState<NewProductList>([] as NewProductList);
  const [filteredProducts, setFilteredProducts] = useState<NewProductList>([] as NewProductList);
  const [filterId, setFilterId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllnewproductcategory();
        setProducts(response.data as NewProductList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (filterId !== null) {
      const filtered = products.filter((product: { productnewid: number; }) => product.productnewid === filterId);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, filterId]);

  return (
    <Layout>
      <section className="pageTop--MainContent mb-0">
        <div className="container g-0">
          <div className="row g-0">
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
                          <li className="breadcrumb-item active" aria-current="page">
                            Our Devices
                          </li>
                        </ol>
                      </nav>
                      {/* Breadcrumb ends */}
                      {/* banner start */}
                      <div className="OuterBanner">
                        <div className="row g-0 d-flex justify-content-start align-items-center">
                          <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6 mb-7 mb-lg-0 p-0"></div>
                        </div>
                      </div>
                      {/* banner ends */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="OurDevices--Section">
        <div className="container">
          <div className="row">
            <div className="topheadfilter d-flex align-items-center justify-content-between">
              <a
                className="allCati-btn"
                data-bs-toggle="offcanvas"
                href="#offcanvasWithBothOptions"
                role="button"
                aria-controls="offcanvasExample"
              >
                <span> View All Categories</span>
              </a>
              {/* filter */}
              <div className="onheadfilter">
                <div className="dw--form">
                  <form action="">
                    <div className="row g-0 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="sortBy" className="form-label">
                          Sort By
                        </label>
                        <select id="sortBy" className="form-select">
                          <option>sort...</option>
                          <option>A-z</option>
                          <option>Z-a</option>
                          <option>Popular</option>
                          <option>New Arrivals</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="Select Device Type" className="form-label">
                          Select Category Type
                        </label>
                        <select
                          id="inputDeviceBrand"
                          className="form-select"
                          onChange={(e) => setFilterId(parseInt(e.target.value))}
                        >
                          <option value={null}>Type...</option>
                          <option value={1}>Televisions & Entertainment</option>
                          <option value={2}>Mobile Phones & Tablet</option>
                          <option value={3}>Large Appliances</option>
                          <option value={4}>Laptops, PCs & Computing</option>
                          <option value={5}>Office & Retail Automation</option>
                          <option value={6}>Kitchen Appliances</option>
                          <option value={7}>Home Appliances</option>
                          <option value={8}>Cameras & Photography</option>
                          <option value={9}>Display, Projection & Conferencing</option>
                          {/* Add other options as per your productnewid */}
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* offcanvas  side left nav */}
              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                    Filters
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <hr />
                  <div className="catiList">
                    <div className="cateHead">
                      <h4>InfyShield</h4>
                      <h3>Products and Devices</h3>
                    </div>
                    <ul>
                      <li>
                        <a href="#"> Mobile Phones & Tablets</a>
                      </li>
                      <li>
                        <a href="#"> Televisions & Entertainment</a>
                      </li>
                      <li>
                        <a href="#"> Large Appliances</a>
                      </li>
                      <li>
                        <a href="#"> Laptops, PCs & Computing</a>
                      </li>
                      <li>
                        <a href="#"> Office & Retail Automation</a>
                      </li>
                      <li>
                        <a href="#"> Kitchen Appliances</a>
                      </li>
                      <li>
                        <a href="#"> Home Appliances</a>
                      </li>
                      <li>
                        <a href="#"> Cameras & Photography</a>
                      </li>
                      <li>
                        <a href="#"> Display, Projection & Conferencing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* products */}
              <div className="ourDevice--filterGrid">
                {filteredProducts.map((product: any, index: number) => (
                  <div className="deviceCard" key={index}>
                    <div className="media">
                      <img
                        src={getCategoryImage(product.subcategoryid)}
                        width={180}
                        height={180}
                        alt="Device Image"
                      />
                    </div>
                    <div className="ctaBody">
                      <h3>{product.subcategoryname}</h3>
                      <Link href={{ pathname: '/plan' }}  className="viewPlan-btn">
                        View Plan
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductList;
