import React, { useState } from 'react'
import './App.css'
import GoogleLogin from 'react-google-login'
import SplashPage from './components/SplashPlage'
import UserInput from './components/UserInput'

function App() {
  // Set our state
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const [loginFailure, setLoginFailure] = useState(false)

  // Receive  response from Google authentication
  const successResponse = (response) => {
    setLoggedIn(true)
    setUser(response.Qt.Ad)
  }

  // Deal with an invalid authentication
  const failureResponse = (response) => {
    setLoginFailure(true)
  }

  // Programatically determine what to display based on auth
  // ! I'M PASSING USER FROM APP TO USERINPUT TO RESULT AND NOT USING REDUX BECAUSE THIS IS THE ONLY TIME I DO IT
  if (loggedIn) {
    return (
      <div className="App">
        <UserInput user={user}/>
      </div>
    )
  } else {
    return (
      <div className="App">
        <SplashPage />
        <GoogleLogin
          className="loginButton"
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Authenticate with Google to Enter"
          onSuccess={successResponse}
          onFailure={failureResponse}
          cookiePolicy={'single_host_origin'}
        />
        {loginFailure ? 
          <div>Error - unable to login. Are your username and password correct?</div> 
          : 
          <div></div>
        }
      </div>
    )
  }
}

export default App
