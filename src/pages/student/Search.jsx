import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import axios from 'axios';

const Search = () => {

  const { user } = UserAuth();

  const api = ' https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1';
  var p = api + '/recommendations';
  var recs = null;
  var search = null;
  axios.post(p, {'email': user.email}).then(function (response) {
    console.log(response);
    recs = response['data']['body']
    console.log(recs);
  }).catch(function(error) {
    console.log(error);
  }); 

  p = api + '/search';
  axios.post(p, {'email': user.email}).then(function (response) {
    console.log(response);
    search = response['data']['body']
  }).catch(function(error) {
    console.log(error);
  });

  const navigate = useNavigate();
  const handleReturn = () => {
    navigate('/');
  };

  const handleGroupPage = () => {
    var list = null;
    var p = api + '/list';
    axios.post(p, {'email': user.email}).then(function (response) {
    console.log(response);
    list = response['data']['body']
    console.log(list);
    }).catch(function(error) {
      console.log(error);
    });
    if (list)
      navigate('/list', {state:{reqs:list}});
    else 
      alert("No Requests Available");
  };

  const handleWholeClass = () => {
    navigate('/student/whole', {state:{s:search}});
  }

  const handleRec = () => {
    console.log(recs);
    navigate('/student/rec', {state:{recommend:recs}});
  }

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Search By </h1>
      <div className="flex justify-center space-x-4">
        {/* Button 1: Black background, white text */}
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
          onClick={handleWholeClass}
        >
          WHOLE CLASS
        </button>
        {/* Button 2: White background, black text */}
        <button
          style={{  
            backgroundColor: '#FFFFFF',
            border: 'none',
            color: '#000000',
            fontSize: '16px',
            padding: '8px 24px',
            margin: '5px',
            borderRadius: '14px',
            borderStyle: 'solid',
            width: '205px',
            height: '55px'}}
          className="px-4 py-2 rounded-md"
          onClick={handleRec}
        >
          RECOMMENDATIONS
        </button>
        {/* Button 3: Black background, white text */}
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
          onClick={handleGroupPage}
        >
          GROUP REQUESTS
        </button>
      </div>
      <div className="flex justify-center">
        {/* Button 4: White background, black text */}
        <button
          style={{  
            backgroundColor: '#FFFFFF',
            border: 'none',
            color: '#000000',
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
          RETURN TO START
        </button>
      </div>
    </div>
  );
};

export default Search;
