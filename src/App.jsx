import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Chat from './pages/Chat'
import Moodtracker from './pages/Moodtracker'

function Home() {
  return (
    <div className="app">
      <div className="phone">
        <h1>MindEase AI</h1>

        <p className="subtitle">
          Your wellness companion
        </p>

        <Link to="/login">
          <button className="continue-btn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/moodtracker" element={<Moodtracker />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App