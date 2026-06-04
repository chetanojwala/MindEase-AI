import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="app">
      <div className="phone">
        <h1>Welcome Back</h1>

        <p className="subtitle">
          Sign in to access your personalized wellness insights and emotional support tools.
        </p>

        <div className="login-form">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />

          <Link to="/moodtracker">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login