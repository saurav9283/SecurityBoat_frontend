import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const isTokenPresent = () => {
    // Check if a token is present in localStorage
    const token = localStorage.getItem('user'); // Replace with your token key

    // If the token is present, return true; otherwise, return false
    return token !== null;
  };

  const handleLogout = () => {
    // Clear the token from localStorage
    localStorage.removeItem('user');

    // Redirect to the login page
    window.location.href = '/login'; // You can use React Router for routing if you prefer
  };

  return (
    <div className='navBar'>
      <div className="logo">
        <h1> MyLogo</h1>
      </div>
      <div className="links">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/add'>Add Product</NavLink>
        {isTokenPresent() ? (
          <button onClick={handleLogout}  className='logout'>Logout</button>
        ) : (
          <NavLink to='/login'>Login</NavLink>
        )}
        {isTokenPresent() ? null : <NavLink to='/register'>Register</NavLink>}
      </div>
    </div>
  );
}

export default Navbar;
