import React, { useState } from 'react'
import './chatList.css'
import AddUser from './adduser/AddUser'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
   <>
    <div className="chatList flex-1 overflow-y-auto ">
      <div className="search flex items-center justify-center p-[20px] gap-[20px]">
        <div className="searchBar flex-1 flex justify-center items-center  rounded-md gap-2">
          <img src="/search.svg" alt="search" className='size-6 ml-2' />
          <input type="text" placeholder='Search.......' className='text-black rounded-md bg-transparent p-2
           outline-none bg-white flex-1 ' />
        </div>
        <img src={addMode ? "/minus.svg" : "/plus.svg"} alt="plus" className='size-6 cursor-pointer bg-slate-200 rounded-md 
'
        onClick={() => setAddMode((prev) => !prev)} />
      </div>

      <div className="item flex justify-start items-center gap-[20px] pb-2 pl-6 mt-4 border-b-[2px] border-b-[#a8a8a8] cursor-pointer">
          <img src="/avatar.png" alt="avatar" />
           <div className="texts">
            <span>Priyanka</span>
            <p>Hello Universe</p>
           </div>
       </div>

       <div className="item flex justify-start items-center pb-2 gap-[20px] pl-6 mt-4 border-b-[2px] border-b-[#a8a8a8] cursor-pointer">
          <img src="/avatar.png" alt="avatar" />
           <div className="texts">
            <span>Priyanka</span>
            <p>Hello Universe</p>
           </div>
       </div>

        <div className="item flex justify-start  pb-2 items-center gap-[20px] pl-6 mt-4 border-b-[2px] border-b-[#a8a8a8] cursor-pointer">
          <img src="/avatar.png" alt="avatar" />
           <div className="texts">
            <span>Priyanka</span>
            <p>Hello Universe</p>
           </div>
       </div>
    
       <div className="item flex justify-start  pb-2 items-center gap-[20px] pl-6 mt-4 border-b-[2px] border-b-[#a8a8a8] cursor-pointer">
          <img src="/avatar.png" alt="avatar" />
           <div className="texts">
            <span>Priyanka</span>
            <p>Hello Universe</p>
           </div>
       </div>


       <div className="item flex justify-start  pb-2 items-center gap-[20px] pl-6 mt-4 border-b-[2px] border-b-[#a8a8a8] cursor-pointer">
          <img src="/avatar.png" alt="avatar" />
           <div className="texts">
            <span>Priyanka</span>
            <p>Hello Universe</p>
           </div>
       </div>

       <div className="item flex justify-start  pb-2 items-center gap-[20px] pl-6 mt-4 border-b-[2px] border-b-[#a8a8a8] cursor-pointer">
          <img src="/avatar.png" alt="avatar" />
           <div className="texts">
            <span>Priyanka</span>
            <p>Hello Universe</p>
           </div>
       </div>

       {addMode &&   <AddUser />}
    </div>
   </>
  )
}

export default ChatList