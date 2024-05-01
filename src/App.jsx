import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserChats from './compontes/UserChats'
import List from './compontes/list/List'
import { useNavigate } from 'react-router-dom'
import Notification from './compontes/notification/Notification'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../firebase'
import { useUserStore } from '../userStore'
import Chat from './compontes/chat/Chat'
import Detail from './compontes/detail/Detail'
const auth = getAuth(app)
const App = () => {
  // const user = true;
  // const user = false;
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (user) {
  //     navigate('/userchats');
  //   }
  // }, [user, navigate]);

// React firebase to stroe user after user authentication

// stateManagement with zudstand
const {currentUser, isLoding, fetchUserInfo} = useUserStore()

  // useEffect(() => {
  //   const authCh = onAuthStateChanged(auth, (user) => {

  //     // console.log(user.uid)
  //     fetchUserInfo(user.uid)
  //   }, (errr) => {
  //     console.error("Error in onAuthStateChanged", errr)
  //   })

  //   return () => {
  //     authCh()
  //   }
  // }, [fetchUserInfo, currentUser, auth])



  useEffect(() => {
    const authCh = onAuthStateChanged(auth, (user) => {
      if (user) { 
        fetchUserInfo(user.uid);
      }
    }, (error) => {
      console.error("Error in onAuthStateChanged", error);
    });

    return () => authCh();
  }, [fetchUserInfo], currentUser,auth);
  

  console.log(currentUser)


// if(isLoding) return <div className='load'>Loading.....</div>

  return (

    <>
      
      <div className='container'>
      
      
      
     {/* <Routes>

      <Route  path={'/'} element={currentUser ?  <UserChats/>: <Home/>  } />  
     
      <Route path={'/signin'} element={<LoginPage />} />
      <Route  path={'/signup'} element={<RegisterPage />} />
      
      

     </Routes> */}

     {currentUser ? (
      <>
      <List />
      <Chat />
      <Detail />
      </>
     ): (
      <Home />
     )}
     
     <Notification />
     </div> 
    </>
    
  )
}

export default App