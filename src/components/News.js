import React from 'react'
import "./News.css"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const News = () => {
  return (
    <aside className='news'>
        <div className="aside__heading">
            <h2>LinkedIn News</h2>
            <a href='#'>
                <InfoOutlinedIcon/>
            </a>
        </div>
        <ul className='aside__heading-list'>
            <li className='aside__item'>
                <a href="#">#</a>
                <article href="#" className='aside__heading-list-item'>
                    <h2 className='aside__heading-list-item-title'>Coronavirus UK updates</h2>
                    <div className="aside__heading-list-item-block">
                        <p className='aside__heading-list-item-block-text'>Top News</p>
                        <p className='aside__heading-list-item-block-text'>900 readers</p>
                    </div>
                </article>
            </li>
        </ul>
    </aside>
  )
}

export default News