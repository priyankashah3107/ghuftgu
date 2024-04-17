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
            <img src="arrowup.svg" alt="arrowup" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="arrowup.svg" alt="arrowdup" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="arrowdown.svg" alt="arrowdown" />
          </div>

          <div className="photos flex flex-row justify-center items-center text-center ">
            <div className="photoItems ">
              <img src="nexflix.png" alt="img" className=''/>
            </div>
            <span className='p-2 '>photo_2024.png</span>
            <img src="download.svg" alt="download" className='w-7 h-7  ' />
          </div>
          {/* <img src="download.svg" alt="download" className='' /> */}
          
         

        </div>



          
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="arrowup.svg" alt="arrowdup" />
          </div>
        </div>
        <div className='button flex flex-col mt-16 gap-4' >
        <button className="btn btn-error">Block User</button>
        <button className="btn btn-active btn-primary">Logout</button>
        </div>
      

      </div>
    </div>
    </>
  )
}

export default Detail