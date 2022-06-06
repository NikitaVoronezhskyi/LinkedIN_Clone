import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { Avatar } from '@mui/material'
import "./HeaderList.css"

const HeaderList = ({avatar,title,Icon, onClick}) => {
  const user = useSelector((selectUser))

  return (
    <li onClick={onClick}  className="haeder__right-list-item">
      {Icon && <a href='#' className='header__right-list-item-link__icon'>{<Icon/>}{title}</a>}
      {avatar && (<a href="#" className='header__right-list-item-link__button'><Avatar alt="Avatar" src={user.photoURL}>{user?.email[0]}</Avatar></a>)}
    </li>
  )
}

export default HeaderList

