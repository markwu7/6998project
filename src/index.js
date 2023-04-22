import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Amplify, API} from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
Amplify.configure({
  aws_cloud_logic_custom: [
    {
      name: 'projectapp', // (required) - API Name (This name is used used in the client app to identify the API - API.get('your-api-name', '/path'))
      endpoint: 'https://dw9ehzs68l.execute-api.us-east-1.amazonaws.com/stage1', // (required) -API Gateway URL + environment
      region: 'us-east-1' // (required) - API Gateway region
    }
  ]
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
