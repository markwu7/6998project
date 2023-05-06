import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const RequestSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleReturn = () => {
    navigate(location.state?.from);
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Group Request Sent Successfully</h1>
      <div className="flex justify-center mt-8">
        <button
          style={{  
            backgroundColor: '#000000',
            border: 'none',
            color: '#FFFFFF',
            fontSize: '16px',
            padding: '8px 24px',
            margin: '5px',
            borderRadius: '14px',
            borderStyle: 'solid',
            width: '205px',
            height: '55px'}}
          className="px-4 py-2 rounded-md"
          onClick={handleReturn}
        >
          RETURN
        </button>
      </div>
    </div>
  ); 
};

export default RequestSuccess;
