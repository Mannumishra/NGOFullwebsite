import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar/Sidebar.css'

const EmptySignup = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setMobileNumber(value);

        // Show error only if user has typed something and it's not exactly 10 digits
        if (value.length > 0 && value.length !== 10) {
            setError('Please enter a valid number 10 digit');
        } else {
            setError('');
        }
    };

    return (
        <div className="container">
            <div className="header text-center">
                <h3>Signup</h3>
                <p>Signup new logid</p>
            </div>
            <div className="row mb-4 mt-4 text-center">
                <div className="col-md-4">
                    <div className="card p-1">
                        <div className="card-body">
                            <p>Referid : SSS07SUNILDP2</p>
                            <p>Name : SUNIL KUMAR</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-1">
                        <div className="card-body">
                            <p>ParentID : SSS07MANOJDP2</p>
                            <p>Name : MANOJ PAL</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-1">
                        <div className="card-body">
                            <p>Position :</p>
                            <p>Right</p>
                        </div>
                    </div>
                </div>
            </div>
            <form action="">
                <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                    <input type="number" className="form-control" id="mobileNumber" placeholder="Type here" value={mobileNumber} onChange={handleInputChange} required />
                    {/* <div className="form-text">Please enter mobile number</div> */}
                    {error && <div className="text-danger">{error}</div>}
                </div>

                <button className="opt-btn" role="button">Send otp</button>

            </form>
        </div>
    );
};

export default EmptySignup;






