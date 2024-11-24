import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navebar/navbar'
import Home from './home/Home'
import Video from './video/Video'  // Adjust the path as needed

function App() {
  const [showSidebar, setShowSidebar] = React.useState(true);

  // const toggleSidebar = () => {
  //   setShowSidebar(!showSidebar);
  // };
  
  return (
    <div>

      <Navbar setShowSidebar={setShowSidebar}/>
      <Routes>
        <Route path="/" element={<Home  showSidebar={showSidebar}/>} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App