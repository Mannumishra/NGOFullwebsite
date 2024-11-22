import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        parentID: '',
        referralID: '',
        placement: '',
        logId: '',
        password: '',
        confirmPassword: '',
        fname: '',
        mname: '',
        lname: '',
        fathername: '',
        dob: '',
        account: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        state: '',
        city: '',
        district: '',
        pincode: '',
        landmark: '',
        country: ''
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        // Check if required fields are filled
        Object.keys(formData).forEach((field) => {
            if (!formData[field] && field !== 'mname' && field !== 'address2') {
                newErrors[field] = `${field} is required`;
            }
        });

        // Check if password and confirm password match
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // Check if email is in valid format
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email format is invalid";
        }

        // Check if phone number is valid
        if (formData.phone && formData.phone.length < 10) {
            newErrors.phone = "Phone number must be at least 10 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted successfully:', formData);
            // Handle form submission here (e.g., API call)
        }
    };

    return (
        <div className="container signup-container">
            <h2 className="mb-2">Signup</h2>
            <h6 className="mb-5">Signup new login</h6>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="parentID" className="form-label">Parent ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="parentID"
                            name="parentID"
                            placeholder="SSS07SUNLND2"
                            value={formData.parentID}
                            onChange={handleInputChange}
                        />
                        {errors.parentID && <div className="text-danger">{errors.parentID}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="referralID" className="form-label">Referral</label>
                        <input
                            type="text"
                            className="form-control"
                            id="referralID"
                            name="referralID"
                            placeholder="SSS07SUNLND2"
                            value={formData.referralID}
                            onChange={handleInputChange}
                        />
                        {errors.referralID && <div className="text-danger">{errors.referralID}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="placement" className="form-label">Placement</label>
                        <input
                            type="text"
                            className="form-control"
                            id="placement"
                            name="placement"
                            placeholder="L2"
                            value={formData.placement}
                            onChange={handleInputChange}
                        />
                        {errors.placement && <div className="text-danger">{errors.placement}</div>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="logId" className="form-label">Logid</label>
                        <input
                            type="text"
                            className="form-control"
                            id="logId"
                            name="logId"
                            placeholder="LogId"
                            value={formData.logId}
                            onChange={handleInputChange}
                        />
                        {errors.logId && <div className="text-danger">{errors.logId}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <div className="text-danger">{errors.password}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fname"
                            name="fname"
                            placeholder="First Name"
                            value={formData.fname}
                            onChange={handleInputChange}
                        />
                        {errors.fname && <div className="text-danger">{errors.fname}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="mname" className="form-label">Middle Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mname"
                            name="mname"
                            placeholder="Middle Name"
                            value={formData.mname}
                            onChange={handleInputChange}
                        />
                        {errors.mname && <div className="text-danger">{errors.mname}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lname"
                            name="lname"
                            placeholder="Last Name"
                            value={formData.lname}
                            onChange={handleInputChange}
                        />
                        {errors.lname && <div className="text-danger">{errors.lname}</div>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="fathername" className="form-label">Father's Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fathername"
                            name="fathername"
                            placeholder="Father name"
                            value={formData.fathername}
                            onChange={handleInputChange}
                        />
                        {errors.fathername && <div className="text-danger">{errors.fathername}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="dob" className="form-label">Date of birth</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                        />
                        {errors.dob && <div className="text-danger">{errors.dob}</div>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="account" className="form-label">Account Type</label>
                        <input
                            type="text"
                            className="form-control"
                            id="account"
                            name="account"
                            placeholder="Account Type"
                            value={formData.account}
                            onChange={handleInputChange}
                        />
                        {errors.account && <div className="text-danger">{errors.account}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="phone" className="form-label">Mobile</label>
                        <input
                            type="number"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                        {errors.phone && <div className="text-danger">{errors.phone}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="address1" className="form-label">Address 1</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address1"
                            name="address1"
                            placeholder="Address 1"
                            value={formData.address1}
                            onChange={handleInputChange}
                        />
                        {errors.address1 && <div className="text-danger">{errors.address1}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="address2" className="form-label">Address 2</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address2"
                            name="address2"
                            placeholder="Address 2"
                            value={formData.address2}
                            onChange={handleInputChange}
                        />
                        {errors.address2 && <div className="text-danger">{errors.address2}</div>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="state" className="form-label">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="state"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleInputChange}
                        />
                        {errors.state && <div className="text-danger">{errors.state}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="city" className="form-label">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleInputChange}
                        />
                        {errors.city && <div className="text-danger">{errors.city}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="district" className="form-label">District</label>
                        <input
                            type="text"
                            className="form-control"
                            id="district"
                            name="district"
                            placeholder="District"
                            value={formData.district}
                            onChange={handleInputChange}
                        />
                        {errors.district && <div className="text-danger">{errors.district}</div>}
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-4">
                        <label htmlFor="pincode" className="form-label">Pincode</label>
                        <input
                            type="text"
                            className="form-control"
                            id="pincode"
                            name="pincode"
                            placeholder="Pincode"
                            value={formData.pincode}
                            onChange={handleInputChange}
                        />
                        {errors.pincode && <div className="text-danger">{errors.pincode}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="landmark" className="form-label">Landmark</label>
                        <input
                            type="text"
                            className="form-control"
                            id="landmark"
                            name="landmark"
                            placeholder="Landmark"
                            value={formData.landmark}
                            onChange={handleInputChange}
                        />
                        {errors.landmark && <div className="text-danger">{errors.landmark}</div>}
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="country" className="form-label">Country</label>
                        <input
                            type="text"
                            className="form-control"
                            id="country"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleInputChange}
                        />
                        {errors.country && <div className="text-danger">{errors.country}</div>}
                    </div>
                </div>

                <button type="submit" class="btn btn-primary" style={{background:"rgb(34, 182, 175)", border:"none"}}>Submit</button>
            </form>
        </div>
    );
};

export default Signup;
