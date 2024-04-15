import { createContext, useContext } from "react";
import { app } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
const FireBaseContext = createContext(null)

const auth = getAuth(app)

export const useFirbase = () =>  useContext(FireBaseContext);


const createUserEmailPass = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

// SingIn
const SignWithEmailPass = (email, password) => {
  return signInWithEmailAndPassword(email, password)
}

const FirebaseAuth = ({children}) => {
  return (
    <FireBaseContext.Provider value={{createUserEmailPass, SignWithEmailPass }}>
      {children}
    </FireBaseContext.Provider>
  )
}

export default FirebaseAuth