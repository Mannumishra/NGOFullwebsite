import React, { useEffect, useState } from 'react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import userImg from '../assets/images/userimg.png'; // User image
import axios from 'axios';

const DirectDonation = () => {
    const UserId = sessionStorage.getItem("UserId");
    const [mainUser, setMainUser] = useState({});
    const [leftUser, setLeftUser] = useState(null); // State for left user
    const [rightUser, setRightUser] = useState(null); // State for right user

    // Fetch main user details
    const getuserRecord = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/get-user-details/" + UserId);
            if (res.status === 200) {
                setMainUser(res.data.data);
                // Check if left and right users are assigned under the main user
                const userRelation = await axios.get(`http://localhost:8000/api/user-relation/${UserId}`);
                console.log(userRelation)
                if (userRelation.data) {
                    setLeftUser(userRelation.data.userRelation.leftUser);
                    setRightUser(userRelation.data.userRelation.rightUser);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getuserRecord();
    }, []);

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
                                    <>
                                        <img alt="Avatar" height="100" src={leftUser.image || userImg} width="100" />
                                        <div>{leftUser.logId}</div> {/* Display logId */}
                                        <div>{leftUser.firstName} {leftUser.lastName}</div> {/* Optionally display user's name */}
                                    </>
                                ) : (
                                    <Link to={`/admin-signup?parentId=${mainUser.logId}&position=Left`}>
                                        <button className="btn btn-outline-danger" type="button">Left Empty</button>
                                    </Link>
                                )}
                            </div>
                        </div>

                        {/* Right position */}
                        <div className="col-6 text-center">
                            <div className="avatar">
                                {rightUser ? (
                                    <>
                                        <img alt="Avatar" height="100" src={rightUser.image || userImg} width="100" />
                                        <div>{rightUser.logId}</div> {/* Display logId */}
                                        <div>{rightUser.firstName} {rightUser.lastName}</div> {/* Optionally display user's name */}
                                    </>
                                ) : (
                                    <Link to={`/admin-signup?parentId=${mainUser.logId}&position=Right`}>
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
