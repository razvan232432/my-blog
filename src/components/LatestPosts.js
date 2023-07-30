import React from 'react'
import Cards from './Cards'
import './Components.css'

const LatestPosts = () => {
  return (
    <div className='latest-posts'>
        <h2>Latest Posts</h2>
        <div className='card-position'>
        <Cards 
            img='https://dlcdnwebimgs.asus.com/files/media/5C70957A-1479-4727-A0D0-1A860746F2F4/v2/img/slider6.jpg'
            title='ROG Strix G17 (2023) G713'
        />
        <Cards 
             img='https://dlcdnwebimgs.asus.com/files/media/5C70957A-1479-4727-A0D0-1A860746F2F4/v2/img/slider6.jpg'
             title='ROG Strix G17 (2023) G713'
        /> 
        <Cards
            img='https://dlcdnwebimgs.asus.com/files/media/5C70957A-1479-4727-A0D0-1A860746F2F4/v2/img/slider6.jpg'
            title='ROG Strix G17 (2023) G713' 
        />
        </div>
    </div>
  )
}

export default LatestPosts