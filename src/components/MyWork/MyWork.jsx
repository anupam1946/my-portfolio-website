import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title"id='work'>
            <h1>MY RECENT WORK</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />

            })}
        </div>
        <div className="mywork-showmore">
            <p><a href="#">Show More</a></p>
            <img src={arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default MyWork
