import React from 'react'
import { useParams } from 'react-router-dom'

function Videoroom() {
  const { roomID } = useParams()

  return (
    <div id="videoroom">
      <h2>Videoroom</h2>
      <p>Room ID: {roomID ?? 'unknown'}</p>
    </div>
  )
}

export default Videoroom