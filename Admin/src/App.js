import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import TotalDonation from './components/Totaluser/TotalDonation';
import Withdrawal from './components/Withdrawal/Withdrawal';
import TotalUser from './components/Totaluser/TotalUser';
import CreateCheque from './components/Earnings/CreateCheque';
import MakePayment from './components/Earnings/MakePayment';
import CheckPayment from './components/Earnings/CheckPayment';
import Signup from './components/Profile/Signup';
import Update from './components/Profile/Update';
import UserDetails from './components/Userdetails/UserDetails';
import Login from './components/Login/Login';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") // State to manage login status

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="dashboard">
        {isLoggedIn ? ( // If logged in, show the dashboard
          <>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className={`content ${isSidebarOpen ? '' : 'full-width'}`}>
              <Header toggleSidebar={toggleSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/TotalDonation" element={<TotalDonation />} />
                <Route path="CreateCheque" element={<CreateCheque />} />
                <Route path="MakePayment" element={<MakePayment />} />
                <Route path="CheckPayment" element={<CheckPayment />} />
                <Route path="/Withdrawal" element={<Withdrawal />} />
                <Route path="/TotalUser" element={<TotalUser />} />
                <Route path="/UserDetails/:id" element={<UserDetails />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="Update" element={<Update />} />
                <Route path="/login" element={<Navigate to="/" />} /> {/* Redirect if already logged in */}
              </Routes>
              <Footer />
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to login if not authenticated */}
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
