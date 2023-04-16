import React from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate('/');
  };
  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Search By </h1>
      <div className="flex justify-center space-x-4">
        {/* Button 1: Black background, white text */}
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
        >
          WHOLE CLASS
        </button>
        {/* Button 2: White background, black text */}
        <button
          style={{  
            backgroundColor: '#FFFFFF',
            border: 'none',
            color: '#000000',
            fontSize: '16px',
            padding: '8px 24px',
            margin: '5px',
            borderRadius: '14px',
            borderStyle: 'solid',
            width: '205px',
            height: '55px'}}
          className="px-4 py-2 rounded-md"
        >
          RECOMMENDATIONS
        </button>
        {/* Button 3: Black background, white text */}
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
        >
          GROUP HOMEPAGE
        </button>
      </div>
      <div className="flex justify-center">
        {/* Button 4: White background, black text */}
        <button
          style={{  
            backgroundColor: '#FFFFFF',
            border: 'none',
            color: '#000000',
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
          RETURN TO START
        </button>
      </div>
    </div>
  );
};

export default Search;
