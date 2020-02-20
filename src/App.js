import React, { useState } from 'react'
import './App.css'
import GoogleLogin from 'react-google-login'
import SplashPage from './components/SplashPlage'
import UserInput from './components/UserInput' 
import { Typography } from '@material-ui/core'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const [loginFailure, setLoginFailure] = useState(false)

  const successResponse = (response) => {
    setLoggedIn(true)
    setUser(response.Qt.Ad)
  }

  const failureResponse = () => {
    setLoginFailure(true)
  }

  return (
    <div className="App">
      {loggedIn ?
        <div>
          <UserInput user={user} />
        </div>
        :
        <div className="content">
          <SplashPage />
          <div>
            <GoogleLogin
              className="loginButton"
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Authenticate with Google"
              onSuccess={successResponse}
              onFailure={failureResponse}
              cookiePolicy={'single_host_origin'}
            />
            {loginFailure ?
              <div><Typography className="errorMessage">Unable to authenticate. Are your username and password correct?</Typography></div>
              :
              <div></div>
            }
          </div>
        </div>
      }

    </div>
  )
}

export default App
