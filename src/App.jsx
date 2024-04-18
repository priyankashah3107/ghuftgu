import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserChats from './compontes/UserChats'
import { useNavigate } from 'react-router-dom'
import Notification from './compontes/notification/Notification'
const App = () => {
  const user = false;
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (user) {
  //     navigate('/userchats');
  //   }
  // }, [user, navigate]);

  return (

    <>
      
      <div className='container  '>
      
      
      
     <Routes>

      <Route  path={'/'} element={user ?  <UserChats/>: <Home/>  } />  
       {/* user not loggedIn hai to UserChats per gya hai */}
      {/* <Route path={'/'} element={<Home />} /> */}
      <Route path={'/signin'} element={<LoginPage />} />
      <Route  path={'/signup'} element={<RegisterPage />} />
      
      {/* <Route  path='/userchats' element={<UserChats />}/> */}

     </Routes>
     
     <Notification />
     </div> 
    </>
    
  )
}

export default App