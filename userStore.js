import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoding: true,
  fetchUserInfo: async (uid) => {
    if(!uid) return set({currentUser: null, isLoding: false})


    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      set({currentUser: docSnap.data(), isLoding: false})
    }      else {
  // docSnap.data() will be undefined in this case
      set({currentUser: null, isLoding: false})
    }
    }
     catch (error) {
      console.log(error)
      return set({currentUser: null, isLoding: false})
    }
  }
}))