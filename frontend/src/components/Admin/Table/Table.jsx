import React, { useState } from 'react';
import '../Sidebar/Sidebar.css'
const Table = () => {
    // Mock data for 30 users
    const users = [
        { id: 1, name: 'Admin', email: 'admin123@gmail.com', mobile: '9876543210', address: 'Rithala-Delhi', date: '10/10/2024' },
        { id: 2, name: 'Mohit', email: 'mohit123@gmail.com', mobile: '9876543213', address: 'Green Park-Delhi', date: '11/10/2024' },
        { id: 3, name: 'Rohit', email: 'rohit123@gmail.com', mobile: '9876543212', address: 'Dwarka-Delhi', date: '12/10/2024' },
        { id: 4, name: 'Kumar', email: 'kumar123@gmail.com', mobile: '9876543211', address: 'Rohini-Delhi', date: '13/10/2024' },
        { id: 5, name: 'Priya', email: 'priya123@gmail.com', mobile: '9876543209', address: 'Saket-Delhi', date: '14/10/2024' },
        { id: 6, name: 'Anil', email: 'anil123@gmail.com', mobile: '9876543208', address: 'Janakpuri-Delhi', date: '15/10/2024' },
        { id: 7, name: 'Neha', email: 'neha123@gmail.com', mobile: '9876543207', address: 'Pitampura-Delhi', date: '16/10/2024' },
        { id: 8, name: 'Suman', email: 'suman123@gmail.com', mobile: '9876543206', address: 'Vasant Kunj-Delhi', date: '17/10/2024' },
        { id: 9, name: 'Rakesh', email: 'rakesh123@gmail.com', mobile: '9876543205', address: 'Karol Bagh-Delhi', date: '18/10/2024' },
        { id: 10, name: 'Sunita', email: 'sunita123@gmail.com', mobile: '9876543204', address: 'Lajpat Nagar-Delhi', date: '19/10/2024' },
        { id: 11, name: 'Amit', email: 'amit123@gmail.com', mobile: '9876543203', address: 'Punjabi Bagh-Delhi', date: '20/10/2024' },
        { id: 12, name: 'Raj', email: 'raj123@gmail.com', mobile: '9876543202', address: 'Kalkaji-Delhi', date: '21/10/2024' },
        { id: 13, name: 'Reena', email: 'reena123@gmail.com', mobile: '9876543201', address: 'Preet Vihar-Delhi', date: '22/10/2024' },
        { id: 14, name: 'Vikas', email: 'vikas123@gmail.com', mobile: '9876543200', address: 'Mayur Vihar-Delhi', date: '23/10/2024' },
        { id: 15, name: 'Pooja', email: 'pooja123@gmail.com', mobile: '9876543199', address: 'Shahdara-Delhi', date: '24/10/2024' },
        { id: 16, name: 'Kiran', email: 'kiran123@gmail.com', mobile: '9876543198', address: 'Palam-Delhi', date: '25/10/2024' },
        { id: 17, name: 'Nitin', email: 'nitin123@gmail.com', mobile: '9876543197', address: 'Nehru Place-Delhi', date: '26/10/2024' },
        // Add more users if needed
        
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = users.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(users.length / rowsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container">
            <h3>Total Users</h3>
            <div className="table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Address</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {currentRows.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.address}</td>
                                <td>{user.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Controls */}
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} >
                            <button className="page-link" onClick={() => handlePageChange(index + 1)} >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Table;
