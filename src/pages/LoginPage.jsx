import React, { useState } from 'react'
import { useFirbase } from '../context/FirebaseAuth'
import { redirect, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginPage = () => {
  const firebase = useFirbase()
  console.log(firebase)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(ev) => {
       ev.preventDefault()
        toast.success("hello")
       if(!email || !password) {
        alert("Wrong Credentials")
        return
       } 

       try {
        const res = await firebase.SignWithEmailPass(email, password)
        console.log("Successfully Logged In:", res);
        alert("Welcome back!");
        // navigate('/userchats')

        
       }  catch (error) {
        let errorMessage = "Login failed. Please try again.";
       
        if (error.code === 'auth/wrong-password') {
          errorMessage = "Incorrect password.";
        } else if (error.code === 'auth/user-not-found') {
          errorMessage = "Email not found. Please check and try again.";
        }
        alert(errorMessage);
        console.error("Error in Login:", error);
      }

  }
  


  return (
    <div className='text-black '>
       <form onSubmit={handleSubmit}>
        

        
        <h4 className="text-white text-[40px] font-normal font-['Lucida Calligraphy'] mt-3"> Welcome back,</h4>

        <div className="flex flex-col gap-8">
        <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs mt-4" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}/>

        <input type="password" placeholder="Email password" className="input input-bordered w-full max-w-xs" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button className="btn btn-primary w-full max-w-xs" type='submit'>Sign In</button>

        </div>
       </form>
    </div>
  )
}

export default LoginPage