
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);
      // const  user={
            
      // }
      const createUser = ((email, password) => {
            // console.log(email, password, 'eeeeeeeeeee');
            return createUserWithEmailAndPassword(auth, email, password);
      }
      )
      const signIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      }
      const Logout = () => {
            return signOut(auth)

      }

      const authInfo = {

            user,
            createUser,
            signIn,
            Logout,


      };
      useEffect(() => {

            const unsubcribe = onAuthStateChanged(auth, currentuser => {
                  setUser(currentuser);

            })
            return () => {
                  return unsubcribe();
            }
      }, [])
      console.log("user",user);
      return (

            <AuthContext.Provider value={authInfo}>
                  {children}

            </AuthContext.Provider>
      );
};



export default AuthProvider;