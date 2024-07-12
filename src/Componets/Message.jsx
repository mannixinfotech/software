import React from 'react'
import SideBar from './SideBar'

const Message = () => {
  return (
    <div>
      <SideBar/>
      <div className='md:pl-64 pt-14'>
        message
      </div>
    </div>
  )
}

export default Message