import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>
        This is the best place to find amazing content and connect with others.
      </p>
      <button>
        <Link to="signup">Register</Link>
      </button>
    </div>
  );
}

export default LandingPage