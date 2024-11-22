import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa6';
import { IoMdMenu } from "react-icons/io";
import { NavLink, useLocation, Link } from 'react-router-dom';

function Header({ toggleSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    console.log("Dropdown Open State:", !dropdownOpen); // Debugging console log
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile, .dropdown-menu')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header" style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #ddd'
    }} >

      <div>
        <ol className="breadcrumb" style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          listStyle: 'none', padding: '0', margin: '0'
        }} >
          <li className="me-2">
            <IoMdMenu size={30} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
          </li>
          <li className="breadcrumb-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Dashboard
            </NavLink>
          </li>
          <li className="breadcrumb-item active">
            {location.pathname === '/' ? '' : location.pathname.replace('/', '')}
          </li>
        </ol>
      </div>

      {/* Profile Icon and Dropdown Menu */}
      <div className="icons" style={{ position: 'relative' }}>
        <div className="profile" style={{ cursor: 'pointer' }} onClick={toggleDropdown}>
        <Link to="/profile">
          <FaUser size={25} style={{color:"#22B6AF"}} />
          </Link>
        </div>
       
      </div>
    </div>
  );
}

export default Header;
