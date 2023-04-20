import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/calendar");
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      setToken(token);
      // Validate email domain
      const emailDomain = result.user.email.split('@')[1];
      const domainRegex = /columbia\.edu$/i; // Regular expression for "columbia.edu" domain
      if (!domainRegex.test(emailDomain)) {
        // If email domain is not "columbia.edu", sign out the user and display an error message
        signOut(auth).then(() => {
          alert('Only "columbia.edu" email addresses are allowed for registration.');
        });
      }
    })
    .catch((error) => {
      // Handle sign-in error
      console.error('Google sign-in error:', error);
    });
  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user,token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
