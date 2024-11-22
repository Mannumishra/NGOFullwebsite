import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import donate from '../assets/images/donate1.png';
import { FaFacebook, FaGoogle, FaTwitter, FaRupeeSign } from 'react-icons/fa';
import axios from 'axios';

const MarriageDetails = () => {
    const [amount, setAmount] = useState(1100);
    const [isCustom, setIsCustom] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const loginStatus = sessionStorage.getItem("login");
    const userId = sessionStorage.getItem("UserId");

    // Function to handle 'DONATE NOW' button click
    const handleDonateClick = () => {
        if (!loginStatus) {
            sessionStorage.setItem("redirectAfterLoginmarrige", "/MarriageDetails");
            navigate('/login');
        } else if (amount >= 1100) {
            setShowPopup(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Please enter an amount of ₹1100 or more to proceed.');
        }
    };

    // Function to close the popup
    const handlePopupClose = () => {
        setShowPopup(false);
    };

    // Function to confirm the donation
    const handleConfirmDonation = async () => {
        if (amount < 1100) {
            setErrorMessage('Please enter an amount of at least ₹1100 to proceed.');
            return;
        }

        try {
            const response = await axios.post('https://api.saibalikavikas.com/api/make-donatation', {
                amount: parseFloat(amount),
                userId,
            });
            const data = response.data;

            if (data?.order) {
                const { order } = data;
                const options = {
                    key: "rzp_test_XPcfzOlm39oYi8",
                    amount: order.amount, // amount in paise
                    currency: 'INR',
                    name: 'Support for Underprivileged Marriage Ceremonies',
                    description: 'Donation for a social cause',
                    order_id: order.id,
                    handler: async function (response) {
                        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

                        try {
                            const verifyResponse = await axios.post('https://api.saibalikavikas.com/api/verify-payment', {
                                paymentId: order.id,
                                razorpayPaymentId: razorpay_payment_id,
                                razorpaySignature: razorpay_signature,
                            });
                            if (verifyResponse.status === 200) {
                                alert('Donation successful');
                                setShowPopup(false);
                                navigate('/thank-you');
                            } else {
                                alert('Payment verification failed');
                            }
                        } catch (error) {
                            console.error('Error verifying payment:', error);
                            alert('Error verifying payment');
                        }
                    },
                    prefill: {
                        name: 'John Doe',
                        email: 'john@example.com',
                    },
                    notes: {
                        address: 'Support for Underprivileged Marriage Ceremonies, Haryana',
                    },
                    theme: {
                        color: '#F37254',
                    },
                };

                const rzp1 = new window.Razorpay(options);
                rzp1.open();
            } else {
                setErrorMessage('Failed to create order.');
            }
        } catch (error) {
            console.error('Error during donation process:', error);
            setErrorMessage('An error occurred while creating the order.');
        }
    };


    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    },[])

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
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="mb-4 donating">
                            <h5>YOU ARE DONATING TO:</h5>
                            <h3 className="fs-5 fw-bolder">Support for Underprivileged Marriage Ceremonies</h3>
                            <p>
                                Your contribution plays a vital role in bringing happiness and hope to couples from underprivileged backgrounds.
                                Many deserving couples dream of celebrating their special day with dignity and joy but lack the financial means
                                to make it a reality. With your generous support, we can provide them with essential resources for a beautiful
                                and memorable wedding ceremony, ensuring they embark on their new journey with love, respect, and a sense of belonging.
                                Together, we can make their dream day truly special.
                            </p>
                            <p>#8976</p>
                            <div className="progress mb-2">
                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <div className="progress-donate">
                                <p>60% Raised</p>
                                <p>Goal: 100%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="donation-box">
                        <h2>Support Us</h2>
                        <p>Celebrating the union of two hearts! Wishing the newlyweds a lifetime of love, joy, and happiness together.</p>
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
                            <button type="button" className="btn btn-warning" onClick={() => setAmount(1100)}>₹1100</button>
                            <button type="button" className="btn btn-warning" onClick={() => setAmount(1500)}>₹1500</button>
                            <button type="button" className="btn btn-warning" onClick={() => setAmount(2000)}>₹2000</button>
                            <button type="button" className="btn btn-warning" onClick={() => setIsCustom(true)}>Custom</button>
                        </div>
                        <button className="btn-donate mt-3" onClick={handleDonateClick}>DONATE NOW</button>
                        {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
                    </div>
                </div>
            </div>

            {/* Confirmation Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h4>Confirm Your Donation</h4>
                        <p>Amount: ₹{amount}</p>
                        <div className="popup-buttons">
                            <button className="btn btn-secondary" onClick={handlePopupClose}>Cancel</button>
                            <button className="btn btn-primary" onClick={handleConfirmDonation}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MarriageDetails;