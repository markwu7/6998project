// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUFhMdzrJN65y2ni6_m1A82JnTU7mDWY0",
  authDomain: "partner-finder-app.firebaseapp.com",
  projectId: "partner-finder-app",
  storageBucket: "partner-finder-app.appspot.com",
  messagingSenderId: "428290993442",
  appId: "1:428290993442:web:def630e5250cd29820897b",
  clientId: "428290993442-34pvh8c17kqlqce4cssl0fn6anchnf1u.apps.googleusercontent.com",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
