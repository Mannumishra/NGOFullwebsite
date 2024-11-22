
import React from 'react';
import Card from '../Card/Card';
import TotalDoner from '../Totaluser/TotalDoner';




function Dashboard() {

  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <>
      <div className="dashboard">
      <Card/>
      <TotalDoner/>
      
      </div>
    
    </>
  );
}

export default Dashboard;
