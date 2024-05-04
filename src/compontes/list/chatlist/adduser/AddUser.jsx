import React, { useState } from 'react'
import './addUser.css'
import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../../../../../firebase';
import { useUserStore } from '../../../../../userStore';

const AddUser = () => {
 
  const [name, setName] = useState('')
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

   const {currentUser} = useUserStore
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

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

     // Access the chat ID after successful creation
     const chatId = newChatRef.id;

     // Update user chats references with the chat ID
     await updateDoc(doc(userChatsRef, userData.id), {
       chats: arrayUnion({
         chatId,
         lastMessage: "",
         receiverId: currentUser.id,
         updatedAt: Date.now(),
       }),
     });
 
     await updateDoc(doc(userChatsRef, currentUser.id), {
       chats: arrayUnion({
         chatId,
         lastMessage: "",
         receiverId: userData.id,
         updatedAt: Date.now(),
       }),
     });
   console.log(newChatRef.id)
    } catch (err) {
      console.log(err);
    }
  };

  







  // const handleAddUser = async (userData) => { // Pass user data as argument
  //   if (!userData) {
  //     return; // Handle case where no user is found
  //   }
  
  //   const chatRef = collection(db, "chats");
  //   const userChatRef = collection(db, "userchats"); // Assuming a collection for user-chat relationships
  
  //   try {
  //     const newChatRef = doc(chatRef);
  //     await setDoc(newChatRef, {
  //       createdAt: serverTimestamp(),
  //       messages: [],
  //       participants: [userData.id, /* Your current user's ID */] // Add both user IDs
  //     });
  
  //     // Add the chat to user chats collections (assuming userchats collection exists)
  //     await setDoc(doc(userChatRef, userData.id), { chatId: newChatRef.id }); // For searched user
  //     await setDoc(doc(userChatRef, /* Your current user's ID */), { chatId: newChatRef.id }); // For your user
  
  //     console.log("Chat created successfully:", newChatRef.id);
  //     // Handle success (e.g., navigate to chat view)
  //   } catch (error) {
  //     console.error("Error creating chat:", error);
  //     // Display error message to user
  //   }
  // };
  

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
            <button className="btn btn-accent" onClick={handleAdd}>Add User</button>
          </div>
      )}

        


     </div>
    </>
  )
}

export default AddUser




