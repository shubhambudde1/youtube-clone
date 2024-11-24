import React from 'react'
import './Home.css'
import Sidebar from '../components/sidebar/Sidebar'
import Feed from '../components/navebar/Feed/Feed'

import {useState} from 'react'

function Home({showSidebar}) {
  const [catagery, setCatagery] = useState(0);
  return (
    <>

      
      <Sidebar showSidebar={showSidebar} catagery={catagery} setCatagery={setCatagery}/>
      <div className={`container ${showSidebar ? '' : 'large-container'}`}>


      <Feed catagery={catagery}/>
      </div>
    </>
  )
}

export default Home
