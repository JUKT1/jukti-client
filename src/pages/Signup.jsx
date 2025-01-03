import React, { useState } from 'react';
import './Signup.css';
import StudentSignup from '../components/signup/StudentSignup';
import OwnerSignup from '../components/signup/ownerSignup';

const Signup = () => {
  const [isStudent, setIsStudent] = useState(true);

  return (
    <div className='Signup-container'>
      <div>
        <div 
          onClick={() => setIsStudent(true)} 
          className={isStudent ? 'active' : ''}
        >
          Student Signup
        </div>
        <div 
          onClick={() => setIsStudent(false)} 
          className={!isStudent ? 'active' : ''}
        >
          Owner Signup
        </div>
      </div>
      {isStudent ? <StudentSignup/> : <OwnerSignup/>}
    </div>
  );
}

export default Signup