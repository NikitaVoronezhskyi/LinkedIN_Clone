import React from 'react'
import "./HeaderList.css"

const HeaderList = ({Avatar,title,Icon}) => {
  return (
    <li className="haeder__right-list-item">
      {Icon && <a href='#' className='header__right-list-item-link__icon'>{<Icon/>}{title}</a>}
      {Avatar && <button className='header__right-list-item-link__button'><Avatar/>{title}</button>}
    </li>
  )
}

export default HeaderList

