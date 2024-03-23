import Layout from '@/components/layouts/Layout';
import React from 'react';
import error from "../assets/img/under-construction-4011849_640.png"
export default function NotFound() {
  return (
<Layout>
<div style={{ display: 'flex', justifyContent: 'center' }}>
  <img 
    style={{ width: '500px' }}
    src={error ? error.src : ''}
  />


<div className="cartAddress">
                <div className="container">
                    <div className="row">
                        <div className="addCard">
                            <div className="accordion" id="accordionAddress">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Your Address{" "}
                                            <i className="fa fa-address-book" aria-hidden="true" />
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        data-bs-parent="#accordionAddress"
                                    >
                                        <div className="accordion-body">
                                            <div className="row g-0">
                                                <div id="cartAddFormBox" className="cartAdd--form">
                                                    <form action="">
                                                        <div className="row g-0 mb-0">
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="Select Device"
                                                                    className="form-label"
                                                                >
                                                                    Salutation <span className="text-danger"> *</span>{" "}
                                                                </label>
                                                                <select
                                                                    id="inputDevice"
                                                                    className="form-select form-select-lg"

                                                                >
                                                                    <option >Select Salutation...</option>
                                                                    <option>Mr.</option>
                                                                    <option>Ms.</option>
                                                                    <option>Mrs.</option>
                                                                    <option>Dr.</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="customerName"
                                                                    className="form-label"
                                                                >
                                                                    Customer Name{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="customerName"
                                                                    placeholder="Enter Your full name"

                                                                />
                                                                <small className="ms-2">
                                                                    please enter name same as in your{" "}
                                                                    <b className="text-info">AADHAAR CARD/PAN</b>{" "}
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <div className="row g-0 mb-1">
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="inputAddressLine1"
                                                                    className="form-label"
                                                                >
                                                                    Address Line 1{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputAddressLine1"
                                                                    placeholder="Address line 1"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="inputAddressLine2"
                                                                    className="form-label"
                                                                >
                                                                    Address Line 2{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputAddressLine2"
                                                                    placeholder="Address line 2"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label
                                                                    htmlFor="inputAddressLine3"
                                                                    className="form-label"
                                                                >
                                                                    Address Line 3{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputAddressLine3"
                                                                    placeholder="Address line 3"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="pinCode" className="form-label">
                                                                    Pin Code <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="pinCode"
                                                                    placeholder="Enter Pin Code"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="inputCity" className="form-label">
                                                                    City <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputCity"
                                                                    placeholder="Enter City"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="inputState" className="form-label">
                                                                    State <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="inputState"
                                                                    placeholder="Enter State"

                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row g-0 mb-4">
                                                            <div className="col-md-6">
                                                                <label htmlFor="userEmail" className="form-label">
                                                                    Email <span className="text-danger"> *</span>
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    id="userEmail"
                                                                    placeholder="Enter Email"

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="uerMobile" className="form-label">
                                                                    Mobile Number{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <div className="input-group">
                                                                    <span
                                                                        className="input-group-text"
                                                                        id="basic-addon1"
                                                                    >
                                                                        +91
                                                                    </span>
                                                                    <input
                                                                        type="tel"
                                                                        className="form-control"
                                                                        id="uerMobile"
                                                                        placeholder="Enter Mobile No."
                                                                        aria-label="Username"
                                                                        aria-describedby="basic-addon1"

                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="uerLLine" className="form-label">
                                                                    Landline Number{" "}
                                                                    <span className="text-danger"> *</span>
                                                                </label>
                                                                <div className="input-group">
                                                                    <span className="input-group-text">+91</span>
                                                                    <input
                                                                        type="tel"
                                                                        aria-label="uerLLine"
                                                                        className="form-control"
                                                                        placeholder="XXX"
                                                                    />
                                                                    <input
                                                                        type="tel"
                                                                        aria-label="uerLLine"
                                                                        className="form-control"
                                                                        placeholder="XXXXX"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row g-0 d-flex flex-column align-items-center justify-content-center">
                                                            <button
                                                                type="submit"
                                                                className="setAdd-btn btn-primary rounded-5 mb-3"
                                                            >
                                                                Add Address
                                                            </button>
                                                            <small className="smallTextInfo text-muted text-center w-75">
                                                                {" "}
                                                                <b>Note :</b>
                                                                All field with <b>*</b> are mandatory to be filled{" "}
                                                            </small>
                                                        </div>
                                                    </form>
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
</Layout>
  );
}

