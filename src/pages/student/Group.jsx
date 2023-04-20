import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';


const Group = () => {
  const {token} = UserAuth();
  const navigate = useNavigate();
  const handleReturnStart = () => {
    navigate('/');
  };
  const handleReturn = () => {
    navigate('/student/search');
  };

  var gapi = window.gapi
  const handleClick = () => {
    try {
      gapi.load('client:auth2', () => {
        gapi.client.load('calendar', 'v3', () => {
          gapi.client.setToken({access_token:token});
          const event = {
            'summary': 'Awesome Event!',
            'description': 'Really great refreshments',
            'start': {
                'dateTime': '2023-04-29T09:00:00-07:00',
                'timeZone': 'America/New_York'
            },
            'end': {
                'dateTime': '2023-04-29T17:00:00-07:00',
                'timeZone': 'America/New_York'
            },
            // 'recurrence': [
            //   'RRULE:FREQ=DAILY;COUNT=2'
            // ],
            // 'attendees': [
            //   {'email': 'lpage@example.com'},
            //   {'email': 'sbrin@example.com'}
            // ],
            'conferenceData': {
              'createRequest': {
                'requestId': 'test123',
                'conferenceSolutionKey': {
                  'type': 'hangoutsMeet'
                }
              }
            }
          };
  
          // Call the Calendar API to insert the event
          const request =  gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
            conferenceDataVersion:1,
          });
          request.execute((event) => {
            console.log('Event created: ', event);
            window.alert('Meeting scheduled successfully!');
          });
        });
      });
    } catch (error) {
      console.error('Error scheduling meeting: ', error);
    }
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
          onClick={handleClick}
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
