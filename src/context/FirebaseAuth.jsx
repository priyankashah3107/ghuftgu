import { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth"
import { set } from "firebase/database";

const FireBaseContext = createContext(null)

const auth = getAuth(app)

export const useFirbase = () =>  useContext(FireBaseContext);


// const createUserEmailPass = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password)
// }

// // SingIn
// const SignWithEmailPass = (email, password) => {
//   return signInWithEmailAndPassword(auth,email, password)
// }



const FirebaseAuth = ({children}) => {

  const [user, setUser] = useState('')
  useEffect(() =>  {
       onAuthStateChanged(auth, user => {
          if(user) setUser(user)
          else setUser(null)
       })
  }, [] )
  
const createUserEmailPass = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

// SingIn
const SignWithEmailPass = (email, password) => {
  return signInWithEmailAndPassword(auth,email, password)
}


const isLoggedIn = user ? true : false


  return (
    <FireBaseContext.Provider value={{createUserEmailPass, SignWithEmailPass, isLoggedIn}}>
      {children}
      
    </FireBaseContext.Provider>
  )
}

export default FirebaseAuth