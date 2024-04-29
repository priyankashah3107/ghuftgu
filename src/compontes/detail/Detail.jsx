import React from 'react'
import { app } from '../../../firebase'
import './detail.css'
import { getAuth } from 'firebase/auth'
const auth = getAuth(app)

const Detail = () => {
  return (
    <>
    <div className='detail'>
      <div className="user">
        <img src="/avatar.png" alt="image" />
        <div >
          <span className='text-xl font-semibold mt-1'>Priyanka</span>
          <p className='pb-2 mt-1'>Live before die 🤞</p>
        </div>
      </div>
      
      <div className="info">

        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="/arrowup.svg" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="/arrowup.svg" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="/arrowdown.svg" alt="" />
          </div>
          
           <div className="photos flex flex-row  justify-between text-center items-center">
             <img src="nexflix.png" alt="" />
             <span>photo_2024.png</span>
              <img src="download.svg" alt=""  className='size-6'/>
           </div>

           <div className="photos flex flex-row  justify-between text-center items-center">
             <img src="nexflix.png" alt="" />
             <span>photo_2024.png</span>
              <img src="download.svg" alt=""  className='size-6'/>
           </div>

           <div className="photos flex flex-row  justify-between text-center items-center">
             <img src="nexflix.png" alt="" />
             <span>photo_2024.png</span>
              <img src="download.svg" alt=""  className='size-6'/>
           </div>

           <div className="photos flex flex-row  justify-between text-center items-center">
             <img src="nexflix.png" alt="" />
             <span>photo_2024.png</span>
              <img src="download.svg" alt=""  className='size-6'/>
           </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="/arrowup.svg" alt="" />
          </div>
        </div>
    
         <div className='flex flex-col gap-4'>
         <button className="btn btn-error">Block User</button>
         <button className="btn btn-active btn-primary" onClick={()=> auth.signOut()}>Logout</button>

         </div>

      </div>
    </div>
    </>
  )
}

export default Detail