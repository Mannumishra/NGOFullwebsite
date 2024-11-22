import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import { FaChevronDown, FaChevronUp, FaKey,FaUserEdit, FaDonate, FaListAlt } from 'react-icons/fa';
import { CiStopSign1 } from "react-icons/ci";
import { BiMoneyWithdraw } from "react-icons/bi";
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdHome, IoMdLock } from 'react-icons/io';
import { MdOutlineMonetizationOn } from 'react-icons/md';
import './Sidebar.css'


function Sidebar({ isOpen, toggleSidebar }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const renderDropdownIcon = (dropdownName) => (
    openDropdown === dropdownName ? <FaChevronUp className="ms-auto" size={16} /> : <FaChevronDown className="ms-auto" size={16} />
  );

  const handleNavLinkClick = () => {
    // Close the sidebar when any NavLink is clicked on small screens
    if (window.innerWidth < 768) {
      toggleSidebar(false);
    }
  };

  const handleLogout = ()=>{
    sessionStorage.clear()
    window.location.href="/"
  }

  return (
    <div className={`sidebar ${isOpen ? '' : 'hidden'}`}>
    <Link to="/" style={{textDecoration:"none", color:"#ffffff"}}>
      <div className="logo">
        <img src={logo} alt="Logo" height={"50px"} width={"50px"} />
        <span className="ms-2" style={{ fontSize: "10px" }}>Sai Balika Vikas Kalyan Society</span>
      </div>
      </Link>
      <nav className="nav flex-column">
        <NavLink className="nav-link" to="/admin-dashboard" end onClick={handleNavLinkClick}>
          <IoMdHome className="me-3" size={20} />
          Dashboard
        </NavLink>


        <NavLink className="nav-link d-flex" to="/admin-Directdonation" onClick={handleNavLinkClick}>
          <CiStopSign1  className="me-3" size={30} />
          New Direct Donation Signup
        </NavLink>

        <div className="nav-item">
          <div className="nav-link d-flex align-items-center" onClick={() => toggleDropdown('donations')}>
            <FaDonate className="me-3" size={20} />
            Donations
            {renderDropdownIcon('donations')}
          </div>
          {openDropdown === 'donations' && (
            <div className="dropdown-content">
              <NavLink className="nav-link" to="/admin-DonationList" onClick={handleNavLinkClick}>
                <FaListAlt className="me-2" size={16} />
                Donation-List
              </NavLink>
            </div>
          )}
        </div>

        <div className="nav-item">
          <div className="nav-link d-flex align-items-center" onClick={() => toggleDropdown('earnings')}>
            <BiMoneyWithdraw className="me-3" size={20} />
            Earnings
            {renderDropdownIcon('earnings')}
          </div>
          {openDropdown === 'earnings' && (
            <div className="dropdown-content">
              <NavLink className="nav-link" to="/admin-Earning" onClick={handleNavLinkClick}>
                <MdOutlineMonetizationOn className="me-2" size={16} />
                Total Earnings
              </NavLink>
            </div>
          )}
        </div>

        {/* <NavLink className="nav-link" to="/TotalUsers" onClick={handleNavLinkClick}>
          <FaUsers className="me-3" size={20} />
          Total User
        </NavLink> */}

        <div className="nav-item">
          <div className="nav-link d-flex align-items-center" onClick={() => toggleDropdown('userProfile')}>
            <IoSettingsOutline className="me-3" size={20} />
            User Profile
            {renderDropdownIcon('userProfile')}
          </div>
          {openDropdown === 'userProfile' && (
            <div className="dropdown-content">
              {/* <NavLink className="nav-link" to="/Signup" onClick={handleNavLinkClick}>
                <FaUserEdit className="me-2" size={16} />
                Sign Up
              </NavLink> */}
              {/* <NavLink className="nav-link" to="/UserProfile" onClick={handleNavLinkClick}>
                <FaUser className="me-2" size={16} />
                User Profile
              </NavLink> */}
              <NavLink className="nav-link" to="/admin-UpdateProfile" onClick={handleNavLinkClick}>
                <FaKey className="me-2" size={16} />
                Update Profile
              </NavLink>
            </div>
          )}
        </div>

        <NavLink className="nav-link" to="/logout" onClick={handleLogout}>
          <IoMdLock className="me-3" size={20} />
          Logout
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
