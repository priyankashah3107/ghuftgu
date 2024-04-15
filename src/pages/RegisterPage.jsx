import React from 'react'

const RegisterPage = () => {
  return (
    <div className='text-black '>
    <form action="">
     

     
     <h4 className="text-white text-[40px] font-normal font-['Lucida Calligraphy']  "> Create an Account</h4>
      <div className='flex flex-row items-center gap-4 '>
      <div className='w-16 h-16 bg-zinc-800 rounded-lg text-4xl text-center items-center justify-center pt-3 text-white mt-2'>A  </div>
      <a href="#" className='underline text-white'>Upload an avatar</a>
      </div>
     <div className="flex flex-col gap-8 mt-10">

     <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
     <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
     <input type="password" placeholder="Email password" className="input input-bordered w-full max-w-xs" />
     <button className="btn btn-primary w-full max-w-xs">Sign In</button>

     </div>
    </form>
 </div>
  )
}

export default RegisterPage