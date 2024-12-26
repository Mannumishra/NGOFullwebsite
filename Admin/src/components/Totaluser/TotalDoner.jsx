import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalDoner = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [donorFilter, setDonorFilter] = useState("");
    const [donorMonthFilter, setDonorMonthFilter] = useState("");
    const [donorCurrentPage, setDonorCurrentPage] = useState(1);

    const [signupSearchTerm, setSignupSearchTerm] = useState("");
    const [signupFilter, setSignupFilter] = useState("");
    const [signupCurrentPage, setSignupCurrentPage] = useState(1);

    const [newSignupsData, setNewSignupsData] = useState([]);
    const usersPerPage = 15;

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

    // Fetch New Signups Data
    useEffect(() => {
        const fetchNewSignups = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/get-signups");
                console.log(response)
                if (response.status === 200) {
                    // Sort records by creation date and get the latest three
                    const latestSignups = response.data.data.slice(0, 3);
                    setNewSignupsData(latestSignups);
                }
            } catch (error) {
                console.error("Error fetching new signups data:", error);
            }
        };
        fetchNewSignups();
    }, []);

    const filterAndSortDonors = (data) => {
        return data
            .filter((item) =>
                ((item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                    (item.logid && item.logid.toLowerCase().includes(searchTerm.toLowerCase()))) &&
                (donorMonthFilter ? item.month.toLowerCase().includes(donorMonthFilter.toLowerCase()) : true)
            )
            .sort((a, b) => {
                if (donorFilter === "A to Z") return a.name.localeCompare(b.name);
                if (donorFilter === "High to Low") return parseFloat(b.amount) - parseFloat(a.amount);
                if (donorFilter === "Low to High") return parseFloat(a.amount) - parseFloat(b.amount);
                return 0;
            });
    };

    const filterAndSortSignups = (data) => {
        return data
            .filter((item) =>
                (item.name && item.name.toLowerCase().includes(signupSearchTerm.toLowerCase())) ||
                (item.logid && item.logid.toLowerCase().includes(signupSearchTerm.toLowerCase()))
            )
            .sort((a, b) => (signupFilter === "A to Z" ? a.name.localeCompare(b.name) : 0));
    };

    const getPaginatedData = (data, currentPage) => {
        const indexOfLastUser = currentPage * usersPerPage;
        const indexOfFirstUser = indexOfLastUser - usersPerPage;
        const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);
        const totalPages = Math.ceil(data.length / usersPerPage);
        return { currentUsers, totalPages };
    };

    const { currentUsers: latestDonors, totalPages: latestDonorsTotalPages } = getPaginatedData(
        filterAndSortDonors(usersData),
        donorCurrentPage
    );
    const { currentUsers: newSignups, totalPages: newSignupsTotalPages } = getPaginatedData(
        filterAndSortSignups(newSignupsData),
        signupCurrentPage
    );
    return (
        <>
            {/* Latest Donors Table */}
            <div className="container table-container mt-4 mb-5">
                <h3>Latest Donations</h3>
                <div className="table-responsive">
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Parent ID</th>
                                <th>Log ID</th>
                                <th>Amount</th>
                                <th>Date / Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {latestDonors.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{user.srNo}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.parentId}</td>
                                    <td>{user.logid}</td>
                                    <td>{user.amount}</td>
                                    <td>{user.timestamp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* New Signups Table */}
            <div className="container table-container mb-5">
                <h3>New Signups</h3>
                <div className="table-responsive">
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Name</th>
                                <th>Log ID</th>
                                <th>Mobile</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newSignupsData.map((signup, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{signup.firstName}</td>
                                    <td>{signup.logId}</td>
                                    <td>{signup.mobile}</td>
                                    <td>{signup.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TotalDoner;
