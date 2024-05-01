import React from 'react'
import './userInfo.css'
import { useUserStore } from '../../../../userStore'
const UserInfo = () => {

  const {currentUser} = useUserStore()

  return (
    <> 
     <div className="userInfo ">
      <div className="user">
        <img src= { currentUser.avatar || "/avatar.png" }alt="img" />
        {/* <h2 className='text-2xl font-bold'>Priyanka</h2> */}
        <h2 className='text-2xl font-bold'>{currentUser.username}</h2>
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