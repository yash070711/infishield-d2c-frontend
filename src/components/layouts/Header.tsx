import Link from 'next/link';
import logo from '../../assets/img/logo/logo.png';

import SearchInputField from '../input-fields/SearchField';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { getProductSubcategoryList } from '@/services/global_services';
import Image, { StaticImageData } from 'next/image';
import mobile from '../../assets/img/devices/PNG/Mobile.png'
import AC from '../../assets/img/devices/PNG/ACs.png'
import Laptops from '../../assets/img/devices/PNG/Laptops.png'
import Cameras from '../../assets/img/devices/PNG/Cameras.png'
import TVs from '../../assets/img/devices/PNG/TVs.png'
import phone from '../../assets/img/devices/PNG/phone.png'
import AllDevices from '../../assets/img/devices/PNG/AllDevices.png'
import APP_ROUTES from '@/pages/routes';


const getCategoryImage = (categoryId: number): string => {
  switch (categoryId) {
    case 1:
      return TVs.src;
    case 2:
      return mobile.src;
    case 3:
      return AllDevices.src;
    case 4:
      return Laptops.src;
    case 5:
      return AllDevices.src;
    case 6:
      return AC.src;
    case 7:
      return AllDevices.src;
    case 8:
      return Cameras.src;
    case 9:
      return phone.src;
    default:
      return ''; 
  }
};
const Header: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const router = useRouter();
  const [query, setQuery] = useState('');


  const onSearch = (query: string) => {
    setQuery(query);
  }

  const handleSearch = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (query.length > 0)
      router.push('/categories?q=' + query)
  }


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

  
  return (
    <>
      <header className="headerSection">
        <div className="container-fluid">
          <div className="row">
            {/* top Header */}
            <div className="topHeader">
              <div className="container">
                <div className="row">
                  <div className="navTop">
                    <ul className='flex gap-4'>
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
                      <a href={'/'}>
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
                      <form onSubmit={handleSearch}>
                        <SearchInputField onSearch={onSearch} />
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
                                <Link
                                  className="dropdown-item"
                                  href='/login'
                                >
                                  Sign In/Sign Up
                                </Link>
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
                          < Link href='/cart' className="cartBtn">
                            {" "}
                            <span className="cartIcon" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <button
                      className="navbar-toggler collapsed"
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
                          className="navbar-collapse justify-content-end collapse"
                          id="navbarNavDropdown"
                        >
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                              >
                                Home
                              </Link>
                            </li>
                            <li className="nav-item dropdown w-lg-auto">
                              <Link
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Device &amp; Plans
                              </Link>
                              <div className="dropdown-menu pb-0">
                                <Link
                                  href="#"
                                  className="mega-menu-title w-dropdown-link"
                                  tabIndex={0}
                                >
                                  InfyShield Popular Categories
                                </Link>
                                <ul className="flex-dropdown-List">
                                  {categories.map((category) => {
                                    return (
                                      <li key={category.id} className="dropdown-item">
                                       <Link href={`/productlist?subcategoryid=${category.subcategoryid}`} className="dropdown-item-links">
                                          <div className="navMedia">
                                            <img
                                              src={getCategoryImage(category.subcategoryid)}
                                              width={48}
                                              height={48}
                                              alt={category.subcategoryname}
                                            />
                                          </div>
                                          <div className="navText">
                                            <h3>{category.subcategoryname}</h3>
                                            <span>{category.subcategoryname}</span>
                                          </div>
                                        </Link>
                                      </li>
                                    );
                                  })}


                                </ul>

                                {/* Additional content */}
                              </div>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                href="protect-InfyShield.html"
                              >
                                Protect with InfyShield
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link href="/trackmyservice" className="nav-link">
                                Track My Service
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link
                                className="nav-link"
                                href="Earn-InfyShield.html"
                              >
                                Earn with InfyShield
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" href="Partners with InfyShield.html">
                                Partners with InfyShield
                              </Link>
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