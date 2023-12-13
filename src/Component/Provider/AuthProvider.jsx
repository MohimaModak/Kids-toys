import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);

  const signUpUser = (email, password) => {
    setloading(true);
   return createUserWithEmailAndPassword(auth, email, password);
  };
  const singInUser = (email, password) => {
    setloading(true);
   return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const observer = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      console.log("current user", currentUser);
      setloading(false);
    });
    return observer();
  }, []);

  const logOut = () => {
    signOut(auth);
  };

  const valueInfo = { user, loading, signUpUser, singInUser, signOut, logOut };
  return (
    <AuthContext.Provider value={valueInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
