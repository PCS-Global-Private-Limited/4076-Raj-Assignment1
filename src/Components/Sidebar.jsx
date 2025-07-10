import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="https://tse1.mm.bing.net/th/id/OIP.3w-6qKgddjvPjv_K7_vdigHaHa?pid=Api&P=0&h=220" alt="Profile" />
        <h3>Raj Jaiswal</h3>
      </div>
      <ul className="nav-menu">
        <li><i class="fa-solid fa-bars"></i>Dashboard</li>
        <li><i class="fa-solid fa-user"></i>Account</li>
        <li><i class="fa-solid fa-gear"></i>Setting</li>
        <li><i class="fa-solid fa-graduation-cap"></i>About Us</li>
        <li><i class="fa-regular fa-address-book"></i>Contact</li>
      </ul>

      <ul className='nav-menu footer'>
        <li><i class="fa-solid fa-question"></i>Help</li>
        <li><i class="fa-solid fa-right-from-bracket"></i>Log Out</li>
      </ul>
    </div>
  );
};

export default Sidebar;
