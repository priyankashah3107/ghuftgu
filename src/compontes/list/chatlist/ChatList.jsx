import React, { useState } from 'react'
// import './ChatList.css'
const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
   <>
    <div className="chatList flex">
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
    </div>
   </>
  )
}

export default ChatList