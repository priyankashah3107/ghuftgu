import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import UserChats from './compontes/UserChats'

const App = () => {
  return (

    <>
      
      <div className='container '>

      
     <Routes>
      <Route  path={'/'} element={<Home />} />
      <Route path={'/signin'} element={<LoginPage />} />
      <Route  path={'/signup'} element={<RegisterPage />} />
      <Route  path='/userchats' element={<UserChats />}/>
      
     </Routes>
     </div> 
    </>
    
  )
}

export default App