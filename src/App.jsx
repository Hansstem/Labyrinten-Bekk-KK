import { useEffect, useState } from 'react'

import './App.css'
import imgg from './assets/Komet_meme.jpg' 
const contentType = new Headers()
contentType.append('Content-Type', 'application/json')

function App() {
  const [participants, setParticipants] = useState([])
  const [newParticipant, setNewParticipant] = useState('')

  async function saveNewParticipant() {
    const response = await fetch('/api/deltakere', { method: 'POST', headers: contentType, body: JSON.stringify({ participant: newParticipant }) })
      .then(response => response.json())
    
    setParticipants(response.participants)
    setNewParticipant('')
  }

  useEffect(() => {
    fetch('/api/deltakere', {method: 'GET'})
      .then(response => response.json())
      .then(json => setParticipants(json.participants))
  }, [])

  return (
    <>
      <h1>Labyrintenfinale 2024 Kometkameratene</h1>
      <h2>Deltakere?</h2>
      <div>
        <img src={imgg}></img>
      </div>

    </>
  )
}

export default App
