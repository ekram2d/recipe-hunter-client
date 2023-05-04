
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const createUser = ((email, password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password);
      }
      )
      const signIn = (email, password) => {
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password);
      }
      const Logout = () => {
            setLoading(true)
            return signOut(auth)

      }

    
      useEffect(() => {

            const unsubcribe = onAuthStateChanged(auth, currentuser => {
                  setUser(currentuser);
                  setLoading(false);

            })
            return () => {
                  return unsubcribe();
            }
      }, [])
      const authInfo = {

            user,
            createUser,
            signIn,
            Logout,
            loading,


      };
      return (

            <AuthContext.Provider value={authInfo}>
                  {children}

            </AuthContext.Provider>
      );
};



export default AuthProvider;