import React from 'react'
import './Work.css'
import mywork_data from '../../assets/mywork_data'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'
const Work = () => {
  return (
   <div id='work' className="mywork">
    <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="mywork-container">
        {mywork_data.map((Work,index)=>
        {
            return <img key={index} src={Work.w_img} alt="" />
        })}
    </div>
    <div className="showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
    </div>
   </div>
  )
}

export default Work