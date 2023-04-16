import React from 'react'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate('/student/search');
    };
    return (
      <div>
        <h1 className='text-left text-3xl font-bold py-8'>Create Profile</h1>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ flex: '1' , marginLeft: '2rem'}}>
            <h2 className='text-left text-xl font-bold'>About me</h2>
            <input
              type='text'
              style={{
                width: '468px',
                height: '600px',
                border: '1px solid black',
                padding: '1rem',
                marginTop: '1rem',
                marginLeft: '12px',
              }}
            />
          </div>
          <div style={{ flex: '1' }}>
            <h2 className='text-left text-xl font-bold'>Group Members (Optional)</h2>
            <input
              type='text'
              style={{
                width: '468px',
                height: '60px',
                border: '1px solid black',
                padding: '1rem',
                marginTop: '1rem',
              }}
            />
            <button
              style={{
                backgroundColor: '#000000',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '16px',
                padding: '8px 24px',
                margin: '1rem 0',
                borderRadius: '14px',
                width: '45%',
                height: '55px',
              }}
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  
  
  export default Profile