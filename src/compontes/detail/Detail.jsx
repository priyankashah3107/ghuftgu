import React from 'react'
import './detail.css'
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
        </div>

        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="/arrowup.svg" alt="" />
          </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default Detail