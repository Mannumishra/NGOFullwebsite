import React, { useState } from 'react';
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import userImg from '../assets/images/userimg.png';
// import anotherUserImg from '../assets/images/anotherUserImg.png'; // add more images if needed
import '../Sidebar/Sidebar.css'

const DirectDonation = () => {
    // Array of users
    const users = [
        { id: "DL05DK1986", name: "Sunil Kumar", image: userImg, link: "/admin-UserView" },
        { id: "DL05DK1987", name: "Pooja Singh", image: userImg, link: "/admin-UserView" },
        // Add more users as needed
    ];

   
    const [selectedUserIndex, setSelectedUserIndex] = useState(0);

    const handleNextUser = () => {
        setSelectedUserIndex((prevIndex) => (prevIndex + 1) % users.length);
    };

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
                            <img src={users[selectedUserIndex].image} alt="User" />
                        </div>
                        <div className="col-7">
                            <div className="card-body">
                                <h5 className="card-title">{users[selectedUserIndex].id}</h5>
                                <Link to="#" className="btn btn-arrow"><FaLongArrowAltUp /></Link>
                                <br />
                                <Link to={users[selectedUserIndex].link} className="btn btn-custom">View Detail</Link>
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
                        <button className="btn btn-info" type="button">0</button>
                        <button className="btn btn-info" type="button">554</button>
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <div className="avatar">
                                <img alt="Avatar" height="100" src={userImg} width="100" />
                            </div>
                            <Link to="/admin-signup">
                                <button className="btn btn-outline-danger" type="button">Empty</button>
                            </Link>
                        </div>
                        <div className="col-6 text-center">
                            <div className="avatar">
                                <img alt="Avatar" height="100" src={users[selectedUserIndex].image} width="100" />
                            </div>
                            <div>{users[selectedUserIndex].id}</div>
                            <button className="btn btn-arrowUp" type="button" onClick={handleNextUser}>
                                <FaLongArrowAltDown size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DirectDonation;
