import React, { useEffect, useState, useRef } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react';
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useChatStore } from '../../../ChatStore';
import { useUserStore } from '../../../userStore';
const Chat = () => {
  const[chat, setChat] = useState('')
  const[text, setText] = useState('')
  const[open , setOpen] = useState(false)
  const endRef = useRef(null); 
   
   const {currentUser} = useUserStore()
   const {chatId, user} = useChatStore()

  useEffect(() => {
   
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("endRef.current is not yet available or is not a DOM element");
    }
  }, []);


  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
       setChat(res.data())
    })

    return () => {
      unSub();
    }
  }, [chatId])

  console.log(chat)

  const handleEmoji = (e) => {
    // console.log(e)
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }
   
  // console.log(text)


  const handleSend = async () => {
     if(text === '') return;
      
      
     try {

      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text,
          createdAt: new Date(),
        }),
       });
      
       const userIds = [currentUser.id, user.id];

       userIds.forEach(async (id) => {
        const userChatsRef = doc(db, "userchats", id);
        const userChatsSnapShot = await getDoc(userChatsRef);

        if(userChatsSnapShot.exists()) {
          const userChatsData = userChatsSnapShot.data();

          const  chatIndex = userChatsData.chats.findIndex((chat) => chat.chatId === chatId);

          userChatsData.chats[chatIndex].lastMessage = text;
          userChatsData.chats[chatIndex].isSeen = id === currentUser.id ? true : false;
          userChatsData.chats[chatIndex].updatedAt = Date.now();


          await updateDoc(userChatsRef, {
            chats: userChatsData.chats,
          })
        }
       })

      
     } catch (error) {
       console.log(error)
     }
  }

  return (
    <div className='chatt'>
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="avatar" />
          <div className="texts">
            <span>Priyanka</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="icons ">
           <img src="/phone.svg" alt="phone" />   
           <img src="/video.svg" alt="video" />
           <img src="info.svg" alt="info" />
        </div>
      </div>


      <div className="center">
  

          {/* <div className="message">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugit hic blanditiis accusantium autem, necessitatibus reprehenderit.</p>
            <span>1 min ago</span>
          </div>
        </div>  */}
            

       {  chat?.messages?.map((message) => (
        <div className="message our" key={message?.createAt}> 
        <div className="texts">
        { message.img && <img src={message.img} alt="image" />}
          <p>{message.text}</p>
          {/* <span>1 min ago</span> */}
        </div>
      </div>
       )) }
         
     
 
       
       <div ref={endRef}></div>

      </div>

      <div className="bottom">

        <div className="icons">
          <img src="/img.svg" alt="img" className='pri'/>
          <img src="/camera.svg" alt="camera" />
          <img src="/mic.svg" alt="mmic" />
        </div>

        <input type="text" placeholder='Type a message......' className='text-black p-3 rounded-md w-1/2 border-none outline-none'
        value={text} 
        onChange={(e) => setText(e.target.value)} />

        <div className="emoji relative">
          <img src="/emoji.svg" alt="emoji"  
           onClick={() => setOpen((prev) => !prev)}/>

           <div className="picker absolute bottom-[50px] left-0">
           <EmojiPicker  open={open} onEmojiClick={handleEmoji} />
           </div>
          
        </div>
        <button className="sendButton cursor-pointer px-7 py-2 rounded-md bg-blue-400 hover:bg-blue-700 "
        onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Chat