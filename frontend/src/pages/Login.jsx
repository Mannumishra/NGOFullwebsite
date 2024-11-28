import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import loginImage from '../assets/images/logimg.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    logId: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.logId) newErrors.logId = 'Phone/User ID is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.post(
        'http://localhost:8000/api/log-in',
        formData
      );
      console.log(res)
      if (res.status === 200) {
        sessionStorage.setItem('login', true);
        sessionStorage.setItem("UserId", res.data.user.id);
        // Retrieve the redirect URL from session storage or default to '/admin-dashboard'
        const redirectAfterLogin = sessionStorage.getItem('redirectAfterLogin') || '/admin-dashboard';
        const redirectAfterLoginMarriage = sessionStorage.getItem('redirectAfterLoginmarrige') || '/admin-dashboard';
        const redirectAfterLoginGirlBorn = sessionStorage.getItem('redirectAfterLogingirlborn') || '/admin-dashboard';
        const redirectAfterLoginAccidental = sessionStorage.getItem('redirectAfterLoginAccidental') || '/admin-dashboard';
        const redirectAfterLoginSupport = sessionStorage.getItem('redirectAfterLoginhome') || '/admin-dashboard';

        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
        }).then(() => {
          // Navigate to the first available redirect URL
          if (redirectAfterLogin !== '/admin-dashboard') {
            window.location.href = redirectAfterLogin;
          } else if (redirectAfterLoginMarriage !== '/admin-dashboard') {
            window.location.href = redirectAfterLoginMarriage;
          } else if (redirectAfterLoginGirlBorn !== '/admin-dashboard') {
            window.location.href = redirectAfterLoginGirlBorn;
          } else if (redirectAfterLoginAccidental !== '/admin-dashboard') {
            window.location.href = redirectAfterLoginAccidental;
          }
          else if (redirectAfterLoginSupport !== '/admin-dashboard') {
            window.location.href = redirectAfterLoginSupport;
          } else {
            window.location.href = '/admin-dashboard'; // Default fallback
          }
          sessionStorage.removeItem("redirectAfterLogin"); // Clear after use
          sessionStorage.removeItem("redirectAfterLoginmarrige"); // Clear after use
          sessionStorage.removeItem("redirectAfterLogingirlborn"); // Clear after use
          sessionStorage.removeItem("redirectAfterLoginAccidental"); // Clear after use
        });
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.response?.data?.errors || 'An error occurred. Please try again.',
      });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <>
      <section className="login py-5">
        <div className="container login-container">
          <div className="left-section">
            <Link to="/">
              <button className="btn btn-primary btn1">PROCEED TO HOME</button>
            </Link>
            <h2>LOGIN</h2>
            <p>Please fill your detail to access your account.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="logId" style={{ color: '#6c757d', fontSize: '15px' }}>
                Phone / User ID
              </label>
              <input
                type="text"
                placeholder="phone / user id"
                name="logId"
                value={formData.logId}
                onChange={handleInputChange}
              />
              {errors.logId && (
                <div className="text-danger" style={{ fontSize: '12px' }}>
                  {errors.logId}
                </div>
              )}

              <div style={{ position: 'relative' }}>
                <label htmlFor="password" style={{ color: '#6c757d', fontSize: '15px' }}>
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  style={{ width: '100%' }}
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '30px',
                    cursor: 'pointer',
                    color: '#6c757d',
                  }}
                >
                  {showPassword ? '🙉' : '🙈'}
                </span>
                {errors.password && (
                  <div className="text-danger" style={{ fontSize: '12px' }}>
                    {errors.password}
                  </div>
                )}
              </div>

              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
                <Link to="/forgot-password" style={{ float: 'right' }}>
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Sign in
              </button>

              <div className="signup">
                <p>
                  Don't have an account? <Link to="/Registration">Sign up</Link>
                </p>
              </div>
            </form>
          </div>

          <div className="right-section">
            <img
              src={loginImage}
              alt="Illustration of a person holding a child with the text 'SAVE GIRL CHILD'"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
