import React, { useState } from 'react'
import './App.css'
import GoogleLogin from 'react-google-login'
import Welcome from './components/Welcome';

function App() {
  // Set our state
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")

  console.log('Starting...')
  console.log(loggedIn)

  const responseGoogle = (response) => {
    setLoggedIn(true);
    console.log(response.Qt.Ad)
    setUser(response.Qt.Ad)
  }

  console.log(loggedIn)


  // TODO break out into more scalable, functioning application
  if (loggedIn) {
    console.log('Logged in!')
    return (
      <Welcome user={user}/>
    )
  } else {
    console.log('Not logged in!')
    return (
      <div className="App">
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    )
  }
}

export default App
