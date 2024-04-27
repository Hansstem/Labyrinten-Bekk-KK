import { useEffect, useState } from 'react'
import TestComponent from './components/TestComponent'
import Navbar from "./components/Navbar/Navbar"; // Adjust this path as necessary
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import React from 'react'
import DiscoverPage from './pages/DiscoverPage';
import LandingPage from './pages/LandingPage'

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
        <Navbar />
        <div className='pt-10'>
          <LandingPage />
        </div>
      </Router>
    </>
  )
}

export default App