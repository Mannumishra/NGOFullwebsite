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

    // const userIDChange = (id) => {
    //     const arr=localStorage.getItem('userID') || [];
    //     arr.push({id, current:true});
    //     arr.forEach(item => item.current = item.id === id);
    //     localStorage.setItem('userID',arr);


    //     setUserId(id); // Update UserId state locally
    //     // Remove sessionStorage update here
    // };

    useEffect(()=>{
        localStorage.removeItem('userID');
        userIDChange(UserId)  
    },[])
    const userIDChange = (id) => {
        // Retrieve the existing data and parse it into an array
        const storedData = JSON.parse(localStorage.getItem('userID')) || [];
    
        // Update the array: mark all items as not current and filter out the new id if it already exists
        const updatedData = storedData
            .map(item => ({ ...item, current: false }))
            .filter(item => item.id !== id);
    
        // Push the new id with `current: true`
        updatedData.push({ id, current: true });
    
        // Save the updated array back to localStorage
        localStorage.setItem('userID', JSON.stringify(updatedData));
    
        // Update the local state
        setUserId(id);
    };
    
    const getBack = () => {
        try {
           
    
            // Retrieve the existing data from localStorage
            const storedDataString = localStorage.getItem('userID');
            
            // If no data is found, handle it gracefully
            if (!storedDataString) {
                
                alert("No previous ID to revert to.");
                return;
            }
    
            // Parse the data into an array
            const storedData = JSON.parse(storedDataString);
    
            // Ensure there are at least two entries
            if (storedData.length < 1) {
                console.warn("No previous ID to revert to.");
                alert("No previous ID to revert to.");
                return;
            }
    
            // Find the index of the current ID
            const currentIndex = storedData.findIndex(item => item.current);
    
            if (currentIndex === -1 || currentIndex === 0) {
                console.warn("No valid previous ID to revert to.");
                alert("No valid previous ID to revert to.");
                return;
            }
    
            // Set the current ID to false
            storedData[currentIndex].current = false;
    
            // Set the previous ID as current
            storedData[currentIndex - 1].current = true;
    
            // Save the updated array back to localStorage
            localStorage.setItem('userID', JSON.stringify(storedData));
    
            // Update the local state
            setUserId(storedData[currentIndex - 1].id);
        } catch (error) {
            console.error("An error occurred in getBack:", error);
            alert("An error occurred. Please try again.");
        }
    };
    
    



    // Fetch main user details
    const getUserRecord = async () => {
        if (!UserId) return; // Avoid API call if UserId is not set
        try {
            const res = await axios.get(`https://api.saibalikavikas.com/api/get-user-details/${UserId}`);
            if (res.status === 200) {
                setMainUser(res.data.data);

                // Fetch left and right users under the main user
                const userRelation = await axios.get(`https://api.saibalikavikas.com/api/user-relation/${UserId}`);
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
                                <Link to="#" onClick={()=>getBack(UserId)} className="btn btn-arrow"><FaLongArrowAltUp /></Link>
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
