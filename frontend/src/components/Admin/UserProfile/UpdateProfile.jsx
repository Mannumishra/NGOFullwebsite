import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2


const UpdateProfile = () => {
    const userId = sessionStorage.getItem("UserId");
    const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
    const [userData, setUserData] = useState({
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        fathersName: '',
        motherName: '',
        gender: '',
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
        nomineeName: '',
        nomineeRelation: '',
        nomineeAddress: '',
        nomineeNumber: '',
        panNumber: '',
        ifscCode: '',
        accountNumber: '',
        gstNumber: '',
    });


    const getUserdata = async () => {
        try {
            const res = await axios.get(`https://api.saibalikavikas.com/api/get-user-details/${userId}`);
            console.log(res)
            if (res.status === 200) {
                setUserData(res.data.data);
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'Failed to fetch user data.', 'error');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`https://api.saibalikavikas.com/api/update-profile/${userData._id}`, userData);
            if (res.status === 200) {
                Swal.fire('Success', 'Profile updated successfully!', 'success');
            } else {
                Swal.fire('Failed', 'Failed to update profile. Please try again.', 'error');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'An error occurred while updating the profile.', 'error');
        }
    };

    const handleInfoSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`https://api.saibalikavikas.com/api/update-profile/${userData._id}`, {
                nomineeName: userData.nomineeName,
                nomineeRelation: userData.nomineeRelation,
                nomineeAddress: userData.nomineeAddress,
                nomineeNumber: userData.nomineeNumber,
            });
            if (res.status === 200) {
                Swal.fire('Success', 'Nominee details updated successfully!', 'success');
            } else {
                Swal.fire('Failed', 'Failed to update nominee details. Please try again.', 'error');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'An error occurred while updating nominee details.', 'error');
        }
    };

    const handleSubmitPanNumber = async (e) => {
        e.preventDefault();
        try {
            const isValidPAN = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(userData.panNumber);
            if (isValidPAN) {
                const res = await axios.put(`https://api.saibalikavikas.com/api/update-profile/${userData._id}`, {
                    panNumber: userData.panNumber,
                });
                if (res.status === 200) {
                    Swal.fire('Success', 'Pan Number details updated successfully!', 'success');
                } else {
                    Swal.fire('Failed', 'Failed to update Pan Number details. Please try again.', 'error');
                }
            }
            else {
                Swal.fire('Error', 'Invailid Pan Number .', 'error');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'An error occurred while updating Pan Number details.', 'error');
        }
    };


    const handleSubmitBankDetails = async (e) => {
        e.preventDefault();
        if (userData.accountNumber !== confirmAccountNumber) {
            Swal.fire('Error', 'Account Numbers do not match.', 'error');
            return;
        }
        try {
            const res = await axios.put(`https://api.saibalikavikas.com/api/update-profile/${userData._id}`, {
                ifscCode: userData.ifscCode,
                accountNumber: userData.accountNumber,
            });

            if (res.status === 200) {
                Swal.fire('Success', 'Bank details updated successfully!', 'success');
            } else {
                Swal.fire('Failed', 'Failed to update bank details. Please try again.', 'error');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'An error occurred while updating bank details.', 'error');
        }
    };

    const handleSubmitGST = async (e) => {
        e.preventDefault();
        try {
            const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
            if (!gstRegex.test(userData.gstNumber)) {
                Swal.fire('Invalid GST Number', 'Please enter a valid GST number.', 'error');
                return;
            }
            const res = await axios.put(`https://api.saibalikavikas.com/api/update-profile/${userData._id}`, {
                gstNumber: userData.gstNumber,
            });
            if (res.status === 200) {
                Swal.fire('Success', 'GST Number updated successfully!', 'success');
            } else {
                Swal.fire('Failed', 'Failed to update GST Number. Please try again.', 'error');
            }
        } catch (error) {
            console.error(error);
            Swal.fire('Error', 'An error occurred while updating GST Number.', 'error');
        }
    };


    useEffect(() => {
        getUserdata();
    }, []);
    return (
        <>
            <div className="container">
                <h2 className="mb-4">Update Profile</h2>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "18px" }}>
                                <span className="fw-bold">Basic</span>
                                <span>LogID : {userData.logId}<br />Name : {userData.firstName} {userData?.middleName} {userData?.lastName}</span>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <select name="title" className="form-control" value={userData.title} onChange={handleChange}>
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                            </select>
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="firstName" className="form-label">First Name</label>
                                            <input type="text" className="form-control" name="firstName" value={userData.firstName} onChange={handleChange} placeholder="First Name" required />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="middleName" className="form-label">Middle Name</label>
                                            <input type="text" className="form-control" name="middleName" value={userData.middleName} onChange={handleChange} placeholder="Middle Name" />
                                        </div>
                                        <div className="col-md-3">
                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                            <input type="text" className="form-control" name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-5">
                                            <label htmlFor="fathersName" className="form-label">Father's Name</label>
                                            <input type="text" className="form-control" name="fathersName" value={userData.fathersName} onChange={handleChange} placeholder="Father Name" required />
                                        </div>
                                        <div className="col-md-5">
                                            <label htmlFor="motherName" className="form-label">Mother's Name</label>
                                            <input type="text" className="form-control" name="motherName" value={userData.motherName} onChange={handleChange} placeholder="Mother Name" required />
                                        </div>
                                        <div className="col-md-2">
                                            <label htmlFor="gender" className="form-label">Gender</label>
                                            <select name="gender" className="form-control" value={userData.gender} onChange={handleChange}>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-5">
                                            <label htmlFor="mobile" className="form-label">Mobile Number</label>
                                            <input type="text" className="form-control" name="mobile" value={userData.mobile} onChange={handleChange} placeholder="Phone Number" required />
                                        </div>
                                        <div className="col-md-5">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" name="email" value={userData.email} onChange={handleChange} placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label htmlFor="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" name="address" value={userData.address} onChange={handleChange} placeholder="Address" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="landmark" className="form-label">Landmark</label>
                                            <input type="text" className="form-control" name="landmark" value={userData.landmark} onChange={handleChange} placeholder="Landmark" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label htmlFor="city" className="form-label">City</label>
                                            <input type="text" className="form-control" name="city" value={userData.city} onChange={handleChange} placeholder="City" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="district" className="form-label">District</label>
                                            <input type="text" className="form-control" name="district" value={userData.district} onChange={handleChange} placeholder="District" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label htmlFor="state" className="form-label">State</label>
                                            <input type="text" className="form-control" name="state" value={userData.state} onChange={handleChange} placeholder="State" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label htmlFor="pincode" className="form-label">Pincode</label>
                                            <input type="number" className="form-control" name="pincode" value={userData.pincode} onChange={handleChange} placeholder="Pin Code" required />
                                        </div>
                                        <div className="col-md-2">
                                            <label htmlFor="country" className="form-label">Country</label>
                                            <input type="text" className="form-control" name="country" value={userData.country} onChange={handleChange} placeholder="Country" required />
                                        </div>
                                        <div className="col-md-6 mt-4">
                                            <button type="submit" className="btn btn-primary" style={{ float: "right", background: "#22B6AF", border: "none" }}>Update Profile</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header fs-4">Info</div>
                            <div className="card-body">
                                <form onSubmit={handleInfoSubmit}>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="nomineeName" className="form-label">Nominee Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nomineeName"
                                                value={userData.nomineeName || ''}
                                                onChange={handleChange}
                                                placeholder="Nominee Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="nomineeRelation" className="form-label">Nominee Relation</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nomineeRelation"
                                                value={userData.nomineeRelation || ''}
                                                onChange={handleChange}
                                                placeholder="Relation"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="nomineeNumber" className="form-label">Nominee Phone Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nomineeNumber"
                                                value={userData.nomineeNumber || ''}
                                                onChange={handleChange}
                                                placeholder="Phone Number"
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="nomineeAddress" className="form-label">Nominee Address</label>
                                            <textarea
                                                className="form-control"
                                                name="nomineeAddress"
                                                value={userData.nomineeAddress || ''}
                                                onChange={handleChange}
                                                placeholder="Address"
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ float: "right", background: "#22B6AF", border: "none" }}>
                                        Update Info
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header fs-4">Update PAN</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmitPanNumber}>
                                    <div className="mb-3">
                                        <label htmlFor="panNumber" className="form-label"> PAN Number</label>
                                        <input type="text" className="form-control" id="panNumber" name='panNumber' placeholder="CQXPK7553H" value={userData.panNumber} onChange={handleChange} required />
                                        {/* <span className={`mt-2 d-block ${status === "Approved" ? "text-success" : status === "Rejected" ? "text-danger" : "text-warning"}`} >
                                            {status}
                                        </span> */}
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ float: "right", background: "#22B6AF", border: "none" }}>Update PAN</button>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header fs-4">Update Bank A/c</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmitBankDetails}>
                                    <div className="mb-3">
                                        <label htmlFor="ifscCode" className="form-label">IFSC Code</label>
                                        <input type="text" className="form-control" name='ifscCode' value={userData.ifscCode} id="ifscCode" placeholder="PUNB0028410" required onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="accountNumber" className="form-label">Account Number</label>
                                        <input type="number" className="form-control" name="accountNumber" value={userData.accountNumber} onChange={handleChange} id="accountNumber" placeholder="02842191014958" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmAccountNumber" className="form-label">Confirm Account Number</label>
                                        <input type="number" className="form-control" onChange={(e) => setConfirmAccountNumber(e.target.value)} id="confirmAccountNumber" placeholder="02842191014958" required />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ float: "right", background: "#22B6AF", border: "none" }}
                                    >
                                        Update A/C
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header fs-4">Update GST</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmitGST}>
                                    <div className="mb-3">
                                        <label htmlFor="gstNumber" className="form-label">GST Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="gstNumber"
                                            name="gstNumber"
                                            placeholder="Type here"
                                            value={userData.gstNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ float: 'right', background: '#22B6AF', border: 'none' }}
                                    >
                                        Update GST
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdateProfile;