import React from 'react'
import { useNavigate } from 'react-router-dom';
const Success = () => {

  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/');
  };
  const handleInviteClick = () => {
    navigate('/professor/invite');
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
  <h1 className='text-3xl font-bold py-8'>Class Created Successfully!</h1>

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
    onClick={handleInviteClick}
  >
    INVITE
  </button>
  <br />
  <button
    type='submit'
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
    onClick={handleNextClick}
  >
    RETURN TO START
  </button>
</div>


  )
}

export default Success