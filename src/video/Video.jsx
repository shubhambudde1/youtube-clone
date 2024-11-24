import React from 'react'
import './Video.css'
import PlayVideo from '../components/playvideo/PlayVideo'

import Recomended from '../components/Recomended/Recomended'
import { useParams } from 'react-router-dom'
function Video() {
 const {videoId, categaryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}  />
      <Recomended  categaryId={categaryId}/>

      
      
    </div>
  )
}

export default Video
