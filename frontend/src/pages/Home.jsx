import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usericon from '../assets/images/usericon1.png';
import Donateslider from '../components/Donateslider';
import Support from '../components/Support';
import Donateblog from '../components/Donateblog';
import axios from 'axios';

const Home = () => {
  const DoneruserId = sessionStorage.getItem("UserId")
  const loginStatus = sessionStorage.getItem("login")
  const [showPopup, setShowPopup] = useState(false);
  const [amount, setamount] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDonateClick = () => {
    if (!loginStatus) {
      sessionStorage.setItem("redirectAfterLogin", "/donate"); // Store current location
      navigate('/login');
    } else {
      setShowPopup(true);
    }
  };

  // Function to close the popup
  const handlePopupClose = () => {
    setShowPopup(false);
    setamount('');
    setError('');
  };

  const handleamountChange = (e) => {
    setamount(e.target.value);
    setError('');
  };

  const handleConfirm = async () => {
    if (amount >= 1100) {
      try {
        const userId = DoneruserId;

        // Ensure amount is a number before sending
        const response = await axios.post('https://api.saibalikavikas.com/api/make-donatation', { amount: parseFloat(amount), userId });
        console.log(response);
        const data = response.data;

        if (data?.order) {
          const { order } = data;
          // Proceed to Razorpay payment gateway
          const options = {
            key: "rzp_test_XPcfzOlm39oYi8",
            amount: order.amount, // amount in paise
            currency: 'INR',
            name: 'Sai Balika Vikas Kalyan Society',
            description: 'Donation for social cause',
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
              address: 'Sai Balika Vikas Kalyan Society, Haryana',
            },
            theme: {
              color: '#F37254',
            },
          };

          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        } else {
          setError('Failed to create order');
        }
      } catch (error) {
        console.error('Error during donation process:', error);
        setError('An error occurred while creating the order.');
      }
    } else {
      setError('Please enter an amount of at least ₹1100 to proceed.');
    }
  };


  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <p className="fs-1 fw-bold">बेटी बचाओ, बेटी पढ़ाओ</p>
          <h1>BELIVING IS <br /> ACHIVING</h1>
          <h2 className="mt-2 mb-3">Sai Balika Vikas Kalyan Society</h2>
          <button className="btn-donate" onClick={handleDonateClick}>DONATE NOW</button>
        </div>
      </div>

      <div className="info-section mx-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="info-box d-flex">
                <img src={usericon} alt="" height={'50'} />
                <div className="info-hero">
                  <h5>बेटी बचाओ, <br />बेटी पढ़ाओ</h5>
                  <p>उन्नति का मार्ग, समाज <br /> का आधार|</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box d-flex">
                <img src={usericon} alt="" height={'50'} />
                <div className="info-hero">
                  <h5>बेटी को पढ़ाओ <br />और सक्षम बनाओ</h5>
                  <p>समाज की प्रगति का <br /> एक महत्वपूर्ण कदम|</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box d-flex">
                <img src={usericon} alt="" height={'50'} />
                <div className="info-hero">
                  <h5>बेटी<br />जन्मोत्सव</h5>
                  <p>नारी शक्ति की उत्थानी, समाज का संगठनीकरण|</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="info-box d-flex">
                <img src={usericon} alt="" height={'50'} />
                <div className="info-hero">
                  <h5>बेटी<br />जन्मोत्सव</h5>
                  <p>नारी शक्ति की उत्थानी, समाज का संगठनीकरण|</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h4>Are you sure you want to donate?</h4>
            <h3>बेटी बचाओ, बेटी पढ़ाओ</h3>
            <div className="form-group mt-3 mb-3">
              <label htmlFor="amount">Minimum Amount : <span className='text-danger'>1100 &#8377;</span></label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={handleamountChange}
                min="10"
                max="1000"
                className="form-control mb-3 mt-3"
                placeholder="Enter amount"
              />
              {error && <p className="text-danger">{error}</p>}
            </div>
            <div className="popup-buttons">
              <button className="btn btn-secondary" onClick={handlePopupClose}>Cancel</button>
              <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {/* Donate slider section */}
      <Donateslider />

      {/* Support section */}
      <Support />

      {/* Donate Blog section */}
      <Donateblog />
    </>
  );
};

export default Home;
