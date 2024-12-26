import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import "../Sidebar/Sidebar.css";
import axios from "axios";
import Swal from "sweetalert2";

const DonationList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 15;
  // const navigate = useNavigate();

  const usersData = [
    {
      srNo: 1,
      name: "Aarav",
      parentId: "---",
      logid: "SS507RAJARANI",
      amount: "1000.00",
      month: "January",
      timestamp: "2024-01-15 10:30 AM",
    },
    {
      srNo: 2,
      name: "Tanishka",
      parentId: "---",
      logid: "SR507RAJARANI",
      amount: "15000.00",
      month: "September",
      timestamp: "2024-02-20 02:45 PM",
    },
    {
      srNo: 3,
      name: "Nikhil",
      parentId: "RETAILORDER-838504",
      logid: "SA507RAJARANI",
      amount: "1200.00",
      month: "November",
      timestamp: "2024-03-10 11:15 AM",
    },
  ];

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.logid.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [list, setList] = useState(null);
  const [UserId, setUserId] = useState(sessionStorage.getItem("UserId") || "");

  const getUserdata = async () => {
    try {
      const res = await axios.get(
        `https://api.saibalikavikas.com/api/get-donation-details/${UserId}`
      );

      if (res.status === 200) {
        console.log(res.data);
        setList(res.data);
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to fetch donation data.", "error");
    }
  };

  useEffect(() => {
    getUserdata();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  return (
    <div className="container table-container mt-4 mb-5">
      {list?.myDonation && (
        <div className="donation-search">
          <div className="row">
            <div className="col-9">
              <h3 className="mb-2">My Donation List</h3>
              <p className="mb-3">List of all Paid and Unpaid retail orders</p>
            </div>
            {/* <div className="col-3">
              <input
                type="text"
                placeholder="Search by Name or ID"
                className="form-control"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div> */}
          </div>
        </div>
      )}

      {list?.myDonation && (
        <div className="table-responsive">
          <table className="table table-striped text-center">
            <thead>
              <tr>
                <th scope="col">Sr No</th>
                <th scope="col">Name</th>
                
                <th scope="col">Log Id</th>
                <th scope="col">Amount</th>
                <th scope="col">Date / Time</th>
              </tr>
            </thead>
            <tbody>
              {list?.myDonation.length > 0 ? (
                list?.myDonation.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{user.userId.firstName}</td>
                    <td>{user.userId.logId}</td>
                    
                    <td>{user.amount}</td>
                    <td>{new Date(user.createdAt).toLocaleString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No users found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

   {  list?.myChildsDonation
 && <div className="donation-search">
        <div className="row">
          <div className="col-9">
            <h3 className="mb-2">Team Donation List</h3>
            <p className="mb-3">List of all Paid and Unpaid retail orders</p>
          </div>
          {/* <div className="col-3">
            <input
              type="text"
              placeholder="Search by Name or ID"
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div> */}
        </div>
      </div>}

    { list?.myChildsDonation
 &&   <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Sr No</th>
              <th scope="col">Name</th>
       
              <th scope="col">Log Id</th>
              <th scope="col">Amount</th>
              <th scope="col">Date / Time</th>
            </tr>
          </thead>
          <tbody>
            {list?.myChildsDonation.length > 0 ? (
              list?. myChildsDonation?.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  
                  <td>{user.userId.firstName}</td>
                  <td>{user.userId.logId}</td>
                  <td>{user.amount}</td>
                  <td>{new Date(user.createdAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>}

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-next me-2"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-next ms-2"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DonationList;
