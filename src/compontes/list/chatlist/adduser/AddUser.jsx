import React, { useState } from 'react'
import './addUser.css'
import { collection, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../../../../../firebase';
const AddUser = () => {
  const [name, setName] = useState('')
  console.log(name)


  const handleSearch = async(ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target)
    const username = formData.get("username")

     try {

        const userRef = collection(db, "users");
      // Create a query against the collection.
          const q = query(userRef, where("username", "==", username));
          const querySnapShot =  await getDocs(q)
      
          if(!querySnapShot) {
            setName(querySnapShot.docs[0].data())
          } else {
            setName('')
          }
      
     } catch (error) {
       console.log(error)
     }
 
  }

  return (
    <>
     <div className="addUser">

      <form onSubmit={handleSearch}>
         <input type="text" placeholder='Search' name='username' className='text-black' 
         value={name} onChange={(e) => setName(e.target.value)}
         />
         
         <button className="btn btn-primary">Search</button>
      </form>

      
         { name && <div className="user">
            <div className="detail">
              <img src= "avatar.png" alt="avatar" />
              <span className='text-xl font-bold'>Kshetez</span>
            </div>
            <button className="btn btn-accent">Add User</button>
          </div>
      }

        {/* {!user && <p className="message">No user found for the entered username.</p>} */}


     </div>
    </>
  )
}

export default AddUser











