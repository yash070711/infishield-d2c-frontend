import React, { useEffect, useState } from 'react';
import Layout from '@/components/layouts/Layout';
import { getAllnewproductcategory } from '@/services/global_services';
import { useParams } from 'next/navigation';
import Link from 'next/link';

function ProductList() {
    const { productnewid } = useParams() ?? { productnewid: null }; // Default value or check for null
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                if (productnewid) {
                    const response = await getAllnewproductcategory(productnewid);
                    setProducts(response ?? []);
                } else {
                    console.error('productnewid is undefined');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [productnewid]);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
  return (
    <Layout>
    {/* Main Content Section Start */}
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
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Our Devices
                        </li>
                      </ol>
                    </nav>
                    {/* Breadcrumb ends */}
                    {/* banner start */}
                    <div className="OuterBanner">
                      <div className="row g-0 d-flex justify-content-start align-items-center">
                        <div className="col-xs-8 col-sm-8 col-md-6 col-lg-6 mb-7 mb-lg-0 p-0">
                          <div className="OuterBanner--left">
                            <div className="left_content">
                              <h2>InfyShield</h2>
                              <h1 className="display-3">Browse By Devices</h1>
                              <p>
                                Hassle Free Claim with InfyShield for all brands
                              </p>
                              <p>
                                Select Your Product Type And Extend   Warranty
                                Today!
                              </p>
                            </div>
                            <div className="left_action d-none">
                              <a href="#trackForm" className="ActionBtn">
                                {" "}
                                View Now
                              </a>
                            </div>
                          </div>
                        </div>
                    
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
    {/* Main Content Section Ends */}
    {/* Our Products start */}
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
                        <option >sort...</option>
                        <option>A-z</option>
                        <option>Z-a</option>
                        <option>Popular</option>
                        <option>New Arrivals</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="Select Device Type" className="form-label">
                        Select Type
                      </label>
                      <select id="inputDeviceBrand" className="form-select">
                        <option >Type...</option>
                        <option>IOS</option>
                        <option>Android</option>
                        <option>Windows</option>
                        <option>4G</option>
                        <option>5G</option>
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
                      <a href="#"> Mobile Phones &amp; Tablets</a>
                    </li>
                    <li>
                      <a href="#"> Televisions &amp; Entertainment</a>
                    </li>
                    <li>
                      <a href="#"> Large Appliances</a>
                    </li>
                    <li>
                      <a href="#"> Laptops, PCs &amp; Computing</a>
                    </li>
                    <li>
                      <a href="#"> Office &amp; Retail Automation</a>
                    </li>
                    <li>
                      <a href="#"> Kitchen Appliances</a>
                    </li>
                    <li>
                      <a href="#"> Home Appliances</a>
                    </li>
                    <li>
                      <a href="#"> Cameras &amp; Photography</a>
                    </li>
                    <li>
                      <a href="#"> Display, Projection &amp; Conferencing</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* products */}
            <div className="ourDevice--filterGrid">
            
            {products.map(product => (
              <div key={product.productnewid} className="deviceCard">
                <div className="media">
                  <img
                    src={product.image} // Assuming there's an image URL in the product data
                    width={180}
                    height={180}
                    alt="Device Image"
                  />
                </div>
                <div className="ctaBody">
                  <h3>{product.subcategoryname}</h3> {/* Render product name */}
                  <a href="#" className="viewPlan-btn">
                    View Plan
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Track Claim Ends */}
    </Layout>
  
  )
}

export default ProductList