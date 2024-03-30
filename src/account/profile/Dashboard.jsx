import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS file for styling

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dashboard ${isOpen ? 'open' : ''}`}>
      <div className="sidebar">
        <ul>
          <li>Dashboard</li>
          <li>Offered Tests</li>
          <li>Orders</li>
          <li>Components</li>
        </ul>
        <button className="settings-btn">Settings</button>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fas fa-chevron-${isOpen ? 'left' : 'right'}`}></i>
        </div>
      </div>
      <div className="main-content">
        <h1>Main Content</h1>
        <button className="add-test-btn">Add Test</button>
        <button className="delete-test-btn">Delete Test</button>
      </div>
    </div>
  );
};

export default Dashboard;
