import React, { useEffect } from 'react'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import { useNavigate } from 'react-router-dom'
import { useFirbase } from '../context/FirebaseAuth'

// const navigate = useNavigate()
const firebase = useFirbase()


const Home = () => {

//   useEffect(() => {
//     if(firebase. isLoggedIn) {
//       navigate('/userchats')
//     }
// }, [firebase,navigate])

  return (
    <>
     <div className='flex flex-row justify-center items-center text-center space-x-72'>

      <LoginPage />
        
      <RegisterPage />
     </div>
    </>
  )
}

export default Home