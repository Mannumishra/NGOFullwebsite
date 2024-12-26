import React, { useEffect, useState } from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import userImg from '../assets/images/userimg.png'; // User image
import axios from 'axios';

const DirectDonation = () => {
    const [UserId, setUserId] = useState(sessionStorage.getItem("UserId") || ""); // Initially set UserId from sessionStorage
    const [mainUser, setMainUser] = useState({});
    const [leftUser, setLeftUser] = useState(null); // State for left user
    const [rightUser, setRightUser] = useState(null); // State for right user

    const userIDChange = (id) => {
        setUserId(id); // Update UserId state locally
        // Remove sessionStorage update here
    };

    // Fetch main user details
    const getUserRecord = async () => {
        if (!UserId) return; // Avoid API call if UserId is not set
        try {
            const res = await axios.get(`http://localhost:8000/api/get-user-details/${UserId}`);
            if (res.status === 200) {
                setMainUser(res.data.data);

                // Fetch left and right users under the main user
                const userRelation = await axios.get(`http://localhost:8000/api/user-relation/${UserId}`);
                if (userRelation.status === 200 && userRelation.data) {
                    setLeftUser(userRelation.data.userRelation.leftUser);
                    setRightUser(userRelation.data.userRelation.rightUser);
                }
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    // Trigger API call whenever UserId changes
    useEffect(() => {
        if (UserId) {
            getUserRecord(); // Fetch user details when UserId is set or changes
        }
    }, [UserId]); // Dependency on UserId

    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between mt-2">
                <h2>Direct Donation - Select Position</h2>
                <h4>KYC: Completed</h4>
            </div>

            {/* Display main user details */}
            <div className="donation-container">
                <div className="card donation-card">
                    <div className="row">
                        <div className="col-5">
                            <img alt="Avatar" height="100" src={userImg} width="100" />
                        </div>
                        <div className="col-7">
                            <div className="card-body">
                                <h5 className="card-title">{mainUser.logId}</h5>
                                <Link to="#" className="btn btn-arrow"><FaLongArrowAltUp /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Left and Right user sections */}
            <div className="user-card">
                <div className="card group-card">
                    <div className="card-title">GROUP</div>
                    <div className="btn-group" role="group">
                        <button className="btn btn-outline-secondary" type="button">Left</button>
                        <button className="btn btn-outline-secondary" type="button">Right</button>
                    </div>
                    <div className="row">
                        {/* Left position */}
                        <div className="col-6 text-center">
                            <div className="avatar">
                                {leftUser ? (
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => userIDChange(leftUser._id)} // Change UserId to left user's id
                                    >
                                        {leftUser.logId}
                                    </button>
                                ) : (
                                    <Link to={`/admin-signup?parentId=${mainUser.logId}&position=Left&userId=${mainUser._id}`}>
                                        <button className="btn btn-outline-danger" type="button">Left Empty</button>
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Right position */}
                        <div className="col-6 text-center">
                            <div className="avatar">
                                {rightUser ? (
                                    <button
                                        className="btn btn-dark"
                                        onClick={() => userIDChange(rightUser._id)} // Change UserId to right user's id
                                    >
                                        {rightUser.logId}
                                    </button>
                                ) : (
                                    <Link to={`/admin-signup?parentId=${mainUser.logId}&position=Right&userId=${mainUser._id}`}>
                                        <button className="btn btn-outline-danger" type="button">Right Empty</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectDonation;
