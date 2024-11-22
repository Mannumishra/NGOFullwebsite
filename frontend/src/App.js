import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Investment from './pages/Investment';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Cousesdetails from './components/Cousesdetails';
import Causes from './pages/Causes';
import Makedonation from './components/Makedonation';
import Imagecontainer from './components/Imagecontainer';
import MarriageDetails from './components/MarriageDetails';
import GirlBorn from './components/GirlBorn';
import Accidental from './components/Accidental';
import Login from './pages/Login';
import PersonalDetails from './components/Admin/Dashboard/PersonalDetails';
import DonationList from './components/Admin/Donation/DonationList';
import DirectDonation from './components/Admin/Donation/DirectDonation';
import UserView from './components/Admin/Donation/UserView';
import Signup from './components/Admin/UserProfile/Signup';
import Earning from './components/Admin/Earning/Earning';
import UpdateProfile from './components/Admin/UserProfile/UpdateProfile';

function App() {
  const isLoggedIn = sessionStorage.getItem("login"); // Check login status

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Admin routes with login check */}
        <Route path="/admin-dashboard" element={isLoggedIn ? <PersonalDetails /> : <Navigate to="/Login" />} />
        <Route path="/admin-DonationList" element={isLoggedIn ? <DonationList /> : <Navigate to="/Login" />} />
        <Route path="/admin-Directdonation" element={isLoggedIn ? <DirectDonation /> : <Navigate to="/Login" />} />
        <Route path="/admin-UserView" element={isLoggedIn ? <UserView /> : <Navigate to="/Login" />} />
        <Route path="/admin-signup" element={isLoggedIn ? <Signup /> : <Navigate to="/Login" />} />
        <Route path="/admin-Earning" element={isLoggedIn ? <Earning /> : <Navigate to="/Login" />} />
        <Route path="/admin-UpdateProfile" element={isLoggedIn ? <UpdateProfile /> : <Navigate to="/Login" />} />

        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/MarriageDetails" element={<MarriageDetails />} />
        <Route path="/GirlBorn" element={<GirlBorn />} />
        <Route path="/Accidental" element={<Accidental />} />
        <Route path="/Investment" element={<Investment />} />
        <Route path="/Causes" element={<Causes />} />
        <Route path="/Makedonation" element={<Makedonation />} />
        <Route path="/Imagecontainer" element={<Imagecontainer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cousesdetails" element={<Cousesdetails />} />

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
