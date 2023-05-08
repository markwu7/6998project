import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import axios from 'axios';

const List = () => {
    const { user } = UserAuth();
    const items = [];
    const navigate = useNavigate();
    const location = useLocation();
    var reqs = location.state.reqs;

    for (var i = 0; i < reqs.length; i++) {
        items.push({sender: reqs[i]['sender'], email: reqs[i]['receive']});
    }

    const handleSeeCalendar = (item) => {
        navigate(`/student/calendar?name=${''}&email=${encodeURIComponent(item.sender)}`, { state: { from: location.pathname } });
    };

    const handleRequestGroup = (item) => {
        const api = ' https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1';
        var p = api + '/acceptreq';

        axios.post(p, {'sender': item.sender, "receive": user.email, "answer": "yes"}).then(function (response) {
            console.log(response);
          }).catch(function(error) {
            console.log(error);
          }); 
          alert("You've Successfully Joined ".concat(item.email, '\'s Project Group!'));
    };

    const handleReturnToStart = () => {
        navigate('/');
    };

    return (
        <div>
          <h1 className='text-center text-3xl font-bold py-8'>Group Request List</h1>
          <ul className="space-y-4 p-4">
            {items.map((item, index) => (
              <li key={index} className="border border-gray-300 p-4">
                <div className="flex justify-between">
                  <h2 className="font-bold">{item.sender}</h2>
                  {/* <p>{item.email}</p> */}
                </div>
                <div className="flex justify-end mt-4 space-x-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleRequestGroup(item)}
                  >
                    ACCEPT REQUEST
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
              onClick={handleReturnToStart}>
              RETURN TO START
            </button>
          </div>
        </div>
      );

};

export default List;