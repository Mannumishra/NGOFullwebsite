import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import weblogo from '../assets/image/logo.jpg';
import { FaChevronDown, FaChevronUp, FaKey, FaUserEdit, FaCheck, FaDonate, FaListAlt } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoMdHome, IoMdLock } from 'react-icons/io';
import { SiAnkermake } from "react-icons/si";
import { MdCreate } from 'react-icons/md';
import { BiMoneyWithdraw } from "react-icons/bi";



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

  return (
    <div className={`sidebar ${isOpen ? '' : 'hidden'}`}>
    <Link to="/" style={{textDecoration:"none", color:"#ffffff"}}>
      <div className="logo">
        <img src={weblogo} alt="Logo" height={"50px"} width={"50px"} />
        <span className="ms-2" style={{ fontSize: "10px" }}>Sai Balika Vikas Kalyan Society</span>
      </div>
      </Link>
      <nav className="nav flex-column">
        <NavLink className="nav-link" to="/" end onClick={handleNavLinkClick}>
          <IoMdHome className="me-3" size={20} />
          Dashboard
        </NavLink>

        <div className="nav-item">
          <div className="nav-link d-flex align-items-center" onClick={() => toggleDropdown('donations')}>
            <FaDonate className="me-3" size={20} />
            Donations
            {renderDropdownIcon('donations')}
          </div>
          {openDropdown === 'donations' && (
            <div className="dropdown-content">
              <NavLink className="nav-link" to="/TotalDonation" onClick={handleNavLinkClick}>
                <FaListAlt className="me-2" size={16} />
                Donation-List
              </NavLink>
            </div>
          )}
        </div>

        <div className="nav-item">
          <div className="nav-link d-flex align-items-center" onClick={() => toggleDropdown('earnings')}>
            <BiMoneyWithdraw  className="me-3" size={20} />
            Earnings
            {renderDropdownIcon('earnings')}
          </div>
          {openDropdown === 'earnings' && (
            <div className="dropdown-content">
              <NavLink className="nav-link" to="/CreateCheque" onClick={handleNavLinkClick}>
                <MdCreate className="me-2" size={16} />
                Create-Cheque
              </NavLink>
              <NavLink className="nav-link" to="/MakePayment" onClick={handleNavLinkClick}>
                <SiAnkermake className="me-2" size={16} />
                Make-Payment
              </NavLink>

              <NavLink className="nav-link" to="/CheckPayment" onClick={handleNavLinkClick}>
                <FaCheck className="me-2" size={16} />
                Check-Payment
              </NavLink>

            </div>
          )}
        </div>



        <NavLink className="nav-link" to="/TotalUser" onClick={handleNavLinkClick}>
          <FaUserGroup className="me-3" size={20} />
          TotalUser
        </NavLink>

        {/* <div className="nav-item">
          <div className="nav-link d-flex align-items-center" onClick={() => toggleDropdown('userProfile')}>
            <IoSettingsOutline className="me-3" size={20} />
            User Profile
            {renderDropdownIcon('userProfile')}
          </div>
          {openDropdown === 'userProfile' && (
            <div className="dropdown-content">
              <NavLink className="nav-link" to="/Signup" onClick={handleNavLinkClick}>
                <FaUserEdit className="me-2" size={16} />
                Sign Up
              </NavLink>
    
              <NavLink className="nav-link" to="/Update" onClick={handleNavLinkClick}>
                <FaKey className="me-2" size={16} />
                Update Profile
              </NavLink>
            </div>
          )}
        </div> */}

        <NavLink className="nav-link" to="/logout" onClick={handleNavLinkClick}>
          <IoMdLock className="me-3" size={20} />
          Logout
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
