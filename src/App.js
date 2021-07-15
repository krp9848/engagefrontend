import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import CreateTweet from './components/CreateTweet'
import DisplayTweets from './components/DisplayTweets'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import SignUpForm from './components/SignUpForm'
import { checkLoggedUser, logout } from './reducers/loginReducer'
import { initTweets } from './reducers/tweetReducer'

function App() {
  const user = useSelector((state) => state.loggedInUser)
  const dispatch = useDispatch()
  // load all the tweets
  useEffect(() => {
    dispatch(initTweets())
  }, [dispatch])

  // check it the user information is present in localStorage
  useEffect(() => {
    dispatch(checkLoggedUser())
  }, [dispatch])

  return (
    <div className="App">
      <h1>
        <i>Engage</i>
      </h1>
      <Notification />
      <Switch>
        <Route path="/signup">
          {user === null ? <SignUpForm /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {user === null ? (
            <div>
              <LoginForm />
              <p>
                Don&apos;t have an account? Please{' '}
                <Link to="/signup">SignUp</Link>
              </p>
            </div>
          ) : (
            <>
              <p>
                {' '}
                {user.username} logged in
                <button onClick={() => dispatch(logout(user))}>logout</button>
              </p>
              <CreateTweet />
              <DisplayTweets />
            </>
          )}
        </Route>
      </Switch>
    </div>
  )
}

export default App
