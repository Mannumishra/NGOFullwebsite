import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Support = () => {
    const [amount, setAmount] = useState(1100);
    const [isCustom, setIsCustom] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const loginStatus = sessionStorage.getItem("login");
    const userId = sessionStorage.getItem("UserId");




    // Function to handle 'DONATE NOW' button click
    const handleDonateClick = () => {
        if (!loginStatus) {
            sessionStorage.setItem("redirectAfterLoginhome", "/"); // Store current location
            navigate('/login');
        }
        if (amount >= 1100) {
            setShowPopup(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Please enter an amount of ₹1100 or more to proceed.");
        }
    };

    // Function to close the popup
    const handlePopupClose = () => {
        setShowPopup(false);
    };

    // Function to confirm the donation and initiate Razorpay
    const handleConfirmDonation = async () => {
        if (amount < 1100) {
            setErrorMessage("Please enter an amount of ₹1100 or more to proceed.");
            return;
        }

        try {
            // Call your backend API to create a Razorpay order
            const response = await axios.post("http://localhost:8000/api/make-donatation", {
                amount: parseFloat(amount),
                userId,
            });

            const data = response.data;

            if (data?.order) {
                const { order } = data;
                const options = {
                    key: "rzp_test_XPcfzOlm39oYi8", // Your Razorpay key
                    amount: order.amount, // amount in paise
                    currency: "INR",
                    name: "Support for Underprivileged Marriage Ceremonies",
                    description: "Donation for a social cause",
                    order_id: order.id,
                    handler: async function (response) {
                        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = response;

                        try {
                            // Verify the payment with the backend
                            const verifyResponse = await axios.post("http://localhost:8000/api/verify-payment", {
                                paymentId: order.id,
                                razorpayPaymentId: razorpay_payment_id,
                                razorpaySignature: razorpay_signature,
                            });
                            if (verifyResponse.status === 200) {
                                alert("Donation successful");
                                setShowPopup(false);
                                navigate("/thank-you");
                            } else {
                                alert("Payment verification failed");
                            }
                        } catch (error) {
                            console.error("Error verifying payment:", error);
                            alert("Error verifying payment");
                        }
                    },
                    prefill: {
                        name: "John Doe",
                        email: "john@example.com",
                    },
                    notes: {
                        address: "Support for Underprivileged Marriage Ceremonies, Haryana",
                    },
                    theme: {
                        color: "#F37254",
                    },
                };

                const rzp1 = new window.Razorpay(options);
                rzp1.open();
            } else {
                setErrorMessage("Failed to create order.");
            }
        } catch (error) {
            console.error("Error during donation process:", error);
            setErrorMessage("An error occurred while creating the order.");
        }
    };

    return (
        <>
            <div className="container-fluid mb-5 support-hero">
                <div className="donation-box">
                    <h2>Support Us</h2>
                    <p>
                        Your donation provides crucial support for girl child welfare, education, marriage assistance, and accidental death
                        benefits.
                    </p>
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
                                width: "100%",
                                height: "48px",
                                border: "none",
                                textAlign: "center",
                                fontSize: "30px",
                                fontWeight: "700",
                                color: "#6c757d",
                            }}
                        />
                    </div>
                    <div className="btn-group d-flex" role="group">
                        <button type="button" className="btn btn-warning" onClick={() => setAmount(1100)}>
                            ₹1100
                        </button>
                        <button type="button" className="btn btn-warning" onClick={() => setAmount(1500)}>
                            ₹1500
                        </button>
                        <button type="button" className="btn btn-warning" onClick={() => setAmount(2000)}>
                            ₹2000
                        </button>
                        <button type="button" className="btn btn-warning" onClick={() => setIsCustom(true)}>
                            Custom
                        </button>
                    </div>
                    <button className="btn-donate mt-3" onClick={handleDonateClick}>
                        DONATE NOW
                    </button>

                    {/* Display error message if amount is less than ₹1100 */}
                    {errorMessage && <p style={{ color: "red", marginTop: "10px" }}>{errorMessage}</p>}
                </div>
            </div>

            {/* Confirmation Popup */}
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h4>Are you sure you want to donate ₹{amount}?</h4>
                        <div className="popup-buttons">
                            <button className="btn btn-secondary" onClick={handlePopupClose}>
                                Cancel
                            </button>
                            <button className="btn btn-primary" onClick={handleConfirmDonation}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Support;
