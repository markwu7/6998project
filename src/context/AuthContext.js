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

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
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
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
