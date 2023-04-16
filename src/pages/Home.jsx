import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Home = () => {

  const { user } = UserAuth();
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold py-8'>Home Page</h1>
      {user?.displayName && user?.email?.endsWith('@columbia.edu')? (
        <>
          <p style={{ fontSize: '24px' }}>Welcome, {user.displayName}</p>
          <p style={{ fontSize: '24px' }}>I AM A</p>
          <div className='flex justify-center space-x-4 mt-4'>
            <Link to='/student'  className='bg-black text-white px-4 py-2 rounded-md'
              style={{ 
                fontSize: '40px', padding: '12px 24px', margin: '5px',
                borderRadius: '14px', outline: 'none', width: '285px',
                height: '123px', border: '2px solid black',
                display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Student
            </Link>
            <Link to='/professor' className='bg-white text-black px-4 py-2 rounded-md border-2 border-black' 
            style={{ 
                fontSize: '40px', padding: '12px 24px', margin: '5px',
                borderRadius: '14px', outline: 'none', width: '285px',
                height: '123px', border: '2px solid black',
                display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Professor
            </Link>
          </div>
        </>
      ) : null}
    </div>
    
  )
}

export default Home