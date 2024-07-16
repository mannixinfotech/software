import React from 'react'
import SideBar from './SideBar'

const Message = () => {
  return (
    <div>
      <SideBar/>
      <div className='md:pl-64 pt-14'>
      <div className="flex items-center pt-3 pl-6">
          <img
            src="../msg.png"
            alt="Add Category"
            className="w-6 h-6 mr-2"
          />
          <p className="font-bold text-lg">
          Messages</p>
        </div>
      </div>
    </div>
  )
}

export default Message