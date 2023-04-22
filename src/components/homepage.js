import React from 'react'
import "./homepage.css"
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate()

    const handleClick = () => {
      navigate('/')
    }

    return (
      <div className="homepage">
        <h1>Welcome to Fitness Tracker</h1>
        <div className="button" onClick={handleClick}>Logout</div>
      </div>
    );
  }
  
  export default Homepage;
  