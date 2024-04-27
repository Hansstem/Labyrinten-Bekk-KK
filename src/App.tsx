import { useEffect, useState } from 'react'
import TestComponent from './components/TestComponent'
import Navbar from "./components/Navbar/Navbar"; // Adjust this path as necessary

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
    <div className="App">
      <Navbar /> 
      <main>
        {/* Other components or content can go here */}
        {/* <h1>Welcome to the Site!</h1> */}
      </main>
    </div>
  );
}

export default App