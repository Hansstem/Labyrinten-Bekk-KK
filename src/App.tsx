import { useEffect, useState } from 'react'
import TestComponent from './components/TestComponent'

import './App.css'
import React from 'react'
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
        <TestComponent />
      </div>

    </>
  )
}

export default App
