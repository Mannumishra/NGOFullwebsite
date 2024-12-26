/* eslint-disable jsx-a11y/img-redundant-alt */

import React, { useEffect, useState } from 'react';
import '../Dashboard/personaldetails.css';
import userImg from '../assets/images/userimg.png';
import { FaCopy } from "react-icons/fa";
import user1 from '../assets/images/user1.png';
import user2 from '../assets/images/user2.png';
import user3 from '../assets/images/user3.png';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css'
import axios from 'axios';

const PersonalDetails = () => {
    const userId = sessionStorage.getItem("UserId")
    const [userdata, setUserdata] = useState({})
    const [leftUser, setLeftUser] = useState(null); // State for left user
    const [rightUser, setRightUser] = useState(null); // State for right user


    const getUserRecord = async () => {
        try {
            const res = await axios.get(`https://api.saibalikavikas.com/api/get-user-details/${userId}`);
            if (res.status === 200) {
                setUserdata(res.data.data);

                // Fetch left and right users under the main user
                const userRelation = await axios.get(`https://api.saibalikavikas.com/api/user-relation/${userId}`);
                if (userRelation.status === 200 && userRelation.data) {
                    setLeftUser(userRelation.data.userRelation.leftUser);
                    setRightUser(userRelation.data.userRelation.rightUser);
                }
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        getUserRecord()
    }, [userId])

    console.log(userdata)
    return (
        <>
            <div className="container">
                <div className="profile-card">
                    <div className="profile-header"></div>
                    <div className="profile-body">
                        <img src={userImg} alt="User Profile" />
                        <div className="profile-info mx-5">
                            <h5>{userdata.logId}</h5>
                            <p>{userdata?.address}, {userdata?.city}, {userdata?.district}, {userdata?.state}, {userdata?.country}, {userdata?.pincode}</p>
                        </div>
                    </div>
                </div>

                <div className="row pt-4 mt-4 profile-details">
                    <div className="col-md-4 col-12">
                        <div className="personal-details">
                            <h5>Personal-Details</h5>
                            <p>Name: {userdata?.firstName} {userdata?.middleName} {userdata?.lastName}<br />
                                Mobile No : {userdata.mobile}<br />
                                {/* Qualified Upto: Jan, 2025<br /> */}
                                Joining date : {userdata.createdAt}</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-md-0 mt-3">
                        <div className="personal-details">
                            <h5>Status</h5>
                            <p>Last Donation Date: 07/08/2024, 20:35:51<br /> </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-md-0 mt-3">
                        <div className="Emerald bg-light mt-2 mx-4 p-3">
                            <h5>Emerald</h5>
                            <p>DS Level on 29 September 2024</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 pt-3 pb-3 notice-details">
                    <h6 style={{ color: "#FD6E6E" }}>Notice</h6>
                    <p>As notified by The Income Tax Department, all Direct Sellers are required to link PAN and Aadhar. If not linked TDS shall be deducted at a rate of 20%. Please link your PAN and Aadhar immediately to avoid the 20% TDS rate.<br />
                        जैसा कि आयकर विभाग द्वारा अधिसूचित किया गया है, सभी प्रत्यक्ष विक्रेताओं को पैन और आधार को लिंक करना आवश्यक है। यदि लिंक नहीं किया गया तो 20% की दर से टीडीएस काटा जाएगा। 20% टीडीएस दर से बचने के लिए कृपया अपना पैन और आधार तुरंत लिंक करें।
                    </p>
                </div>

                <div className="row mt-4 card-section">
                    <div className="col-md-5 col-12">
                        <div className="card p-3 ds-card">
                            <h5 className="card-title ds-title">Direct Sales Details</h5>
                            {/* <div className="ds-details">
                                <img src={user1} alt="Profile image of DL05DK1986" className="profile-img" />
                                <div>
                                    <div className="fw-bold">DL05DK1986</div>
                                    <div className="card-text">Logid</div>
                                </div>
                            </div> */}
                            <div className="ds-details">
                                <img src={user2} alt="Profile image of SSSDOMKAR79" className="profile-img" />
                                <div>
                                    <div className="fw-bold">{leftUser?.logId || "N/A"}</div>
                                    <div className="card-text">{leftUser?.firstName} {leftUser?.lastName}</div>
                                </div>
                            </div>
                            <div className="ds-details">
                                <img src={user3} alt="Profile image of DL05MONU92" className="profile-img" />
                                <div>
                                    <div className="fw-bold">{rightUser?.logId || "N/A"}</div>
                                    <div className="card-text">{rightUser?.firstName} {rightUser?.lastName}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-12 mt-md-0 mt-3">
                        <div className="card p-3 ds-card">
                            <h5 className="card-title ds-title">Monthly Income</h5>
                            <div className="d-flex p-2 ds-text">
                                <div className="card p-3 me-3 w-50 text-center">
                                    <div className="earning-amount">₹ 2530</div>
                                    <div className="earning-date">Date: 9/27/2024</div>
                                </div>

                                {/* <div className="card p-3 w-50 text-center">
                                    <div className="earning-amount">₹ 3035</div>
                                    <div className="earning-date">Date: 9/20/2024</div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 card-footer">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <div className="text">Next Level Status</div>
                                <p>You need a total Business Volume of 127735 and 0 Business Volume in your weaker leg to get to the next level of Ruby</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div> {/* container end */}

        </>
    )
}

export default PersonalDetails;
