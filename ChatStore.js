// import { doc, getDoc } from 'firebase/firestore';
// import { create } from 'zustand'
// import { db } from './firebase';

// export const useChatStore = create((set) => ({
//   chatId: null,
//   user: null,
//   currentUser: null,
//   isCurrentUserBlocked: false,
//   isReceiverBlocked: false,

//   changeChat: (chatId, user) => {
//     const currentUser = useChatStore.getState().currentUser;

//     // checking if Current user is Blocked 
      
//     if(user.blocked.includes(currentUser.id)) {
//       return set({
//         chatId,
//         user: null,
//         isCurrentUserBlocked: true,
//         isReceiverBlocked: false,
//       })

//     }

//     // Checking if Receiver is Blocked



//   else if(currentUser.blocked.includes(user.id)) {
    
//       return set({
//         chatId,
//         user: user,
//         isCurrentUserBlocked: false,
//         isReceiverBlocked: true,
//       })
//     }

  
//     else {
//       return set({
//         chatId,
//         user,
//         isCurrentUserBlocked: false,
//         isReceiverBlocked: false,
//       })
//     }
//   },

//   changeBlock: () => {
//     set(state => ({...state, isReceiverBlocked: !state.isReceiverBlocked}))
//   }
 
// }))



import { doc, getDoc } from 'firebase/firestore';
import { create } from 'zustand'
import { db } from './firebase';

export const useChatStore = create((set) => ({
  chatId: null,
  user: null,
  currentUser: null,
  isCurrentUserBlocked: false,
  isReceiverBlocked: false,
changeChat: (chatId, user) => {
  const currentUser = useChatStore.getState().currentUser;

  // Check if user and currentUser are not null
  if (!user || !currentUser) {
    // Handle the case where either user or currentUser is null
    return set({
      chatId,
      user: null,
      isCurrentUserBlocked: false,
      isReceiverBlocked: false,
    });
  }

  // Check if currentUser is blocked
  if (user.blocked.includes(currentUser.id)) {
    return set({
      chatId,
      user: null,
      isCurrentUserBlocked: true,
      isReceiverBlocked: false,
    });
  }

  // Check if receiver is blocked
  else if (currentUser.blocked.includes(user.id)) {
    return set({
      chatId,
      user: user,
      isCurrentUserBlocked: false,
      isReceiverBlocked: true,
    });
  }

  // Otherwise, set chatId and user without any blocks
  else {
    return set({
      chatId,
      user,
      isCurrentUserBlocked: false,
      isReceiverBlocked: false,
    });
  }
},


  changeBlock: () => {
    set(state => ({...state, isReceiverBlocked: !state.isReceiverBlocked}))
  }
 
}))





