/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import donate from '../assets/images/donate1.png'
import { FaFacebook, FaGoogle, FaTwitter, FaRupeeSign } from 'react-icons/fa';
import Imagecontainer from './Imagecontainer';

const Makedonation = () => {
    const [amount, setAmount] = useState(100);
    const [isCustom, setIsCustom] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    // Function to handle 'DONATE NOW' button click
    const handleDonateClick = () => {
        if (amount >= 100) {
            setShowPopup(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter an amount of ₹100 or more to proceed.');
        }
    };

    // Function to close the popup
    const handlePopupClose = () => {
        setShowPopup(false);
    };

    // Function to confirm the donation
    const handleConfirmDonation = () => {
        setShowPopup(false);
        navigate('/payment-gateway'); // Redirect to payment gateway
    };

    return (
        <>
            <div className="container pb-5">
                {/* Header and Navigation */}
                <div className="header header-container">
                    <h3 className="fs-3 pt-4">Make a Donation</h3>
                    <nav>
                        <Link to="/">Home</Link>
                        <AiOutlineRight />
                        <Link to="">Donate</Link>
                    </nav>
                </div>
                <div className="row pt-5">
                    <div className="col-lg-6 col-md-12">
                        <div className="mb-4">
                            <img src={donate} className="img-fluid make-donation-img" alt="Education Support Image" />
                        </div>
                        <div className="donation-box">
                            <h2>Support Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className="rupees-container">
                                <div className="icon">
                                    <FaRupeeSign />
                                </div>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (!isNaN(value) && value >= 0) {
                                            setAmount(parseFloat(value));
                                        }
                                    }}
                                    style={{
                                        width: "100%", height: "48px", border: "none", textAlign: "center",
                                        fontSize: "30px", fontWeight: "700", color: "#6c757d"
                                    }}
                                />
                            </div>
                            <div className="btn-group d-flex" role="group">
                                <button type="button" className="btn btn-warning" onClick={() => setAmount(1000)}>₹1000</button>
                                <button type="button" className="btn btn-warning" onClick={() => setAmount(1500)}>₹1500</button>
                                <button type="button" className="btn btn-warning" onClick={() => setAmount(2000)}>₹2000</button>
                                <button type="button" className="btn btn-warning" onClick={() => setIsCustom(true)}>Custom</button>
                            </div>
                            <button className="btn-donate mt-3" onClick={handleDonateClick}>DONATE NOW</button>
                            {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="mb-4 donating">
                            <h5>YOU ARE DONATING TO:</h5>
                            <h3 className="fs-5 fw-bolder">Education Needs For Change The World</h3>
                            <p>Lorem Ipsum is not simply random text. It has roots in classical Latin literature.</p>
                            <p>#7589</p>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "43%" }} aria-valuenow="43" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div className="progress-donate">
                                <p>43% Donate</p>
                                <p>Goals 100%</p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5 className="fs-3 fw-bolder">Login to Donate</h5>
                            <form className="donate-form">
                                <div className="form-group">
                                    <input type="email" className="form-control form-group1" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-group1" placeholder="Password" />
                                </div>

                                <Link to="">
                                    <input type="button" value="sign up" className="formbtn" />
                                </Link>
                            </form>
                            <div className="text-center my-3">or</div>

                            <button className="btn btn-primary mb-2 facebookbtn"> <FaFacebook />Continue with Facebook</button>
                            <button className="btn btn-danger mb-2 googlebtn"><FaGoogle /> Continue with Google</button>
                            <button className="btn btn-secondary twitterbtn"><FaTwitter />Continue with Twitter</button>
                            <p className="pt-2">With an account, you will be able to view your past contributions and follow favourite projects.</p>
                        </div>
                        <div className="mb-4">
                            <h5 className="fs-4 fw-bolder">Or donate without an account</h5>
                            <input type="checkbox" /> Donate anonymously
                        </div>
                        <div className="mb-4">
                            <h5>Personal Details</h5>
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6 pb-2">
                                        <input type="text" className="form-control personal-details" placeholder="First Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" className="form-control personal-details" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 pb-2">
                                        <input type="email" className="form-control personal-details" placeholder="Email" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control personal-details" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-md-6 pb-2">
                                        <input type="text" className="form-control personal-details" placeholder="Contact Address" />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="number" className="form-control personal-details" placeholder="Pin Code" />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <label>Upload a Profile Picture</label>
                                    <input type="file" className="form-control mt-2" />
                                </div>
                                <input type="checkbox" /> I agree to the terms and conditions.
                            </form>
                        </div>

                        <div className="mt-4">
                            <h5>Our Promise to You</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod tempor arcu sit amet auctor.</p>
                        </div>
                        <div className="">
                            <Link to="">
                                <button className="btn btn-success donatebtn">Donate</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h4>Are you sure you want to donate ₹{amount}?</h4>
                        <div className="popup-buttons">
                            <button className="btn btn-secondary" onClick={handlePopupClose}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleConfirmDonation}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}

            <Imagecontainer />
        </>
    );
};

export default Makedonation;
