import { Link } from 'react-router-dom'

function Moodtracker() {
  return (
    <div className="app">
      <div className="phone">
        <h1 className="mood-title">How are you feeling?</h1>

        <div className="mood-buttons">
          <button>😊 Happy</button>
          <button>😌 Calm</button>
          <button>😔 Sad</button>
          <button>😣 Overwhelmed</button>
        </div>

        <Link to="/dashboard">
          <button className="continue-btn">
            Continue
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Moodtracker