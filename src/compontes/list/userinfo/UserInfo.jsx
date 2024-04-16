import React from 'react'
import './userInfo.css'
const UserInfo = () => {
  return (
    <> 
     <div className="userInfo ">
      <div className="user">
        <img src="/avatar.png" alt="img" />
        <h2 className='text-2xl font-bold'>Priyanka</h2>
      </div>

       <div className="icons size-9 flex justify-center items-center ">
        <img src="/more.svg" alt="more"  />
        <img src="/video.svg" alt="video" />
        <img src="/edit.svg" alt="edit" />
       </div>
     </div>
    </>
  )
}

export default UserInfo