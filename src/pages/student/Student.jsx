import React from 'react'
import { UserAuth } from '../../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';
// import ApiCalendar from "react-google-calendar-api";

// const config = {
//   clientId: '144547975092-aokig3tlqrbt2pqhidprf0m8f1gadp12.apps.googleusercontent.com',
//   apiKey: 'AIzaSyAObYDNWVXQ699vmLFuWVq4WR-TUN-0SCE',
//   scope: "https://www.googleapis.com/auth/calendar",
//   discoveryDocs: [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//   ],
// };

// const apiCalendar = new ApiCalendar(config);

const Student = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const handleRefresh = () => {
    // Reload the current page to refresh the content
    window.location.reload();
  }; 
  const handleYes = () => {
    navigate('/student/createprofile');
  };
  const handleNo = () => {
    // Navigate to Google Calendar website
    window.open(`https://calendar.google.com/calendar/u/${user.email}/r`, '_blank');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Set minimum height to fill the viewport
      }}
    >
      <h1 className='text-center text-3xl font-bold py-8'>Student Page</h1>
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
          user?.email || ''
        )}&ctz=America%2FNew_York&mode=week`}
        style={{ border: 0 }}
        title="Google Calendar"
        width="800"
        height="600"
      ></iframe>
      <h4 className='text-center text-3xl py-8'>Is this calendar correct?</h4>
      <div style={{ marginTop: '1rem' }}>
        <button style={{
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
        onClick={handleYes}
        >Yes</button>
        <button style={{
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
        onClick={handleNo}
        >Edit your calendar</button>
        <button
          onClick={handleRefresh}
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
        >
          Refresh
        </button>
      </div>
    </div>
  );
};


export default Student