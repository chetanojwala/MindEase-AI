import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="app">
      <div className="phone">
        <h1>Insights</h1>

        <div className="card">
          <h2>Wellness Score</h2>
          <h3>78 / 100</h3>
        </div>

        <div className="card">
          <h2>Top Emotion</h2>
          <h3>Calm 😌</h3>
        </div>

        <Link to="/chat">
          <button className="continue-btn">
            Open AI Chat
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Dashboard