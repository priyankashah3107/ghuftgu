import React from 'react'
import List from './list/List'
import Chat from './chat/Chat'
import Detail from './detail/Detail'


const UserChats = () => {
  return (
    <>
    
     <div className='flex '>
      <List />
      <Detail />
      <Chat />
      
    </div>  
    </>
  )
}

export default UserChats