import React from 'react'
import './addUser.css'
const AddUser = () => {
  return (
    <>
     <div className="addUser">

      <form>
         <input type="text" placeholder='Search' name='Username' className='text-black' />
         <button className="btn btn-primary">Search</button>
      </form>

      <div className="user">
        <div className="detail">
          <img src="avatar.png" alt="avatar" />
          <span className='text-xl font-bold'> Priyanka</span>
        </div>
        <button className="btn btn-accent">Add User</button>

      </div>
     </div>
    </>
  )
}

export default AddUser