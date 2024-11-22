import React, { useState } from 'react';
import '../Sidebar/Sidebar.css'

const TotalUsers = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const usersData = [
        { srNo: 1, name: "Rahul", orderNo: "---", logid: "SS507RAJARANI", amount: "1500.00", date: "07/08/2024" },
        { srNo: 2, name: "Kajal", orderNo: "---", logid: "SS507RAJARANI", amount: "1500.00", date: "07/08/2024" },
        { srNo: 3, name: "Mukesh", orderNo: "RETAILORDER-838504", logid: "SS507RAJARANI", amount: "1500.00", date: "07/08/2024" },
        { srNo: 4, name: "Rohit", orderNo: "RETAILORDER-852741", logid: "SS507RAJARANI", amount: "1500.00", date: "07/08/2024" },
        { srNo: 5, name: "Anash", orderNo: "RETAILORDER-789652", logid: "SS507RAJARANI", amount: "1500.00", date: "07/08/2024" },
        { srNo: 6, name: "Riya", orderNo: "RETAILORDER-963252", logid: "SS507RAJARANI", amount: "1500.00", date: "07/08/2024" },
        { srNo: 7, name: "Priya", orderNo: "RETAILORDER-8758963", logid: "SS507RAJARANI", amount: "1500.00", date: "07/08/2024" },
    ];

    // Filter and sort users by name and reverse order (new to old or old to new)
    const filteredUsers = usersData
        .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => a.srNo - b.srNo);

    // Calculate pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
        <div className="container">
           <div className="donation-search">
                <div>
                    <h3 className="mb-2">Total Users</h3>
                    <p className="mb-3">List of all total users</p>
                    </div>
                    {/* Search Box */}
                    <div className="mb-3">
                        <input type="text" placeholder="Search by Name" className="form-control" value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>

            <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Sr No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Order No</th>
                            <th scope="col">Logid</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.length > 0 ? (
                            currentUsers.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{user.srNo}</th>
                                    <td>{user.name}</td>
                                    <td>{user.orderNo}</td>
                                    <td>{user.logid}</td>
                                    <td>{user.amount}</td>
                                    <td>{user.date}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">No users found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-next me-2" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button className="btn btn-next ms-2" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                 disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default TotalUsers;
