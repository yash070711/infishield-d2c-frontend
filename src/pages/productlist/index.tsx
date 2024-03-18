import React, { useEffect, useState } from 'react';
import Layout from '@/components/layouts/Layout';
import { getAllnewproductcategory, getBrandsByProducts, getProductSubcategoryList, getSubcategoryByProducts } from '@/services/global_services';
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
import iphone from '../../assets/img/iphone.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import dynamic from 'next/dynamic';
import { Modal } from 'react-bootstrap';
const getCategoryImage = (productid: number): string => {
  switch (productid) {
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
  const router = useRouter();
  const { subcategoryid } = router.query;
  const [products, setProducts] = useState<NewProductList>([] as NewProductList);
  const [filteredProducts, setFilteredProducts] = useState<NewProductList>([] as NewProductList);
  const [filterId, setFilterId] = useState<number | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<string>(''); // State to manage sorting
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [deviceList, setDeviceList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {

        await getSubcategoryByProducts(subcategoryid).then(response => {
          if (response.statusCode === 200 && response.isSuccess && response.data) {
            setProducts(response.data);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally {
        setLoading(false); // Set loading to false when data fetching completes (whether successful or not)
      }
    }
    fetchData();
  }, [subcategoryid]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await getProductSubcategoryList('');
      setCategories(response.data);
      // Assuming the API response has a `data` property containing the list of categories
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getBrandsByProducts(subcategoryid);
        if (response.statusCode === 200 && response.isSuccess && response.data) {
          setDeviceList(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [subcategoryid]);

  useEffect(() => {
    if (filterId !== null) {
      const filtered = products.filter((product: { subcategoryid: number; }) => product.subcategoryid === filterId);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [products, filterId]);

  useEffect(() => {
    // Call sorting function when sortBy state changes
    sortProducts();
  }, [sortBy]);
  const sortProducts = () => {
    let sortedProducts = [...filteredProducts];
    if (sortBy === 'A-z') {
      sortedProducts.sort((a, b) => a.productname.localeCompare(b.productname));
    } else if (sortBy === 'Z-a') {
      sortedProducts.sort((a, b) => b.productname.localeCompare(a.productname));
    } else if (sortBy === 'Popular') {
      // Implement sorting logic for popularity
    } else if (sortBy === 'New Arrivals') {
      // Implement sorting logic for new arrivals
    }
    setFilteredProducts(sortedProducts);
  };
  
  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  console.log('products', products);
  if (loading) {
    // If loading, display a loading indicator
    <div className="loader-container">
      <div className="spinner"></div>
    </div>
  }
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
                            <Link href="/">Home</Link>
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

      {
  /* Modal for Brands start */
}
<Modal
show={showModal}  
onHide={toggleModal}
  className="modal fade"
  id="selectBrands"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabIndex={-1}
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">
          Select Device Brands
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body">
        <div className="main-container">
          {/* search field strat*/}
          <div className="searchbar">
            <div className="searchbar-wrapper">
              <div className="searchbar-left">
                <div className="search-icon-wrapper">
                  <span className="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="searchbar-center">
                <div className="searchbar-input-spacer" />
                <input
                  type="text"
                  className="searchbar-input"
                  maxLength={2048}
                  name="q"
                  autoCapitalize="off"
                  autoComplete="off"
                  title="Search"
                  role="combobox"
                  placeholder="Search Brand..."
                />
              </div>
              <div className="searchbar-right">
                <svg
                  className="voice-search"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#9aa0a6"
                    d="M8 10c-1.7 0-3-1.3-3-3V3c0-1.6 1.3-3 3-3c1.6 0 3 1.3 3 3v4c0 1.6-1.4 3-3 3"
                  />
                  <path
                    fill="#9aa0a6"
                    d="M12 5v2.5c0 1.9-1.8 3.5-3.8 3.5h-.4C5.8 11 4 9.4 4 7.5V5c-.6 0-1 .4-1 1v1.5c0 2.2 1.8 4.1 4 4.4V14c-3 0-2.5 2-2.5 2h7s.5-2-2.5-2v-2.1c2.2-.4 4-2.2 4-4.4V6c0-.6-.4-1-1-1"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* search field ends*/}
          <h2>Search your brand if not visible here</h2>
          <div className="radio-buttons">
  {deviceList.map((brand, index) => (
    <label key={index} className="custom-radio">
      <input type="radio" name="radio" />
      <span className="radio-btn">
        <i className="las la-check" />
        <div className="brand-icon">
          <img src={iphone.src} alt={brand.Brand} />
          <h3>{brand.Brand}</h3>
        </div>
      </span>
    </label>
  ))}
</div>
        </div>
      </div>
    </div>
  </div>
</Modal>;
{
  /* Modal for Brands ends */
}


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
                        <select
                          id="sortBy"
                          className="form-select"
                          onChange={(e) => setSortBy(e.target.value)}
                        >
                          <option value="">Sort...</option>
                          <option value="A-z">A-z</option>
                          <option value="Z-a">Z-a</option>
                          <option value="Popular">Popular</option>
                          <option value="New Arrivals">New Arrivals</option>
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
                          <option value="">Type...</option>
                          <option value={subcategoryid}>Televisions & Entertainment</option>
                          <option value={subcategoryid}>Mobile Phones & Tablet</option>
                          <option value={subcategoryid}>Large Appliances</option>
                          <option value={subcategoryid}>Laptops, PCs & Computing</option>
                          <option value={subcategoryid}>Office & Retail Automation</option>
                          <option value={subcategoryid}>Kitchen Appliances</option>
                          <option value={subcategoryid}>Home Appliances</option>
                          <option value={subcategoryid}>Cameras & Photography</option>
                          <option value={subcategoryid}>Display, Projection & Conferencing</option>
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

                    {categories.map((category) => {
                      return (
                        <>
                         
                          <li key={category.id} className="dropdown-item">
                            <Link href={`/productlist?subcategoryid=${category.subcategoryid}`} className="dropdown-item-links"
                            >
                              <div className="navMedia">

                              </div>
                              <div className="navText">

                                <span>{category.subcategoryname}</span>
                              </div>
                            </Link>
                          </li>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* products */}
              <div className="ourDevice--filterGrid">
                {filteredProducts.map((product: any, index: number) => (
                  <>
                      
                  <div className="deviceCard" key={index}>
                    <div className="media">
                      <img
                        src={getCategoryImage(product.productid)}
                        width={180}
                        height={180}
                        alt="Device Image"
                      />
                    </div>
                    <div className="ctaBody">
                      <h3>{product.productname}</h3>
                      <button  className="viewPlan-btn"  onClick={toggleModal}>
                        View Plan
                      </button>
                      {/* href={`/plan?subcategoryid=${product.productid}`} */}
                    </div>
                  </div>
                  </>
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
