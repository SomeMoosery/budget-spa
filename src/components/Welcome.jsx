import React from 'react'
import '../App.css'

function Welcome({ user }) {
  console.log('welcome')

  return (
    <div className="App">
      <p>
        Welcome, {user}
      </p>
    </div>
  );
}

export default Welcome
