// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';


const AuthContext = createContext();

export default AuthContext; 

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  // Load token and user details from local storage when the app loads
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('userDetails');
    if (token) {
      setAuthToken(token);
    }
    if (user) {
      setUserDetails(JSON.parse(user));
    }
  }, []);

  // Save token and user details to local storage when they change
  useEffect(() => {
    if (authToken) {
      localStorage.setItem('authToken', authToken);
    } else {
      localStorage.removeItem('authToken');
    }

    if (userDetails) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
    } else {
      localStorage.removeItem('userDetails');
    }
  }, [authToken, userDetails]);

  const logout = () => {
    setAuthToken(null);
    setUserDetails(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, userDetails, setUserDetails, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

