import React from 'react';
import PersonalDetails from '../Dashboard/PersonalDetails';
import '../Sidebar/Sidebar.css'

const UserProfile = () => {
  return (
    <>
        <div className="dashboard">
        {/* <Card/> */}
       
        <PersonalDetails/>
      </div>
    </>
  )
}

export default UserProfile;
