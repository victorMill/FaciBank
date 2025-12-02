import React, {useEffect, useState} from "react";
import axios from "axios"

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/ping')
    .then((res) => setMessage(res.data.message))
    .catch(console.error)
  })

  return (
    <div style={{
      textAlign:"center", marginTop:"50"
    }}>
      <h1>Banco Fácil</h1>
      <p>Mensagem do Backend</p>
    </div>
  )
}

export default App
