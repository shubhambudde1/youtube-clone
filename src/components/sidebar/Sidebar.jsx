import React from 'react'
import './Sidebar.css'
import home from '../../assets/assets/home.png'
import game_icon from '../../assets/assets/game_icon.png'
import automobile from '../../assets/assets/automobiles.png'
import sport_image from '../../assets/assets/sports.png'
import entertainment from '../../assets/assets/entertainment.png'
import tech from '../../assets/assets/tech.png'
import music from '../../assets/assets/music.png'
import blogs from '../../assets/assets/blogs.png'
import news_image from '../../assets/assets/news.png'
import jack from '../../assets/assets/jack.png'
import simen from '../../assets/assets/simon.png'
import Tom from '../../assets/assets/tom.png'
import megan from '../../assets/assets/megan.png'
import Cameron from '../../assets/assets/cameron.png'



function Sidebar({showSidebar, catagery, setCatagery}) {
    
  return (
      <div className={`sidebar ${showSidebar?"":"small-slidebar"}`}>
    <div className='shortcut-links'>
    <div className={`side-link ${catagery===0?"active":""}`} onClick={()=>setCatagery(0)}><img src={home} alt="" /><p>home</p></div>
    <div className={`side-link ${catagery===20?"active":""}`} onClick={()=>setCatagery(20)}><img src={game_icon} alt="" /><p>game</p></div>
    <div className={`side-link ${catagery===2?"active":""}`} onClick={()=>setCatagery(2)}><img src={automobile} alt="" /><p>automobile</p></div>
    <div className={`side-link ${catagery===17?"active":""}`} onClick={()=>setCatagery(17)}><img src={sport_image} alt="" /><p>sport</p></div>
    <div className={`side-link ${catagery===24?"active":""}`} onClick={()=>setCatagery(24)}><img src={entertainment} alt="" /><p>Entertainment</p></div>
    <div className={`side-link ${catagery===28?"active":""}`} onClick={()=>setCatagery(28)}><img src={tech} alt="" /><p>Technology</p></div>
    <div className={`side-link ${catagery===10?"active":""}`} onClick={()=>setCatagery(10)}><img src={music} alt="" /><p>Music</p></div>
    <div className={`side-link ${catagery===22?"active":""}`} onClick={()=>setCatagery(22)}><img src={blogs} alt="" /><p>Blogs</p></div>
    <div className={`side-link ${catagery===25?"active":""}`} onClick={()=>setCatagery(25)}><img src={news_image} alt="" /><p>News</p></div><hr />
        
      </div>
      <div className='Subscribed_list'>
        <h3>Subscribed</h3>
    <div className='side-link'><img src={jack} alt="" /><p>pewdpie</p></div>
    <div className='side-link'><img src={simen} alt="" /><p>mrBeast</p></div>
    <div className='side-link'><img src={Tom} alt="" /><p>JustinBeaber</p></div>
    <div className='side-link'><img src={megan} alt="" /><p>5 min craft</p></div>
    <div className='side-link'><img src={Cameron} alt="" /><p>Nas Daily</p></div>

      </div>


      
    </div>
  )
}

export default Sidebar
