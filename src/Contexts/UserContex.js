import React, { createContext, useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const creteUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const LogInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const LogOut = () => {
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };

  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unSubcribe();
    };
  }, []);

  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const authInfo = {
    user,
    creteUser,
    LogInUser,
    LogOut,
    updateUser,
    googleLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
