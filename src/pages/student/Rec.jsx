import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import axios from 'axios';

const Rec = () => {
  const { user } = UserAuth();
  const items = [];

 
  const navigate = useNavigate();
  const location = useLocation();
  var recs = location.state.recommend;
  console.log(location.state);
  for (var i = 0; i < recs.length; i++) {
    items.push({name: "", email: recs[i]});
  }
  const handleRequestGroup = (item) => {
        const api = ' https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1';
        var p = api + '/groupreq';

        axios.post(p, {'sender': user.email, 'name': user.displayName, "receive": item.email}).then(function (response) {
            console.log(response);
            recs = response['data']['body']
            console.log(recs);
          }).catch(function(error) {
            console.log(error);
          }); 
        navigate('/student/requestSuccess', { state: { from: location.pathname } });
  };

  const handleSeeCalendar = (item) => {
    navigate(`/student/calendar?name=${item.name}&email=${encodeURIComponent(item.email)}`, { state: { from: location.pathname } });
  };
  const handleReturnGroupHome = () => {
    navigate('/student/group');
  };
  const handleReturn = () => {
    navigate('/student/search');
  };

  const handleReturnToStart = () => {
    navigate('/');
  };


  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Recommendation List</h1>
      <ul className="space-y-4 p-4">
        {items.map((item, index) => (
          <li key={index} className="border border-gray-300 p-4">
            <div className="flex justify-between">
              <h2 className="font-bold">{item.email}</h2>
              {/* <p>{item.email}</p> */}
            </div>
            <div className="flex justify-end mt-4 space-x-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleRequestGroup(item)}
              >
                REQUEST GROUP
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleSeeCalendar(item)}
              >
                SEE CALENDAR
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center my-4 space-x-4">
        <button  style={{  
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
          onClick={handleReturnGroupHome}>
          GROUP HOMEPAGE
        </button>
        <button  style={{  
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
          onClick={handleReturn}>
          RETURN
        </button>
        <button  style={{  
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
          onClick={handleReturnToStart}>
          RETURN TO START
        </button>
      </div>
    </div>
  );
};

export default Rec;
