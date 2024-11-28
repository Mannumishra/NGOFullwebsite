import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import loginImage from '../assets/images/logimg.png';

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [cshowPassword, setCshowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    dateOfBirth: '',
    state: '',
    city: '',
    address: '',
    country: 'India',
    district: '',
    pincode: '',
    landmark: '',
    password: '',
    confirmPassword: ''
  });



  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post('https://api.saibalikavikas.com/api/signup', formData);
      if (response.status = 201) {
        Swal.fire({
          icon: 'success',
          title: 'Sign Up Successful',
          text: 'You have successfully Signup !',
        })
      }
      setFormData({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        dateOfBirth: '',
        state: '',
        city: '',
        address: '',
        country: '',
        district: '',
        pincode: '',
        landmark: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: 'error',
        title: 'Signup Failed',
        text: error.response?.data?.errors || 'An error occurred. Please try again.',
      });
    }
  };

  return (
    <>
      <section className="Registration py-5">
        <div className="container Registration-container">
          <div className="form-container">
            <button className="home-button">PROCEED TO HOME</button>
            <h6>SIGN IN / REGISTRATION</h6>
            <p>Please fill your detail to create user ID and Password</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input
                  id="name"
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile No.</label>
                <input
                  id="mobile"
                  name="mobile"
                  placeholder="Enter mobile no. here"
                  type="number"
                  pattern="[0-9]"
                  value={formData.mobile}
                  onChange={handleInputChange} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dateOfBirth">Date Of Birth</label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  placeholder="Date of birth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="country">country</label>
                <select
                  className="form-select"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange} required
                  aria-label="Default select example"
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  <option selected disabled>Select country</option>
                  <option value="India">India</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="state">State</label>
                <select
                  className="form-select"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange} required
                  aria-label="Default select example"
                  style={{ outline: "none", boxShadow: "none" }}
                >
                  <option value="" selected disabled>
                    Select State
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">
                    Dadra and Nagar Haveli and Daman and Diu
                  </option>
                  <option value="Delhi">Delhi</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="district">District</label>
                <input
                  id="district"
                  name="district"
                  placeholder="Type Your District"
                  type="text"
                  value={formData.district}
                  onChange={handleInputChange} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  name="city"
                  placeholder="City"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange} required
                />
              </div>




              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  placeholder="Type Your Address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange} required
                />
              </div>



              <div className="form-group">
                <label htmlFor="pin-code">Pin code</label>
                <input
                  id="pin-code"
                  name="pincode"
                  placeholder="Enter pin code here"
                  type="number"
                  value={formData.pincode}
                  onChange={handleInputChange} required
                />
              </div>

              <div className="form-group">
                <label htmlFor="land-mark">Land mark</label>
                <input
                  id="land-mark"
                  name="landmark"
                  placeholder="Enter road name"
                  type="text"
                  value={formData.landmark}
                  onChange={handleInputChange} required
                />
              </div>

              <div style={{ position: 'relative' }}>
                <label htmlFor="password" style={{ color: "#6c757d", fontSize: "10px" }}>Password</label>
                <input
                  className="form-control"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  style={{ width: '100%' }}
                  value={formData.password}
                  onChange={handleInputChange} required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: '10px', top: '30px', cursor: 'pointer', color: '#6c757d',
                  }}
                >
                  {showPassword ? "🙉" : "🙈"}
                </span>
              </div>

              <div style={{ position: 'relative' }}>
                <label htmlFor="confirmPassword" style={{ color: "#6c757d", fontSize: "10px" }}>Confirm Password</label>
                <input
                  className="form-control"
                  name="confirmPassword"
                  type={cshowPassword ? "text" : "password"}
                  id="confirmPassword"
                  placeholder="Confirm password"
                  style={{ width: '100%' }}
                  value={formData.confirmPassword}
                  onChange={handleInputChange} required
                />
                <span
                  onClick={() => setCshowPassword(!cshowPassword)}
                  style={{
                    position: 'absolute', right: '10px', top: '30px', cursor: 'pointer', color: '#6c757d',
                  }}
                >
                  {cshowPassword ? "🙉" : "🙈"}
                </span>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3 fw-bold"
                style={{ background: "#22B6AF", border: "none" }}>
                Register
              </button>
            </form>
          </div>

          <div className="image-container">
            <img src={loginImage} alt="Login illustration" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
