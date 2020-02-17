import React, { useState } from 'react'
import './App.css'
import GoogleLogin from 'react-google-login'
import SplashPage from './components/SplashPlage'
import UserInput from './components/UserInput'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const [loginFailure, setLoginFailure] = useState(false)

  const successResponse = (response) => {
    setLoggedIn(true)
    setUser(response.Qt.Ad)
  }

  const failureResponse = (response) => {
    setLoginFailure(true)
  }

  // ! I'M PASSING USER FROM APP TO USERINPUT TO RESULT AND NOT USING REDUX BECAUSE THIS IS THE ONLY TIME I DO IT
  if (loggedIn) {
    return (
      <div className="App">
        <UserInput user={user} />
      </div>
    )
  } else {
    return (
      <div className="App">
        <SplashPage />
        <div className='loginButton'>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Authenticate with Google to Enter"
            onSuccess={successResponse}
            onFailure={failureResponse}
            cookiePolicy={'single_host_origin'}
          />
        </div>
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
