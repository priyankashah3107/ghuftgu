import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth"
import { set } from "firebase/database";

const FireBaseContext = createContext(null)

const auth = getAuth(app)

export const useFirbase = () =>  useContext(FireBaseContext);


const createUserEmailPass = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

// SingIn
const SignWithEmailPass = (email, password) => {
  return signInWithEmailAndPassword(auth,email, password)
}

// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   return () => unsubscribe();
// }, []);



const FirebaseAuth = ({children}) => {




  return (
    <FireBaseContext.Provider value={{createUserEmailPass, SignWithEmailPass}}>
      {children}
      
    </FireBaseContext.Provider>
  )
}

export default FirebaseAuth