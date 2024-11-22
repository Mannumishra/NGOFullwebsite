import React, { useEffect, useState } from 'react';

const CheckPayment = () => {
    const [approvedChecks, setApprovedChecks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredChecks, setFilteredChecks] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Load approved checks from localStorage on component mount
    useEffect(() => {
        const storedApprovedChecks = JSON.parse(localStorage.getItem('approvedChecks')) || [];
        setApprovedChecks(storedApprovedChecks);
        setFilteredChecks(storedApprovedChecks);
    }, []);

    const isValidDate = (date) => {
        const parsedDate = new Date(date);
        return !isNaN(parsedDate.getTime());
    };

    // Apply filters whenever searchTerm, startDate, endDate, or approvedChecks change
    useEffect(() => {
        const filtered = approvedChecks.filter((check) => {
            const matchesSearch =
                check.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                check.logid.toLowerCase().includes(searchTerm.toLowerCase());

            const isWithinDateRange =
                (!startDate || (isValidDate(check.date) && new Date(check.date) >= new Date(startDate))) &&
                (!endDate || (isValidDate(check.date) && new Date(check.date) <= new Date(endDate)));

            return matchesSearch && isWithinDateRange;
        });

        setFilteredChecks(filtered);
    }, [searchTerm, startDate, endDate, approvedChecks]);

    if (approvedChecks.length === 0) {
        return <div className="container">No approved checks available</div>;
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col-6">
                    <h2>Approved Check Payments</h2>
                    <h6>List of all approved Check payments</h6>
                </div>
                <div className="col-6 d-flex justify-content-end align-items-center gap-2">
                    {/* Search by name/ID */}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name or ID"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {/* Start date */}
                    <input
                        type="date"
                        className="form-control"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    {/* End date */}
                    <input
                        type="date"
                        className="form-control"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            {/* Display table */}
            <div className="table-responsive">
                <table className="table table-striped align-middle">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>NAME</th>
                            <th>LOGID</th>
                            <th>AMOUNT</th>
                            <th>CHEQUE NO</th>
                            <th>BANK NAME</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredChecks.map((check, index) => {
                            const date = new Date(check.date);
                            const formattedDate = isValidDate(check.date)
                                ? date.toLocaleDateString('en-GB') // Use 'en-GB' locale for dd/mm/yyyy format
                                : "Invalid Date";
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{check.name}</td>
                                    <td>{check.logid}</td>
                                    <td>{check.amount}</td>
                                    <td>{check.cheque}</td>
                                    <td>{check.bank || "Not Available"}</td>
                                    <td>{check.date}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CheckPayment;
