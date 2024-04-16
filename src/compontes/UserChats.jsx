import React from 'react'
import List from './list/List'
import Chat from './chat/Chat'
import Detail from './detail/Detail'


const UserChats = () => {
  return (
    <>
    
     <div className='flex justify-between  '>
      <List />
      <Chat />
      <Detail />
     
      
    </div>  
    </>
  )
}

export default UserChats