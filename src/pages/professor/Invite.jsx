import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Invite = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleEnterClick = () => {
    // Perform logic for "Enter" button click
    const api = ' https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1';
    var p = api + '/requests';
    axios.post(p, {'email': email, 'class': location.state.classname}).then(function (response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
    p = api + '/profile';
    axios.post(p, {'email': email, 'class': location.state.classname}).then(function (response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });

    console.log('Email:', email);
    // Clear email input field after processing
    setEmail('');
  };

  const handleFinishedClick = () => {
    navigate('/');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <h1 className='text-center text-3xl font-bold py-8'>Invite Students</h1>

      <input
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='bg-gray-100 px-4 py-2 rounded'
        style={{
          width: '300px',
          height: '40px',
          fontSize: '16px',
          marginBottom: '8px',
        }}
      />

      <button
        type='button'
        className='bg-blue-500 text-white px-4 py-2 rounded'
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
          height: '55px',
        }}
        onClick={handleEnterClick}
      >
        ENTER
      </button>

      <br />

      <button
        type='button'
        className='bg-blue-500 text-white px-4 py-2 rounded'
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
          height: '55px',
        }}
        onClick={handleFinishedClick}
      >
        FINISHED
      </button>
    </div>
  );
};

export default Invite;
