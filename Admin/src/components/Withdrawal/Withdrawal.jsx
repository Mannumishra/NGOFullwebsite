
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import '../Withdrawal/withdrawal.css';
import { BsThreeDotsVertical } from "react-icons/bs";

const Withdrawal = () => {
    return (
        <>
            <div className="container">
                <h2>Withdrawal List</h2>
                <h6>List of all Withdraw</h6>
                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>NAME</th>
                                <th>LOGID</th>
                                <th>DATE</th>
                                <th>BV</th>
                                <th>AMOUNT</th>
                                <th>STATUS</th>
                                <th>Send</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#</td>
                                <td>SUNIL KUMAR</td>
                                <td>SSS07SUNILDP2</td>
                                <td>07/08/2024</td>
                                <td>40</td>
                                {/* <td>₹ 2270.00</td> */}
                                <td>
                                <span style={{ left: "10px", top: "10px", fontSize: "18px", color: "#6c6c6c" }}>₹</span>
                                <input type="number" placeholder="Enter amount"  style={{border:"none", textAlign:"center", outline:"none"}}/>
                                </td>
                                <td><span className="status-approved">Approved</span></td>
                                <td><button className="send-btn" role="button">Send</button></td>
                                <td><button className="action-btn"><BsThreeDotsVertical /></button></td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>SUNIL KUMAR</td>
                                <td>SSS07SUNILDP2</td>
                                <td>07/08/2024</td>
                                <td>40</td>
                                {/* <td>₹ 3590.00</td> */}
                                <td>
                                <span style={{ left: "10px", top: "10px", fontSize: "18px", color: "#6c6c6c" }}>₹</span>
                                <input type="number" placeholder="Enter amount"  style={{border:"none", textAlign:"center", outline:"none"}}/>
                                </td>
                                <td><span className="status-rejected">Rejected</span></td>
                                <td><button className="send-btn" role="button">Send</button></td>
                                <td><button className="action-btn"><BsThreeDotsVertical /></button></td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>SUNIL KUMAR</td>
                                <td>SSS07SUNILDP2</td>
                                <td>07/08/2024</td>
                                <td>40</td>
                                {/* <td>₹ 3590.00</td> */}
                                <td>
                                <span style={{ left: "10px", top: "10px", fontSize: "18px", color: "#6c6c6c" }}>₹</span>
                                <input type="number" placeholder="Enter amount"  style={{border:"none", textAlign:"center", outline:"none"}}/>
                                </td>
                                <td><span className="status-pending">Pending</span></td>
                                <td><button className="send-btn" role="button">Send</button></td>
                                <td><button className="action-btn"><BsThreeDotsVertical /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Withdrawal;


