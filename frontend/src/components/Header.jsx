import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { BiSolidBadgeCheck } from "react-icons/bi";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import "./header.css";
import Swal from "sweetalert2"; // Import SweetAlert2


const Header = () => {
    const [activeDropdown, setActiveDropdown] = React.useState("");
    const [activeSubmenu, setActiveSubmenu] = React.useState("");

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? "" : menu);
    };

    const toggleSubmenu = (submenu) => {
        setActiveSubmenu(activeSubmenu === submenu ? "" : submenu);
    };

    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const handleLinkClick = () => {
        setShowNavbar(false);
    };

    const isLoggedIn = sessionStorage.getItem("login"); // Check login status

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be logged out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, logout!',
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.clear(); // Clear sessionStorage
                window.location.href = "/"; // Redirect to home or login page after logout
            }
        });
    };


    return (
        <>
            {/* Header icon section  */}
            <div class="top-bar d-flex justify-content-between">
                <div class="left-content">
                    <PiEnvelopeSimpleLight size={"20"} />
                    <span className="mx-2 fw-bold">Reg No. S/1119/2012</span>
                </div>
                <div class="right-content">
                    {/* <i class="fas fa-shield-alt"></i> */}
                    <BiSolidBadgeCheck size={"20"} />
                    <span className="mx-2 fw-bold">
                        100% Secure & Govt. Approved (Since:2012)
                    </span>
                    <FaFacebookF size={"15"} className="mx-1" />
                    <FaYoutube size={"15"} className="mx-1" />
                    <FaTwitter size={"15"} className="mx-1" />
                    <FaInstagram size={"15"} className="mx-1" />
                </div>
            </div>

            {/* Navbar section */}
            <nav className="navbar px-4 navbarHero">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="" height={"50"} width={"50"} />
                    </Link>
                    <span className="ms-1 logotext">Sai Balika Vikas Kalyan Society</span>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger toggled={showNavbar} toggle={setShowNavbar} />
                </div>
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={handleLinkClick}>
                                Home
                            </NavLink>
                        </li>
                        {/* Admin Dashboard with Dropdown */}
                        {
                            isLoggedIn ? <li className="dropdown">
                                <Link to="/" className="dropdown-toggle">
                                    Dashboard
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/admin-dashboard" onClick={handleLinkClick}>
                                            My Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin-Directdonation" onClick={handleLinkClick}>
                                            New Direct Sign-Up
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/admin-UserView" onClick={handleLinkClick}>
                                            Team View
                                        </Link>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <Link to="#" className="submenu-toggle">
                                            Donation
                                        </Link>
                                        <ul className="sub-dropdown-menu">
                                            <li>
                                                <Link to="/admin-DonationList" onClick={handleLinkClick}>
                                                    Donation List
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <Link to="#" className="submenu-toggle">
                                            Earning
                                        </Link>
                                        <ul className="sub-dropdown-menu">
                                            <li>
                                                <Link to="/admin-Earning" onClick={handleLinkClick}>
                                                    Total Earning
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown-submenu">
                                        <Link to="#" className="submenu-toggle">
                                            User Profile
                                        </Link>
                                        <ul className="sub-dropdown-menu">
                                            <li>
                                                <Link to="/admin-UpdateProfile" onClick={handleLinkClick}>
                                                    Update Profile
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <li>
                                        <Link to="/logout" onClick={handleLinkClick}>
                                            Logout
                                        </Link>
                                    </li> */}
                                </ul>
                            </li>
                                : null
                        }

                        <li>
                            <NavLink to="/Investment" onClick={handleLinkClick}>
                                Investments
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/Causes" onClick={handleLinkClick}>
                                Our Causes
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink to="/contact" onClick={handleLinkClick}>
                                Contact
                            </NavLink>
                        </li>
                        {
                            isLoggedIn ? (
                                <li>
                                    <button className="btn btn-primary" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <li>
                                    <Link to="/Login">
                                        <button className="btn btn-primary" onClick={handleLinkClick}>
                                            Login
                                        </button>
                                    </Link>
                                </li>
                            )
                        }
                    </ul>
                </div>

            </nav>
        </>
    );
};

export default Header;
