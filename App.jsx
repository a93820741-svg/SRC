import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Videoroom from './pages/Videoroom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/room/:roomID" element={<Videoroom />} />


    </Routes>
  )
}

export default App