import React from 'react'
import '../Sidebar/Sidebar.css'
import PersonalDetails from '../Dashboard/PersonalDetails';

function Dashboard() {
  return (
    <>
      <div className="dashboard">
        {/* <Card/>
        <Table/> */}
        <PersonalDetails/>
      </div>
    </>
  );
}

export default Dashboard;
