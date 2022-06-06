import React from 'react'
import SidebarUser from './SidebarUser'
import Feed from './Feed'
import News from './News'
import "./Main.css"
const Main = () => {
  return (
    <main className='main'>
        <div className="container">
        <SidebarUser/>
        <Feed/>
        <News/>
        </div>
    </main>
  )
}

export default Main