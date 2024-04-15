import React from 'react'

const LoginPage = () => {
  return (
    <div className='text-white  '>
       <form action="">
        

        
        <h4 className="text-white text-[40px] font-normal font-['Lucida Calligraphy']"> Welcome back,</h4>
        <div className="flex flex-col gap-8">
        <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
        <input type="password" placeholder="Email password" className="input input-bordered w-full max-w-xs" />
        <button className="btn btn-primary w-full max-w-xs">Sign In</button>

        </div>
       </form>
    </div>
  )
}

export default LoginPage