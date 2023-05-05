import React from 'react'
import { UserAuth } from '../../context/AuthContext.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Student = () => {
  const { user,token } = UserAuth();
  const navigate = useNavigate();
  const handleRefresh = () => {
    // Reload the current page to refresh the content
    window.location.reload();
  }; 
  const handleYes = () => {
    navigate('/student/createprofile');
    handleClick();
  };
  const handleNo = () => {
    // Navigate to Google Calendar website
    window.open(`https://calendar.google.com/calendar/u/${user.email}/r`, '_blank');
  };

  var arr = new Array(7);
  async function myfunction() {
    try {
      gapi.load('client:auth2', () => {
        gapi.client.load('calendar', 'v3', () => {
          gapi.client.setToken({access_token:token});
          const now = new Date();
          
          for (let i = 1; i < 8; i++) {
            const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + i);
            const endOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + (i+1));
            const request = gapi.client.calendar.events.list({
              'calendarId': 'primary',
              'timeMin': startOfWeek.toISOString(),
              'timeMax': endOfWeek.toISOString(),
              'timeZone': 'America/New_York',
              'showDeleted': false,
              'singleEvents': true,
              'orderBy': 'startTime'
            });
            request.execute((response) => {
              console.log('Events response: ', response);
              var events = response.items.map((event) => {
                return {
                  'title': event.summary,
                  'start': event.start.dateTime,
                  'end': event.end.dateTime,
                  'url': event.htmlLink
                };
              });
              arr[i-1] = events;
            }); 
          }
          console.log(arr);
          // console.log('Events data: ', events);
        });
      });
    } catch (error) {
      console.error('Error retrieving events: ', error);
    }
    return arr;
  };


  
  var gapi = window.gapi
  const handleClick = () => {
    const re = myfunction();
    const api = ' https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1';
    var p = api + '/updatecal';
    axios.post(p, {'email': user.email, 'events': re}).then(function (response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
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