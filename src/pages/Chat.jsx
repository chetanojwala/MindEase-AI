function Chat() {
  return (
    <div className="app">
      <div className="phone">
        <h1>Your Safe Space 🌿</h1>

        <div className="card">
          <p>I've been feeling overwhelmed lately.</p>
        </div>

        <div className="card">
          <p>
            I'm sorry to hear that.
            <br />
            Try taking a few deep breaths.
          </p>
        </div>

        <input
          type="text"
          placeholder="Type your thoughts..."
        />
      </div>
    </div>
  )
}

export default Chat