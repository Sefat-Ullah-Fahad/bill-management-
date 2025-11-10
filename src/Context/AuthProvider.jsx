import React, {  useEffect, useState } from "react";
import {
  
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";
// import { AuthContext } from "./AuthContext";

// AuthContext is imported from separate file


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Register User
  const registerUser = (email, password, name, photo) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    });
  };

  // Login User
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Observe User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    googleLogin,
    registerUser,
    loginUser,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
