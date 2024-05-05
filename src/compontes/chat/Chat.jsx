import React, { useEffect, useState, useRef } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../firebase';

const Chat = () => {
  const[chat, setChat] = useState('')
  const[text, setText] = useState('')
  const[open , setOpen] = useState(false)
  const endRef = useRef(null); 


  useEffect(() => {
   
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("endRef.current is not yet available or is not a DOM element");
    }
  }, []);


  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", "pdxhnrgRcGYHmxoLYled"), (res) => {
       setChat(res.data())
    })

    return () => {
      unSub();
    }
  }, [])

  console.log(chat)

  const handleEmoji = (e) => {
    // console.log(e)
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }
   
  // console.log(text)

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

        <div className="message">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugit hic blanditiis accusantium autem, necessitatibus reprehenderit.</p>
            <span>1 min ago</span>
          </div>
        </div>

         <div className="message our">
          
          <div className="texts ">
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugit hic blanditiis accusantium autem, necessitatibus reprehenderit.</p>
            <span>1 min ago</span>
          </div>
        </div>  

          <div className="message">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugit hic blanditiis accusantium autem, necessitatibus reprehenderit.</p>
            <span>1 min ago</span>
          </div>
        </div> 
            
        <div className="message our">
          
          <div className="texts">
          <img src="nexflix.png" alt="image" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugit hic blanditiis accusantium autem, necessitatibus reprehenderit.</p>
            <span>1 min ago</span>
          </div>
        </div> 
         
        <div className="message">
          <img src="avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam fugit hic blanditiis accusantium autem, necessitatibus reprehenderit.</p>
            <span>1 min ago</span>
          </div>
        </div> 
 
       
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
        <button className="sendButton cursor-pointer px-7 py-2 rounded-md bg-blue-400  ">Send</button>
      </div>
    </div>
  )
}

export default Chat