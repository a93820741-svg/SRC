import React, { useState } from 'react'

function Home() {
  let navigate = useNavigate()
  let [input, setinput] = useState("")

  function handlejoin() {

    navigate("")

  }
  return (
    <div id="home">
      <input type="text" placeholder="enter room ID" value={input} onChange={(e) =>
        setinput(e.target.value)} />
      <button onClick={handlejoin}>Join Now</button>
    </div>
  )
}

export default Home