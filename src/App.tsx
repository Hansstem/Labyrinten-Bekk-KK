import { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import React from 'react'
import TestPage from './pages/TestPage'

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
      <Router>
        <TestPage />
      </Router>
    </>
  )
}

export default App
