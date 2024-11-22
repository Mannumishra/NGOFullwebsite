import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MakePayment = () => {
    const [checks, setChecks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [checksPerPage] = useState(15);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCheck, setSelectedCheck] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        const storedChecks = JSON.parse(localStorage.getItem("checks")) || [];
        setChecks(storedChecks);
    }, []);

    const indexOfLastCheck = currentPage * checksPerPage;
    const indexOfFirstCheck = indexOfLastCheck - checksPerPage;
    const currentChecks = checks.slice(indexOfFirstCheck, indexOfLastCheck);
    const totalPages = Math.ceil(checks.length / checksPerPage);

    const handlePending = (check) => {
        setSelectedCheck(check);
        setShowPopup(true);
    };

    const handlePopupAction = (status) => {
        const updatedChecks = checks.map((check) =>
            check.srNo === selectedCheck.srNo
                ? { ...check, status: status }
                : check
        );
        setChecks(updatedChecks);
        localStorage.setItem("checks", JSON.stringify(updatedChecks));
        setShowPopup(false);
    
        if (status === 'Approved') {

            const approvedChecks = JSON.parse(localStorage.getItem('approvedChecks')) || [];
            approvedChecks.push(selectedCheck);
            localStorage.setItem('approvedChecks', JSON.stringify(approvedChecks));
        }
    };

    return (
        <div className="container">
            <h2>Make Payment</h2>

            <div className="table-responsive">
                <table className="table table-striped text-center">
                    <thead>
                        <tr>
                            <th scope="col">Sr No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Log ID</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Cheque No</th>
                            <th scope="col">Bank</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentChecks.map((check, index) => (
                            <tr key={index}>
                                <td>{index + 1 + (currentPage - 1) * checksPerPage}</td>
                                <td>{check.name}</td>
                                <td>{check.logid}</td>
                                <td>{check.amount}</td>
                                <td>{check.cheque}</td>
                                <td>{check.bank}</td>
                                <td>{check.date}</td>
                                <td>{check.status || "Pending"}</td>
                                <td>
                                    <button 
                                        className={`btn ${check.status === 'Approved' ? 'btn-success' : check.status === 'Rejected' ? 'btn-danger' : 'btn-secondary'}`} 
                                        onClick={() => handlePending(check)}>
                                        {check.status === 'Approved' ? 'Approved' : check.status === 'Rejected' ? 'Rejected' : 'Pending'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-next me-2" onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button className="btn btn-next ms-2" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>

            {/* Popup */}
            {showPopup && selectedCheck && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h5>Confirm Action</h5>
                        <p>Name: {selectedCheck.name}</p>
                        <p>Cheque No: {selectedCheck.cheque}</p>
                        <p>Amount: {selectedCheck.amount}</p>
                        <p>Date: {selectedCheck.date}</p>

                        <div className="popup-buttons">
                            <button onClick={() => handlePopupAction('Approved')} className="btn btn-success">Approve</button>
                            <button onClick={() => handlePopupAction('Rejected')} className="btn btn-danger">Reject</button>
                            <button onClick={() => setShowPopup(false)} className="btn btn-secondary">Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MakePayment;
