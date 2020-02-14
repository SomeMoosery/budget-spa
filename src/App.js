import React from 'react'
import './App.css'
import GoogleLogin from 'react-google-login'

let isLoggedIn = false

const responseGoogle = (response) => {
  isLoggedIn = true
  console.log(response)
  return App()
}

function App() {
  console.log(isLoggedIn)
  if (isLoggedIn) {
    console.log('Logged in!')
  } else {
    console.log('Not logged in!')
    return (
      <div className="App">
        <GoogleLogin
          clientId="875281779878-d9i5m0kn6uehajcocuepfm568ov6hspa.apps.googleusercontent.com"
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
