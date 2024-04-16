import React from 'react'
import './list.css'
import UserInfo from './userinfo/UserInfo'
import ChatList from './chatlist/ChatList'
const List = () => {
  return (
    <> 
     <div className='listt'>
          <UserInfo />
          <ChatList />
     </div>
    </>
  )
}

export default List