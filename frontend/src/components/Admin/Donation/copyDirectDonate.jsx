import React, { useEffect, useState } from 'react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import userImg from '../assets/images/userimg.png';
// import anotherUserImg from '../assets/images/anotherUserImg.png'; // add more images if needed
import '../Sidebar/Sidebar.css'
import axios from 'axios';

const DirectDonation = () => {
    const UserId = sessionStorage.getItem("UserId")
    const [mainUser, setMainUser] = useState({})
    const getuserRecord = async () => {
        try {
            const res = await axios.get("https://api.saibalikavikas.com/api/get-user-details/" + UserId)
            if (res.status === 200) {
                setMainUser(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getuserRecord()
    }, [])
    // Array of users


    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between mt-2">
                <h2>Direct Donation - Select Position</h2>
                <h4>KYC: Completed</h4>
            </div>

            {/* Display selected user details */}
            <div className="donation-container">
                <div className="card donation-card">
                    <div className="row">
                        <div className="col-5">
                            {/* <img src={users[selectedUserIndex].image} alt="User" /> */}
                            <img alt="Avatar" height="100" src={userImg} width="100" />
                        </div>
                        <div className="col-7">
                            <div className="card-body">
                                <h5 className="card-title">{mainUser.logId}</h5>
                                <Link to="#" className="btn btn-arrow"><FaLongArrowAltUp /></Link>
                                <br />
                                {/* <Link to={users[selectedUserIndex].link} className="btn btn-custom">View Detail</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="user-card">
                <div className="card group-card">
                    <div className="card-title">GROUP</div>
                    <div className="btn-group" role="group">
                        <button className="btn btn-outline-secondary" type="button">Left</button>
                        <button className="btn btn-outline-secondary" type="button">Right</button>
                    </div>
                    <div className="btn-group" role="group">
                        {/* <button className="btn btn-info" type="button">0</button> */}
                        {/* <button className="btn btn-info" type="button">554</button> */}
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <div className="avatar">
                                <img alt="Avatar" height="100" src={userImg} width="100" />
                            </div>
                            <Link to={`/admin-signup?parentId=${mainUser.logId}&position=Left`}>
                                <button className="btn btn-outline-danger" type="button">Left Empty</button>
                            </Link>


                        </div>
                        <div className="col-6 text-center">
                            <div className="avatar">
                                {/* <img alt="Avatar" height="100" src={users[selectedUserIndex].image} width="100" /> */}
                                <img alt="Avatar" height="100" src={userImg} width="100" />
                            </div>
                            {/* <div>{users[selectedUserIndex].id}</div> */}
                            <Link to={`/admin-signup?parentId=${mainUser.logId}&position=Right`}>
                                <button className="btn btn-outline-danger" type="button">Right Empty</button>
                            </Link>
                            {/* <button className="btn btn-arrowUp" type="button">
                                <FaLongArrowAltDown size={15} />
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectDonation;
