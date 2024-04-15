import React, { useState } from 'react'
import { useFirbase } from '../context/FirebaseAuth'
const RegisterPage = () => {
  
  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const [name, setName] = useState('')

  const firebase = useFirbase()
  console.log(firebase)

  const handleSubmit = async(e) => {
     e.preventDefault()
     if(!name || !email || !password) {
      alert("Please Fill all the feild")
      return
     }



    try {
      const result = await createUserEmailPass(email, password);
      console.log('Registration successful:', result);
      alert('Successfully registered!');
      
    } catch (error) {
      alert('Registration failed. Please try again.');
        console.log("Error occur during Registration", error)
    }

    //  console.log("signUp to the User")
    // const result =  await firebase.createUserEmailPass(email, password)
    // console.log("Registration Successfully", result)
    //  alert("successfully registred")

  }

  return (
    <div className='text-black '>
    <form onSubmit={handleSubmit}>
     
     <h4 className="text-white text-[40px] font-normal font-['Lucida Calligraphy']  "> Create an Account</h4>
      <div className='flex flex-row items-center gap-4 '>
      <div className='w-16 h-16 bg-zinc-800 rounded-lg text-4xl text-center items-center justify-center pt-3 text-white mt-2'>A  </div>
      <a href="#" className='underline text-white'>Upload an avatar</a>
      </div>
     <div className="flex flex-col gap-8 mt-10">

     <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs"
     value={name} onChange={(e) => setName(e.target.value)} />

     <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" 
     value={email} onChange={(e) => setEmail(e.target.value)}/>
     <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
     />
     <button className="btn btn-primary w-full max-w-xs" type='submit'>Sign Up</button>

     </div>
    </form>
 </div>
  )
}

export default RegisterPage