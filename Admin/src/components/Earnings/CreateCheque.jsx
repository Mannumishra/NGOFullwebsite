import React, { useState } from 'react';

const CreateCheque = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [checkNumber, setCheckNumber] = useState("");
    const [bankName, setBankName] = useState("");
    const [chequeCreated, setChequeCreated] = useState([]); // Store cheques created by users
    const usersPerPage = 10;

    const usersData = [
        { srNo: 1, name: "Rahul", parentid: "SSS07SUNILDP2", logid: "SS507RAJARANI", amount: "1500.00" },
        { srNo: 2, name: "Akash", parentid: "SSS07SUNILDP2", logid: "SS507RAJARANI", amount: "1600.00" },
        { srNo: 3, name: "RANI", parentid: "SSS07SUNILDP2", logid: "SS507RAJARANI", amount: "1700.00" },
        { srNo: 4, name: "Radha", parentid: "SSS07RADHAP2", logid: "SS507RAJARANI", amount: "2000.00" },
        { srNo: 5, name: "Rahul", parentid: "SSS07RAHULDP2", logid: "SS507RAJARANI", amount: "3000.00" },
        { srNo: 6, name: "Ramesh", parentid: "SSS07RAMESHDP2", logid: "SS507RAJARANI", amount: "5000.00" },
        { srNo: 7, name: "Suresh", parentid: "S5R07SURESHDP2", logid: "SS507RAJARANI", amount: "8000.00" },
        { srNo: 8, name: "Rakesh", parentid: "SW807RAMESHDP2", logid: "SS507RAJARANI", amount: "3000.00" },
    ];

    const filteredUsers = usersData
        .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => a.srNo - b.srNo);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const handleButtonClick = (user) => {
        setSelectedUser(user);
        setCheckNumber("");
        setBankName("");
        setShowPopup(true);
    };

    const handleConfirm = () => {
        const currentDate = new Date();
        const userWithCheck = {
            ...selectedUser,
            cheque: checkNumber,
            bank: bankName,
            date: `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`,
        };

        // Update chequeCreated state
        setChequeCreated(prev => [...prev, selectedUser.srNo]);

        // Store the updated data in localStorage
        const storedChecks = JSON.parse(localStorage.getItem("checks")) || [];
        storedChecks.push(userWithCheck);
        localStorage.setItem("checks", JSON.stringify(storedChecks));

        // Show success popup
        setShowSuccessPopup(true);
        setShowPopup(false);  // Close the previous popup
    };

    const handleCloseSuccessPopup = () => {
        setShowSuccessPopup(false);
    };

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    return (
        <div className="container">
            <h2>Create Cheque</h2>
            <h6>Lorem ipsum dolor sit amet consectetur.</h6>

            <div className="table-responsive">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">Sr No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Parent ID</th>
                            <th scope="col">Log ID</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{user.srNo}</th>
                                <td>{user.name}</td>
                                <td>{user.parentid}</td>
                                <td>{user.logid}</td>
                                <td>{user.amount}</td>
                                <td>{formattedDate}</td>
                                <td>
                                    <button
                                        className={`btn ${chequeCreated.includes(user.srNo) ? 'btn-success' : 'check-btn'}`}
                                        onClick={() => handleButtonClick(user)}
                                        disabled={chequeCreated.includes(user.srNo)}
                                    >
                                        {chequeCreated.includes(user.srNo) ? 'Cheque Created' : 'Create Cheque'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Popup for Check Creation */}
            {showPopup && selectedUser && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h5>Confirm Check Details</h5>
                        <p>Name: {selectedUser.name}</p>
                        <p>Parent ID: {selectedUser.parentid}</p>
                        <p>Amount: {selectedUser.amount}</p>
                        <p><strong>Current Date:</strong> {formattedDate}</p>

                        <div className="form-group">
                            <label htmlFor="checkNumber">Enter Cheque Number:</label>
                            <input
                                type="text"
                                id="checkNumber"
                                className="form-control"
                                value={checkNumber}
                                onChange={(e) => setCheckNumber(e.target.value)}
                                placeholder="Enter check number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bankName">Enter Bank Name:</label>
                            <input
                                type="text"
                                id="bankName"
                                className="form-control"
                                value={bankName}
                                onChange={(e) => setBankName(e.target.value)}
                                placeholder="Enter bank name"
                            />
                        </div>

                        <div className="popup-buttons">
                            <button onClick={handleConfirm} className="btn btn-primary">Confirm</button>
                            <button onClick={() => setShowPopup(false)} className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Popup */}
            {showSuccessPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h5>Check Created Successfully</h5>
                        <p>Cheque number: {checkNumber}</p>
                        <p>Bank: {bankName}</p>
                        <p>Amount: {selectedUser?.amount}</p>
                        <div className="popup-buttons">
                            <button onClick={handleCloseSuccessPopup} className="btn btn-success">Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Pagination Controls */}
            <div className="d-flex justify-content-center align-items-center">
                <button
                    className="btn btn-next me-2"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className="btn btn-next ms-2"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CreateCheque;
