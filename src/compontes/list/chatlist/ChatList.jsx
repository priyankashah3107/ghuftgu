import React, { useEffect, useState } from 'react'
import './chatList.css'
import AddUser from './adduser/AddUser'
import { useUserStore } from '../../../../userStore'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../../../../firebase'

const ChatList = () => {
  const [addMode, setAddMode] = useState(false)
  const[chats, setChats] = useState([])

  const {currentUser} = useUserStore()

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id),  async(res) => {
      // console.log("Current data: ", doc.data());
      const items = res.data().chats;
      const promises = items.map(async (items) => {
        const userDocRef = doc(db, "users", items.receiverId);
        const userDocSnap = await getDoc(userDocRef)

        const user = userDocSnap.data()

        return {...items, user}
      })

      const chatData = await Promise.all(promises)
      setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt))
  });   
   
  return () => {
    unSub()
  }

  }, [currentUser.id])

  console.log(chats)

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


          {chats.map((chat) => (

           <div className="item flex justify-start items-center gap-[20px] pb-2 pl-6 mt-4 border-b-[2px] border-b-[#a8a8a8] cursor-pointer" key={chat.chatId}>
           <img src={chat.user.avatar || "/avatar.png"} alt="avatar" className='size-[50px]' />
           <div className="texts">
          <span>{chat.user.username}</span>
          {/* <p>Hello Universe</p> */}
          <p>{chat.lastMessage}</p>
         </div>
         </div>
          ))} 
     


       {addMode &&   <AddUser />}
    </div>
   </>
  )
}

export default ChatList