// import React, { useState } from 'react'
// import './addUser.css'
// import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
// import { db } from '../../../../../firebase';
// const AddUser = () => {
//   const [user, setUser] = useState(null)
//   const handleSearch = async (ev) => {
//     ev.preventDefault()
     
//     const formData = new FormData(ev.target);
//     // console.log(formData)
//     const username = formData.get("username");

//     try {
     
//       const userRef = collection(db, "users");

//       // Create a query against the collection.
//       const q = query(userRef, where("username", "==", username));  // username will be unique
      
//       const querySnapShot = await getDocs(q)

//       if(!querySnapShot.empty) {
//          setUser(querySnapShot.docs[0].data());
//       } 
      
//     } catch (error) {
//       console.log(error)
//     }

//   }

//   return (
//     <>
//      <div className="addUser">

//       <form onSubmit={handleSearch}>
//          <input type="text" placeholder='Search' name='username' className='text-black' />
//          <button className="btn btn-primary">Search</button>
//       </form>

//       {user && (
//           <div className="user">
//             <div className="detail">
//               <img src={user.avatar || "avatar.png"} alt="avatar" />
//               <span className='text-xl font-bold'>{user.username}</span>
//             </div>
//             <button className="btn btn-accent">Add User</button>
//           </div>
//         )}

//         {!user && <p className="message">No user found for the entered username.</p>}


//      </div>
//     </>
//   )
// }

// export default AddUser














import React, { useState } from 'react';
import './addUser.css';
import { collection, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../../../../../firebase';

const AddUser = () => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // State for error message

  const handleSearch = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const username = formData.get('username');

    try {
      const userRef = collection(db, 'users');
      const q = query(userRef, where('username', '==', username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
      } else {
        setErrorMessage('No user found for the entered username.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while searching for the user.'); // User-friendly message
    }
  };

  const handleAddUser = async () => {
    // Implement logic to add the user to your system
    // This might involve creating a new document in another Firestore collection or performing some other action

    try {
      // Add user logic here
      console.log('User added successfully!');
      setUser(null); // Clear user data after successful addition
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while adding the user.'); // User-friendly message
    }
  };

  return (
    <>
      <div className="addUser">
        <form onSubmit={handleSearch}>
          <input type="text" placeholder='Search' name='username' className='text-black' />
          <button className="btn btn-primary">Search</button>
        </form>

        {user && (
          <div className="user">
            <div className="detail">
              <img src={user.avatar || 'avatar.png'} alt="avatar" />
              <span className='text-xl font-bold'>{user.username}</span>
            </div>
            <button className="btn btn-accent" onClick={handleAddUser}>Add User</button>
          </div>
        )}

        {!user && <p className="message">{errorMessage || 'No user found for the entered username.'}</p>} 
      </div>
    </>
  );
};

export default AddUser;
