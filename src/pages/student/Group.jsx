import React from 'react';
import { useNavigate } from 'react-router-dom';

const Group = () => {
  const navigate = useNavigate();
  const handleReturnStart = () => {
    navigate('/');
  };
  const handleReturn = () => {
    navigate('/student/search');
  };
  return (
    <div>
      <h1 className='text-left text-3xl font-bold py-8' style={{ marginLeft: '10px'}}>Group Member</h1>
      <div className='flex items-center'>
        <input
          type='text'
          className='mr-2 px-4 py-2 rounded-lg border border-gray-300'
          style={{ marginLeft: '10px', border: 'solid' }}
        />
        <button
          className='px-4 py-2 rounded-lg bg-black text-white'
        >
          Schedule meeting
        </button>
      </div>
      <div style={{ width: '600px', height: '540px', marginTop: '15px', marginLeft: '10px', border: 'solid' }}>
        <input
          type='text'
          className='w-full h-full px-4 py-2 rounded-lg border border-gray-300'
        />
      </div>
      <button
        className='mt-2 px-4 py-2 rounded-lg bg-black text-white'
        style={{ marginLeft: '10px' }}
        onClick={handleReturnStart}
      >
        RETURN TO START
      </button>
      <button
        className='mt-2 px-4 py-2 rounded-lg bg-white text-black'
        style={{ marginLeft: '10px',border:'solid' }}
        onClick={handleReturn}
      >
        RETURN
      </button>
    </div>
  );
};

export default Group;
