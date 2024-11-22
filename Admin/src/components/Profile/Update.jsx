import React from 'react';
import { Link } from 'react-router-dom';


const Update = () => {
    return (
        <>
            <div className="container">
                <h2 className="mb-4">Update Profile</h2>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "18px" }}>
                                <span className="fw-bold">Basic</span>
                                <span>LogID : SS057SUNILDP2<br />Name : SUNIL KUMAR</span>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-2">
                                            <label for="title" className="form-label">Title</label>
                                            <input type="text" className="form-control" id="title" placeholder="Mr" required />
                                        </div>
                                        <div className="col-md-5">
                                            <label for="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="SUNIL KUMAR" required />
                                        </div>
                                        <div className="col-md-5">
                                            <label for="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="SUNILPAL8680@GMAIL.COM" required />
                                            <Link to="#" className="text-danger">Click here to Verify Email</Link>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label for="mobile" className="form-label">Mobile Number</label>
                                            <input type="text" className="form-control" id="mobile" placeholder="9876543210" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label for="address" className="form-label">Address</label>
                                            <input type="text" className="form-control" id="address" placeholder="VILLAGE -NANU, POST -MANDOLA" required />
                                            <input type="text" className="form-control mt-4" id="address" placeholder="DISTRICT -GHAZIABAD" required />
                                        </div>
                                    </div>

                                    {/* <div className="row mb-3">
                                        <div className="col-md-12">
                                            <label for="address" className="form-label">Address 2</label>
                                            <input type="text" className="form-control" id="address" placeholder="VILLAGE -NANU, POST -MANDOLA" />
                                        </div>
                                        </div> */}

                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label for="state" className="form-label">State</label>
                                            <input type="text" className="form-control" id="state" placeholder="Uttar Pradesh" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="district" className="form-label">District</label>
                                            <input type="text" className="form-control" id="district" placeholder="Ghaziabad" required />
                                        </div>

                                        <div className="col-md-4">
                                            <label for="pincode" className="form-label">Pincode</label>
                                            <input type="number" className="form-control" id="pincode" placeholder="201102" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <label for="city" className="form-label">City</label>
                                            <input type="text" className="form-control" id="city" placeholder="LONI" required />
                                        </div>
                                        <div className="col-md-4">
                                            <label for="nearby" className="form-label">Near By</label>
                                            <input type="text" className="form-control" id="nearby" placeholder="NEAR -POWER GRID" required />
                                        </div>
                                        <div className="col-md-2">
                                            <label for="gender" className="form-label">Gender</label>
                                            <input type="text" className="form-control" id="gender" placeholder="Male" required />
                                        </div>
                                        <div className="col-md-2">
                                            <label for="country" className="form-label">Country</label>
                                            <input type="text" className="form-control" id="country" placeholder="India" required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Enable two way authentication</label>
                                        <div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="twoWayAuth" id="enable" value="enable" required />
                                                <label className="form-check-label" for="enable">Enable</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="twoWayAuth" id="disable" value="disable" checked />
                                                <label className="form-check-label" for="disable">Disable</label>
                                            </div>
                                            <button type="submit" className="btn btn-primary" style={{ float: "right", background: "#22B6AF", border: "none" }}>Update Basic Profile</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header fs-4">Info</div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label for="nomineeName" className="form-label">Nominee Name</label>
                                            <input type="text" className="form-control" id="nomineeName" placeholder="Poonam" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label for="nomineeRelation" className="form-label">Nominee relation</label>
                                            <input type="text" className="form-control" id="nomineeRelation" placeholder="Wife" required />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12 mb-3">
                                            <label for="advisorName" className="form-label">Sr Advisor Name</label>
                                            <input type="text" className="form-control" id="advisorName" placeholder="Luvkush" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label for="advisorCallNo" className="form-label">Sr Adv Call No</label>
                                            <input type="text" className="form-control" id="advisorCallNo" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ float: "right", background: "#22B6AF", border: "none" }}>Update Info</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header fs-4">Update PAN</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="panNumber" className="form-label">PAN Number</label>
                                        <input type="text" className="form-control" id="panNumber" placeholder="CQXPK7553H" required />
                                        <span className="approved" style={{ color: "#81B13D" }}>Approved</span>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ float: "right", background: "#22B6AF", border: "none" }}>Update PAN</button>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header fs-4">Update Bank A/c</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="ifscCode" className="form-label">IFSC Code</label>
                                        <input type="text" className="form-control" id="ifscCode" placeholder="PUNB0028410"  required />
                                    </div>
                                    <div className="mb-3">
                                        <label for="accountNumber" className="form-label">Account Number</label>
                                        <input type="number" className="form-control" id="accountNumber" placeholder="02842191014958" required />

                                    </div>
                                    <div className="mb-3">
                                        <label for="accountNumber" className="form-label">Confirm Account Number</label>
                                        <input type="number" className="form-control" id="accountNumber" placeholder="02842191014958" required />
                                        <span className="approved" style={{ color: "#81B13D" }}>Approved</span>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ float: "right", background: "#22B6AF", border: "none" }}>Update A/C</button>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div className="card-header fs-4">Update GST</div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="gstNumber" className="form-label">GST Number</label>
                                        <input type="text" className="form-control" id="gstNumber" placeholder="Type here" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ float: "right", background: "#22B6AF", border: "none" }}>Update GST</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>








                <div className="card mt-5 p-4">
                    <h3 className="card-title">Social Media Account</h3>
                    <hr />
                    <p className="card-text fs-6">
                        I understand that posting any content such as claims of exaggerated income, assured income without effort, display of opulence etc on social media that directly or by interpretation is likely to mislead or entice the target audience is prohibited under Consumer Protection (Direct Selling) Rules, 2021 notified on 28.12.2021 and the violation shall render me liable for action including termination as a Direct Seller.
                    </p>
                    <p className="card-text fs-6">
                        I undertake to abide by the above Rule and to the best of my knowledge, no such content is posted on my following social media accounts.
                    </p>
                    <form>
                        <div className="mb-3">
                            <label for="facebookAccount" className="form-label">Do You have Facebook Account? Please select Yes/No</label>
                            <select className="form-select" id="facebookAccount" style={{ outline: "none", boxShadow: "none" }}>
                                <option selected>Select Here</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="youtubeAccount" className="form-label">Do You have Youtube Account? Please select Yes/No</label>
                            <select className="form-select" id="youtubeAccount" style={{ outline: "none", boxShadow: "none" }}>
                                <option selected>Select Here</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="instagramAccount" className="form-label">Do You have Instagram Account? Please select Yes/No</label>
                            <select className="form-select" id="instagramAccount" style={{ outline: "none", boxShadow: "none" }}>
                                <option selected>Select Here</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ background: "#22B6AF", border: "none" }}>Update</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Update;