/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import '../Dashboard/personaldetails.css';
import '../Profile/profile.css'
import userImg from '../assets/image/userimg.png';
import { FaCopy } from "react-icons/fa";
import user1 from '../assets/image/user1.png';
import user2 from '../assets/image/user2.png';
import user3 from '../assets/image/user3.png';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <div className="container">
        <div className="profile-card">
          <div className="profile-header"></div>
          <div className="profile-body">
            <img src={userImg} alt="User Profile" />
            <div className="profile-info mx-5">
              <h5>DL05DK1986</h5>
              <p>HOUSE NO 15, GALI NO 1, SADATPUR KARAWAL NAGAR, DELHI, Delhi, 110094</p>
            </div>
          </div>
        </div>

        <div className="row pt-4 mt-4 profile-details">
          <div className="col-md-4 col-12">
            <div className="personal-details">
              <h5>Personal-Details</h5>
              <p>Name: DINESH KUMAR<br />
                Mobile No.: 8595345030<br />
                Qualified Upto: Jan, 2025<br />
                Logid Created On: 30/06/2018</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-md-0 mt-3">
            <div className="personal-details">
              <h5>Status</h5>
              <p>Last Purchase Date: 07/08/2024, 20:35:51<br />
                Current Level: Emerald<br />
                CCC Level (Monthly): Emerald<br />
                CCC Rank: 7</p>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-md-0 mt-3">
            <div className="Emerald bg-light mt-2 mx-4 p-3">
              <h5>Emerald</h5>
              <p>DS Level on 29 September 2024</p>
            </div>
          </div>
        </div>

        <div className="row mt-4 pt-3 pb-3 notice-details">
          <h6 style={{ color: "#FD6E6E" }}>Notice</h6>
          <p>As notified by The Income Tax Department, all Direct Sellers are required to link PAN and Aadhar. If not linked TDS shall be deducted at a rate of 20%. Please link your PAN and Aadhar immediately to avoid the 20% TDS rate.<br />
            जैसा कि आयकर विभाग द्वारा अधिसूचित किया गया है, सभी प्रत्यक्ष विक्रेताओं को पैन और आधार को लिंक करना आवश्यक है। यदि लिंक नहीं किया गया तो 20% की दर से टीडीएस काटा जाएगा। 20% टीडीएस दर से बचने के लिए कृपया अपना पैन और आधार तुरंत लिंक करें।
          </p>
        </div>

        <div className="row mt-4 site-url-section">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="text mb-2 mb-md-0">Your Site Url</div>

                <Link to="#" className="link ms-md-2 me-auto text-truncate" style={{ maxWidth: '80%' }}>
                  https://www.safeshopindia.com/app/shortsignup/1729447912119/REwwNURLMTk4Ng==
                </Link>
                <FaCopy className="copy-icon ms-md-3" />
              </div>
            </div>

          </div>
        </div>


        <div className="row mt-4 card-section">
          <div className="col-md-5 col-12">
            <div className="card p-3 ds-card">
              <h5 className="card-title ds-title">DS Details</h5>
              <div className="ds-details">
                <img src={user1} alt="Profile image of DL05DK1986" className="profile-img" />
                <div>
                  <div className="fw-bold">DL05DK1986</div>
                  <div className="card-text">Logid</div>
                </div>
              </div>
              <div className="ds-details">
                <img src={user2} alt="Profile image of SSSDOMKAR79" className="profile-img" />
                <div>
                  <div className="fw-bold">SSSDOMKAR79</div>
                  <div className="card-text">Reference ID</div>
                </div>
              </div>
              <div className="ds-details">
                <img src={user3} alt="Profile image of DL05MONU92" className="profile-img" />
                <div>
                  <div className="fw-bold">DL05MONU92</div>
                  <div className="card-text">Parent ID</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-12 mt-md-0 mt-3 text-center">
            <div className="card p-3 ds-card">
              <h5 className="card-title ds-title">Weekly Income</h5>
              <div className="d-flex p-2 ds-text">
                <div className="card p-3 mx-5 w-100 text-center">
                  <div className="earning-amount">₹ 2530</div>
                  <div className="earning-date">Date: 9/27/2024</div>
                </div>

                {/* <div className="card p-3 w-50 text-center">
                  <div className="earning-amount">₹ 3035</div>
                  <div className="earning-date">Date: 9/20/2024</div>
                </div> */}

              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 card-footer">
          <div className="card">
            <div className="card-body">
              <div>
                <div className="text">Next Level Status</div>
                <p>You need a total Business Volume of 127735 and 0 Business Volume in your weaker leg to get to the next level of Ruby</p>
              </div>
            </div>
          </div>
        </div>

      </div> {/* container end */}

    </>
  )
};

export default Profile;