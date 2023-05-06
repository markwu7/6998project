import React from 'react';
import { useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Calendar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');
  const email = new URLSearchParams(location.search).get('email');
  const handleReturn = () => {
    navigate(location.state?.from);
  };
  return(
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh', // Set minimum height to fill the viewport
    }}>
      <h1 className='text-center text-3xl font-bold py-8'>{name}'s Calendar</h1>
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
          email || ''
        )}&ctz=America%2FNew_York&mode=week`}
        style={{ border: 0 }}
        title="Google Calendar"
        width="800"
        height="600"
      ></iframe>
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
  );
    
};

export default Calendar;