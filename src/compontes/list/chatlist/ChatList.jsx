import React, { useState } from 'react'
import './chatList.css'
const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
   <>
    <div className="chatList ">
      <div className="search flex items-center justify-center p-[20px] gap-[20px]">
        <div className="searchBar flex-1 flex justify-center items-center bg-slate-200 rounded-md gap-2">
          <img src="/search.svg" alt="search" className='size-7' />
          <input type="text" placeholder='Search.......' className='text-black rounded-md bg-transparent 
           outline-none bg-white flex-1 ' />
        </div>
        <img src={addMode ? "/minus.svg" : "/plus.svg"} alt="plus" className='size-8 cursor-pointer bg-slate-200 rounded-md 
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

    </div>
   </>
  )
}

export default ChatList