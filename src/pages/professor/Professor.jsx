import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserAuth } from '../../context/AuthContext';
import { useRef} from 'react';


const Professor = () => {
  // initialize the input field variables for class name and group size
  const inputRef = useRef('');
  const inputRef2 = useRef(0);
  // get the users email
  const { user } = UserAuth();
  // create the professors profile in dynamodb
  const api = ' https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1';
  var p = api + '/admin';
  axios.post(p, {'email': user.email}).then(function (response) {
    console.log(response);
  }).catch(function(error) {
    console.log(error);
  });
  const navigate = useNavigate();

  const handleNextClick = () => {
    // get class name and size
    var name = inputRef.current.value;
    var size = inputRef2.current.value;
    // check if values are valid
    if (name != '' && size > 0){
      console.log(name);
      console.log(size);
      p = api + '/class';
      axios.post(p, {'name': name, 'professor_email': user.email,
                max_group_size: size}).then(function (response) {
        console.log(response);
        console.log(response.body)
      }).catch(function(error) {
        console.log(error);
      });
      navigate('/professor/success', {state:{classname:name, groupsize:size}});

    } 
    else {
      alert('Please input a valid class name and group size.');
    }
  };

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Create Class</h1>
      <form className='flex flex-col items-center'>
        <div>
          <input
            ref={inputRef}
            type='text'
            placeholder='Class Name'
            className='w-64 p-2 my-4'
            style={{
              backgroundColor: "#FFFFFF",
              border: "none",
              color: "#000000",
              fontSize: "16px",
              padding: "12px 24px",
              margin: "5px",
              borderRadius: "14px",
              borderStyle: "solid",
            }}
          />
        </div>
        <br />
        <div>
          <input
            ref={inputRef2}
            type='number'
            placeholder='Max Group Size'
            className='w-64 p-2 my-4'
            style={{
              backgroundColor: "#FFFFFF",
              border: "none",
              color: "#000000",
              fontSize: "16px",
              padding: "12px 24px",
              margin: "5px",
              borderRadius: "14px",
              borderStyle: "solid",
            }}
          />
        </div>
        <br />
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded'
          style={{
            backgroundColor: "#000000",
            border: "none",
            color: "#FFFFFF",
            fontSize: "16px",
            padding: "8px 24px",
            margin: "5px",
            borderRadius: "14px",
            borderStyle: "solid",
            width:"135px"
          }}
          onClick={handleNextClick}
        >
          NEXT
        </button>
      </form>
    </div>
  )
}

export default Professor
