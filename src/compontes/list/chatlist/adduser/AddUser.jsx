import React, { useState } from 'react'
import './addUser.css'
import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../../../../../firebase';
import { useUserStore } from '../../../../../userStore';

const AddUser = () => {
 
  const [name, setName] = useState('')
  const [userData, setUserData] = useState('')
  const [isLoading, setIsLoading] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

   const {currentUser} = useUserStore()
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

  // const handleAdd = async () => {
  //   const chatRef = collection(db, "chats");
  //   const userChatsRef = collection(db, "userchats");

  //   try {
  //     const newChatRef = doc(chatRef);

  //     await setDoc(newChatRef, {
  //       createdAt: serverTimestamp(),
  //       messages: [],
  //     });

  //    // Access the chat ID after successful creation
  //    const chatId = newChatRef.id;

  //    // Update user chats references with the chat ID
  //    await updateDoc(doc(userChatsRef, userData.id), {
  //      chats: arrayUnion({
  //        chatId,
  //        lastMessage: "",
  //        receiverId: currentUser.id,
  //        updatedAt: Date.now(),
  //      }),
  //    });
 
  //    await updateDoc(doc(userChatsRef, currentUser.id), {
  //      chats: arrayUnion({
  //        chatId,
  //        lastMessage: "",
  //        receiverId: userData.id,
  //        updatedAt: Date.now(),
  //      }),
  //    });
  //  console.log(newChatRef.id)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  



  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");
  
    try {
      const newChatRef = doc(chatRef);
      console.log("New chat reference:", newChatRef);
  
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });
  
      // Access the chat ID after successful creation
      const chatId = newChatRef.id;
      console.log("New chat ID:", chatId);
  
      // Check if userData and currentUser are defined before accessing their 'id' properties
      console.log("userData:", userData);
      console.log("currentUser:", currentUser);
  
      if (userData && userData.id && currentUser && currentUser.id) {
        // Update user chats references with the chat ID
        console.log("Updating user chats...");
  
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
  
        console.log("User chats updated successfully.");
      } else {
        console.error("userData or currentUser is undefined or does not contain 'id' property.");
      }
  
      console.log("New chat ID:", newChatRef.id);
    } catch (err) {
      console.error("Error adding chat:", err);
    }
  };
  







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




