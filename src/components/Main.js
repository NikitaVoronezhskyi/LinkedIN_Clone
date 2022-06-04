import React from 'react'
import SidebarUser from './SidebarUser'
import Center from './Center'
import SidebarNews from './SidebarNews'
import "./Main.css"
const Main = () => {
  return (
    <main className='main'>
        <SidebarUser/>
        <Center/>
        <SidebarNews/>
    </main>
  )
}

export default Main