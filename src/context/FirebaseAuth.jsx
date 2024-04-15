import { createContext, useContext } from "react";
import { app } from "../../firebase";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth"
const FireBaseContext = createContext(null)

const auth = getAuth(app)

export const useFirbase = () =>  useContext(FireBaseContext);


const createUserEmailPass = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

const FirebaseAuth = ({children}) => {
  return (
    <FireBaseContext.Provider value={{createUserEmailPass }}>
      {children}
    </FireBaseContext.Provider>
  )
}

export default FirebaseAuth