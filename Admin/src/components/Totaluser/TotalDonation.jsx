import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TotalDonation = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    const usersData = [
        { srNo: 1, name: "Aarav", parentId: "---", logid: "SS507RAJARANI", amount: 1000.00, month: "January", timestamp: "2024-01-15 10:30 AM" },
        { srNo: 2, name: "Tanishka", parentId: "---", logid: "SR507RAJARANI", amount: 15000.00, month: "September", timestamp: "2024-09-20 02:45 PM" },
        { srNo: 3, name: "Nikhil", parentId: "RETAILORDER-838504", logid: "SA507RAJARANI", amount: 1200.00, month: "November", timestamp: "2024-11-10 11:15 AM" },
        { srNo: 4, name: "Arun", parentId: "---", logid: "SS507RAJARANI", amount: 1500.00, month: "January", timestamp: "2024-01-18 10:30 AM" },
        { srNo: 6, name: "Neha", parentId: "---", logid: "SS507RAJARANI", amount: 1000.00, month: "January", timestamp: "2024-01-15 10:30 AM" },
    ];

    const filteredUsers = usersData
        .filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.logid.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(user => {
            if (selectedDate) {
                const userDate = new Date(user.timestamp);
                return userDate.toDateString() === selectedDate.toDateString();
            }
            if (selectedMonth) {
                const userDate = new Date(user.timestamp);
                return (
                    userDate.getMonth() === selectedMonth.getMonth() &&
                    userDate.getFullYear() === selectedMonth.getFullYear()
                );
            }
            return true;
        })
        .sort((a, b) => a.srNo - b.srNo);

    const totalDonationAmount = filteredUsers.reduce((sum, user) => sum + user.amount, 0);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
        <div className="container">
            <div className="donation-search">
                <div className="row total-donation">
                    <div className="total-data">
                        <h5>Total Donation</h5>
                        <p>{totalDonationAmount.toFixed(2)}</p>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-9">
                        <h3 className="mb-2">Total Donation</h3>
                        <p className="mb-3">List of all total donations</p>
                    </div>
                    <div className="col-3">
                        <input
                            type="text"
                            placeholder="Search by Name or Log ID"
                            className="form-control mb-3"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Search by Date"
                            className="form-control mb-3"
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
                            <th scope="col">Parent Id</th>
                            <th scope="col">Log Id</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date / Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.length > 0 ? (
                            currentUsers.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{user.srNo}</th>
                                    <td>{user.name}</td>
                                    <td>{user.parentId}</td>
                                    <td>{user.logid}</td>
                                    <td>{user.amount.toFixed(2)}</td>
                                    <td>{user.timestamp}</td>
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

            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-next me-2" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button className="btn btn-next ms-2" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default TotalDonation;
