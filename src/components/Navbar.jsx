import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between items-center bg-gray-200 w-full p-4'>
      <Link to='/' className='text-2xl font-bold'>
        Partner Finder APP
      </Link>


      {user?.displayName ? (
        <div className='flex'>
          <Link to='/account' className='mr-4'>Account</Link>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;
