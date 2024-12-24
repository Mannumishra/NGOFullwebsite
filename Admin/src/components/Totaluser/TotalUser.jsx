import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TotalUser = () => {
    const [data, setData] = useState([]); // State to hold user data from API
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const navigate = useNavigate();

    // Fetch data from API
    const getapiData = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/get-signups");
            if (res.data.success) {
                setData(res.data.data); // Set API data to state
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getapiData();
    }, []);

    // Filter and search users
    const filteredUsers = data
        .filter(user =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.logId.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (selectedFilter === "A to Z") return a.firstName.localeCompare(b.firstName);
            return 0; // Default sorting
        });

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handleView = (user) => {
        navigate('/UserDetails', { state: { user } });
    };

    return (
        <div className="container table-container mt-4 mb-5">
            <div className="donation-search">
                <div className="row mt-3">
                    <div className="col-9">
                        <h3 className="mb-2">All Users List</h3>
                        <p className="mb-3">List of all Paid and Unpaid Users</p>
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Search by Name or Log ID"
                            className="form-control mb-3"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">Sr No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Log ID</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Join Date</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.length > 0 ? (
                            currentUsers.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{indexOfFirstUser + index + 1}</td>
                                    <td>{`${user.firstName} ${user.lastName}`}</td>
                                    <td>{user.logId}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <button className="details" onClick={() => handleView(user)}>
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center align-items-center">
                <button
                    className="btn btn-secondary me-2"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className="btn btn-secondary ms-2"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default TotalUser;
