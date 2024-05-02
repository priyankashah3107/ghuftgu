import React, { useState } from 'react'
import './addUser.css'
import { collection, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../../../../../firebase';
const AddUser = () => {
  const [name, setName] = useState('')
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  // console.log(name)


  const handleSearch = async(ev) => {
    ev.preventDefault();
     
    setIsLoading(true)
    setErrorMessage(null)

    // const formData = new FormData(ev.target)
    // const username = formData.get("username")

     try {

        const userRef = collection(db, "users");
      // Create a query against the collection.
          const q = query(userRef, where("username", "==", name));
          const querySnapShot =  await getDocs(q)
      
          if(querySnapShot.empty) {
            setUserData(null)
            setErrorMessage("No User found for the entered username");
          } else {
            const userDoc = querySnapShot.docs[0]
            setUserData(userDoc.data())
          }
      
     } catch (error) {
       console.log("Error While Fetching a user", error)
       setErrorMessage("An Error Occured While Searching for the user");
     } finally{
      setIsLoading(false)
     }
 
  }

  return (
    <>
     <div className="addUser">

      <form onSubmit={handleSearch}>
         <input type="text" placeholder='Search' name='username' className='text-black' 
         value={name} onChange={(e) => setName(e.target.value)}
         />
         
         <button className="btn btn-primary" disabled={isLoading}>{isLoading ? "Searching" : "Search"}
         </button>
      </form>

       {errorMessage && <p className='message error'>{errorMessage}</p>}

         { userData && (<div className="user">
            <div className="detail">
              <img src= { userData.avatar || "avatar.png"} alt="avatar" />
              {/* <span className='text-xl font-bold'>Priyanka</span> */}
              <span className='text-xl font-bold'>{userData.username}</span>
            </div>
            <button className="btn btn-accent">Add User</button>
          </div>
      )}

        


     </div>
    </>
  )
}

export default AddUser




