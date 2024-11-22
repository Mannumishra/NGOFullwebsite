import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Sidebar/Sidebar.css'
// import { Modal, Button } from 'react-bootstrap';

const Earning = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const navigate = useNavigate();

    const usersData = [
        { srNo: 1, name: "Aarav", parentId: "---", logid: "SS507RAJARANI", amount: "1000.00", month: "January" },
        { srNo: 2, name: "Tanishka", parentId: "---", logid: "SR507RAJARANI", amount: "15000.00", month: "September" },
        { srNo: 3, name: "Nikhil", parentId: "RETAILORDER-838504", logid: "SA507RAJARANI", amount: "1200.00", month: "November" },
        { srNo: 4, name: "Swati", parentId: "RETAILORDER-852741", logid: "SQ507RAJARANI", amount: "12500.00", month: "January" },
        { srNo: 5, name: "Aditya", parentId: "RETAILORDER-789652", logid: "SZ507RAJARANI", amount: "25000.00", month: "August" },
        { srNo: 6, name: "Kavya", parentId: "RETAILORDER-963252", logid: "SL507RAJARANI", amount: "1000.00", month: "January" },
        { srNo: 7, name: "Manav", parentId: "RETAILORDER-8758963", logid: "SH507RAJARANI", amount: "13500.00", month: "December" },
        { srNo: 8, name: "Varun", parentId: "RETAILORDER-8758963", logid: "SS507RAJARANI", amount: "35500.00", month: "July" },
        { srNo: 9, name: "Sneha", parentId: "---", logid: "SS507RAJARANI", amount: "81500.00", month: "April" },
        { srNo: 10, name: "Lakshya", parentId: "---", logid: "SS507RAJARANI", amount: "21600.00", month: "March" },
        { srNo: 11, name: "Radhika", parentId: "---", logid: "SS507RAJARANI", amount: "91700.00", month: "January" },
        { srNo: 12, name: "Shaurya", parentId: "---", logid: "SS507RAJARANI", amount: "11800.00", month: "April" },
        { srNo: 13, name: "Tanya", parentId: "---", logid: "SS507RAJARANI", amount: "19400.00", month: "January" },
        { srNo: 14, name: "Vivaan", parentId: "---", logid: "SS507RAJARANI", amount: "2000.00", month: "January" },
        { srNo: 15, name: "Aditi", parentId: "---", logid: "SS507RAJARANI", amount: "26100.00", month: "March" },
        { srNo: 16, name: "Radhika", parentId: "---", logid: "SS507RAJARANI", amount: "91700.00", month: "January" },
        { srNo: 17, name: "Shaurya", parentId: "---", logid: "SS507RAJARANI", amount: "11800.00", month: "April" },
    ];

    // Filter and sort users based on the search term
    const filteredUsers = usersData
        .filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.logid.toLowerCase().includes(searchTerm.toLowerCase())
        );
    // Pagination
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    //    const handleView = (logid) => {
    //     navigate(`/user/${logid}`);
    //    }

    const handleView = (user) => {
        navigate('/userview', { state: { user } });
    };

    return (
        <>
            <div className="container mt-4">
                <div className="card mb-5">
                    <div className="card-header">
                        <h2>Earning</h2>
                        <h6>Details of your earning remuneration</h6>
                    </div>
                    <div className="card-body">
                        <p>Update and link your PAN with Aadhar and reduce your TDS from 20% to 5%, Even this 5% can be claimed in your Income Tax Return(ITR).</p>
                        <p>As notified by The Income Tax Department, all Direct Sellers are required to link PAN and Aadhar. If not linked TDS shall be deducted at a rate of 20%. Please link your PAN and Aadhar immediately to avoid the 20% TDS rate.</p>
                        <p>रेवा है। आयकर विभाग द्वारा अधिसूचित किया गया है, सभी प्रत्यक्ष विक्रेताओं को पैन और आधार को लिंक करना आवश्यक है। यदि लिंक नहीं किया गया तो 20% की दर से टीडीएस काटा जाएगा। 20% टीडीएस दर से बचने के लिए कृपया अपने पैन और आधार तुरंत लिंक करें।</p>
                    </div>
                    <div className="card-footer">
                        <div>
                            <h6>Logid : SS507SUNILDP2</h6>
                            <h6>Name : SUNIL KUMAR</h6>
                        </div>
                        <div className="total-earning">
                            Total Earning<br />₹ 2270
                        </div>
                    </div>
                </div>

                {/* <div className="donation-search">
                    <div className="row mt-4">
                        <div className="col-9 mb-3">
                            <h3 className="mb-2">Earning with your direct reference</h3>
                            </div>
                            <div className="col-3">
                                <input type="text" placeholder="Search by Name or ID" className="form-control" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                            </div>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Parent ID</th>
                                <th scope="col">Log Id</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Month</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentUsers.length > 0 ? (
                                currentUsers.map((user, index) => (
                                    <tr key={index}>
                                        <th scope="row">{user.srNo}</th>
                                        <td>{user.name}</td>
                                        <td>{user.parentid}</td>
                                        <td>{user.logid}</td>
                                        <td>{user.amount}</td>
                                        <td>{user.month}</td>
                                        <td>
                                            <button
                                                onClick={() => handleView(user)}
                                                className="btn btn-primary"
                                                style={{ background: "#22B6AF", border: "none", padding: "3px 10px" }}
                                            >
                                                View
                                            </button>
                                        </td>
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
                    <button className="btn btn-next ms-2" onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} >
                        Next
                    </button>
                </div> */}

            </div>

            {/* <div className="d-flex align-items-center earning-card">
                <div className="card p-3 me-3 shadow-sm rounded" style={{ width: '200px' }}>
                    <div className="d-flex align-items-center">
                        <div className="icon-circle me-2">
                            <span className="currency-icon">₹</span>
                        </div>
                        <div>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                style={{
                                    border: "none", outline: "none", width: "100%", fontSize: "18px", fontWeight: "600"
                                }}
                                value={withdrawAmount}
                                onChange={(e) => setWithdrawAmount(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-withdraw" onClick={handleShow}>
                    Withdraw
                </button>
            </div>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Withdrawal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {withdrawAmount ? `Are you sure you want to withdraw ₹ ${withdrawAmount}?` : "Please enter an amount to withdraw."}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" style={{ background: "#FF0000", border: "none" }} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        style={{ background: "#008000", border: "none" }}
                        onClick={confirmWithdrawal}
                        disabled={!withdrawAmount}
                    >
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    );
}

export default Earning;
