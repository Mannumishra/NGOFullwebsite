import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {

  const location = useLocation();
  const { user } = location.state || {};


  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const usersData = [

    { srNo: 1, name: "A", parentId: "---", logid: "SS507RAJARANI", amount: "1000.00", month: "January" },
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
    <>
      <div className="container">
        <div className="mt-4">

          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Logid - {user?.logid || 'Loading...'}</h3>
            </div>
            <div className="modal-body mt-4">
              <div className="row mb-3">
                <div className="col-6">
                  <p className="mb-1"><strong>Login ID</strong></p>
                  <p className="bg-light p-2">{user?.logid || 'Loading...'}</p>
                </div>
                <div className="col-6">
                  <p className="mb-1"><strong>Name</strong></p>
                  <p className="bg-light p-2">{user?.name || 'Loading...'}</p>
                </div>
                <div className="col-6">
                  <p className="mb-1"><strong>Pay Status</strong></p>
                  <p className="bg-light p-2">13/07/2018</p>
                </div>
                <div className="col-6">
                  <p className="mb-1"><strong>Reference ID</strong></p>
                  <p className="bg-light p-2">{user?.parentId || 'Loading...'}</p>
                </div>
                <div className="col-6">
                  <p className="mb-1"><strong>DS Status</strong></p>
                  <p className="bg-light p-2">Paid</p>
                </div>
                <div className="col-6">
                  <p className="mb-1"><strong>Eligible for Team Royalty Remuneration?</strong></p>
                  <p className="bg-light p-2">Yes</p>
                </div>
                <div className="col-6">
                  <p className="mb-1"><strong>Parent ID</strong></p>
                  <p className="bg-light p-2">DL05DK1986</p>
                </div>
              </div>
            </div>
          </div>

          <div className="donation-search">
            <div className="row">
              <div className="col-9">
                <h3 className="mb-2">Sales with your direct reference</h3>
              </div>
              <div className="col-3">
                <input type="text" placeholder="Search by Name" className="form-control" value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} />

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
                      <td>{user.amount}</td>
                      <td>{user.month}</td>
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
            <button
              className="btn btn-next me-2"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              className="btn btn-next ms-2"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails;
