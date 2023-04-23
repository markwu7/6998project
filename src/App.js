import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Professor from './pages/professor/Professor';
import Success from './pages/professor/suceesfulPage';
import Invite from './pages/professor/Invite';
import Student from './pages/student/Student';
import Profile from './pages/student/CreateProfile';
import Search from './pages/student/Search';
import Group from './pages/student/Group';
import axios from 'axios';

function App() {
  const api = ' https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1';
  var p = api + '/profile';
  axios.get(p, {'email': 'rg3398@columbia.edu', 'password': 'pword',
                'first_name': "ryan", 'last_name': 'grossmann'}).then(function (response) {
    console.log(response);
  }).catch(function(error) {
    console.log(error)
  });
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/account'
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
          <Route
            path='/professor'
            element={
              <Protected>
                <Professor />
              </Protected>
            }
          />
          <Route
            path='/professor/success'
            element={
              <Protected>
                <Success />
              </Protected>
            }
          />
           <Route
            path='/professor/invite'
            element={
              <Protected>
                <Invite />
              </Protected>
            }
          />
          <Route
            path='/student'
            element={
              <Protected>
                <Student />
              </Protected>
            }
          />
          <Route
            path='/student/createprofile'
            element={
              <Protected>
                <Profile />
              </Protected>
            }
          />
          <Route
            path='/student/search'
            element={
              <Protected>
                <Search />
              </Protected>
            }
          />
          <Route
            path='/student/group'
            element={
              <Protected>
                <Group />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
