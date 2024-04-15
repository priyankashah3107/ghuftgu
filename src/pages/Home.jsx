import React from 'react'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

const Home = () => {
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