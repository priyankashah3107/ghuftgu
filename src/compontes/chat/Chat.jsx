import React from 'react'
import './chat.css'
const Chat = () => {
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


      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  )
}

export default Chat