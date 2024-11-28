import React, { useEffect, useState } from 'react';
import '../Sidebar/Sidebar.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const Signup = () => {
    const UserId = sessionStorage.getItem("UserId");
    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({
        parentID: '',
        title: 'Mr',
        firstName: '',
        lastName: '',
        middleName: '',
        gender: 'Male',
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

    const getUserRecord = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/get-user-details/${UserId}`);
            console.log(res);
            if (res.status === 200) {
                setUser(res.data.data);
                setFormData(prevFormData => ({
                    ...prevFormData,
                    parentID: res.data.data.logId, // Properly update parentID
                }));
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserRecord();
    }, [UserId]);

    useEffect(() => {
        if (user && user.logId) {
            setFormData(prevFormData => ({
                ...prevFormData,
                parentID: user.logId, // Update formData with the user logId
            }));
        }
    }, [user]);

    const [showPassword, setShowPassword] = useState(false);
    const [cshowPassword, setCshowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password confirmation validation
        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Password Mismatch',
                text: 'Passwords do not match. Please try again.',
            });
            return;
        }

        try {
            // console.log(formData);
            const response = await axios.post('http://localhost:8000/api/signup', formData);
            if (response.status === 201) {
                Swal.fire({
                    icon: 'success',
                    title: 'New User Added Successful',
                    text: 'You have successfully signed up!',
                });
            }
            setFormData({
                title: '',
                firstName: '',
                lastName: '',
                middleName: '',
                mobile: '',
                email: '',
                dateOfBirth: '',
                gender: '',
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
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Signup Failed',
                text: error.response?.data?.errors || 'An error occurred. Please try again.',
            });
        }
    };

    return (
        <div className="container signup-container">
            <h2 className="mb-2">Signup</h2>
            <h6 className="mb-5">Signup new login</h6>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="name">Parent ID</label>
                        <input
                            id="parentId"
                            name="parentId"
                            placeholder="parentId"
                            type="text"
                            value={user.logId || ''} // Using logId from the user data
                            onChange={handleInputChange} required
                            className='form-control'
                            disabled
                        />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="title">Title</label>
                        <select name="title" id="title" className='form-select' value={formData.title || "Mr"} onChange={handleInputChange} required>
                            <option value="Mr" >Mr</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="name">First Name</label>
                        <input
                            id="name"
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            value={formData.firstName}
                            onChange={handleInputChange} required
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="name">Middle Name</label>
                        <input
                            id="middleName"
                            name="middleName"
                            placeholder="Middle Name"
                            type="text"
                            value={formData.middleName}
                            onChange={handleInputChange}
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="lname">Last Name</label>
                        <input
                            id="lname"
                            name="lastName"
                            placeholder="Last Name"
                            type="text"
                            value={formData.lastName}
                            onChange={handleInputChange} required
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="gender">Gender</label>
                        <select
                            className="form-select"
                            name="gender"
                            value={formData.gender || "Male"}
                            onChange={handleInputChange} required
                            aria-label="Default select example"
                            style={{ outline: "none", boxShadow: "none" }}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="dateOfBirth">Date Of Birth</label>
                        <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            placeholder="Date of birth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange} required
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange} required
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="mobile">Mobile No.</label>
                        <input
                            id="mobile"
                            name="mobile"
                            placeholder="Enter mobile no. here"
                            type="number"
                            value={formData.mobile}
                            onChange={handleInputChange} required
                            className='form-control'
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="address">Address</label>
                        <textarea name="address" id="address" placeholder="Type Your Address" value={formData.address} onChange={handleInputChange} required className='form-control'></textarea>
                    </div>

                    <div className="col-md-12">
                        <label htmlFor="land-mark">Land mark</label>
                        <input
                            id="land-mark"
                            name="landmark"
                            placeholder="Enter road name"
                            type="text"
                            value={formData.landmark}
                            onChange={handleInputChange}
                            className='form-control'
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-2">
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
                    <div className="col-md-2">
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
                    <div className="col-md-2">
                        <label htmlFor="district">District</label>
                        <input
                            id="district"
                            name="district"
                            placeholder="Type Your District"
                            type="text"
                            value={formData.district}
                            onChange={handleInputChange} required
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            name="city"
                            placeholder="City"
                            type="text"
                            value={formData.city}
                            onChange={handleInputChange} required
                            className='form-control'
                        />
                    </div>
                    <div className="col-md-3">
                        <label htmlFor="pin-code">Pin code</label>
                        <input
                            id="pin-code"
                            name="pincode"
                            placeholder="Enter pin code here"
                            type="number"
                            value={formData.pincode}
                            onChange={handleInputChange} required
                            className='form-control'
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="password">Password</label>
                        <input
                            className="form-control"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange} required
                        />
                        {/* <span
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ position: 'absolute', right: '10px', top: '30px', cursor: 'pointer' }}
                        >
                            {showPassword ? "🙉" : "🙈"}
                        </span> */}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className="form-control"
                            name="confirmPassword"
                            type={cshowPassword ? "text" : "password"}
                            id="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange} required
                        />
                        {/* <span
                            onClick={() => setCshowPassword(!cshowPassword)}
                            style={{ position: 'absolute', right: '10px', top: '30px', cursor: 'pointer' }}
                        >
                            {cshowPassword ? "🙉" : "🙈"}
                        </span> */}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Signup;
