import React from 'react'
import "./News.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const News = () => {

    const newsArticle = (heading,subtitle) =>{
        return    <article className="aside__article">
            <div className="aside__article-left">
            <FiberManualRecordIcon/>
            </div>
            <div className="aside__article-right">
            <h4 className='aside__article-heading'>{heading}</h4>  
            <p className='aside__article-text'>{subtitle}</p>
            </div>
        </article>
    }
  return (
    <aside className='news'>
        <div className="news__heading">
            <h2 className='news__heading-title'>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("React-Redux","Top-news - 8123 readers")}
        {newsArticle("Tesla Stocks is Over?","Stocks - 8123 readers")}
        {newsArticle("JavaScript New Standart","JS - 841 readers")}
        {newsArticle("NextJS","NextJS - 2841 readers")}
        {newsArticle("First React Project","React - 598 readers")}
        {newsArticle("React-Redux","Top-news - 8123 readers")}
    </aside>
  )
}

export default News