import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SigninInvite = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

      var list = null;
      const api = ' https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1';
      var p = api + '/list';
      axios.post(p, {'email': user.email}).then(function (response) {
      console.log(response);
      list = response['data']['body']
      console.log(list);
      }).catch(function(error) {
        console.log(error);
      });
      navigate("/list", {state:{reqs: list}} ); 
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default SigninInvite;
