import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useProvideAuth } from '../../navigation/Auth/useProvideAuth'
import { createUser } from '../../reducers/userReducer'
import './SignUpForm.scss'
const SignUpForm = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useHistory()
  const auth = useProvideAuth()

  const handleSignUp = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      toast.error('password do not match'.toUpperCase())
      return
    }

    createUser({ username, password, name })
      .then((user) => {
        console.log('user creation successful', user)
        return auth.signin({ username, password })
      })
      .then((loggedInUser) => {
        console.log('User finally logged in', loggedInUser)
        history.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="signUpFormContainer">
      <div className="signUpHeader">
        <h1>Sign up on Engage</h1>
      </div>
      <form className="signUpForm" onSubmit={handleSignUp}>
        <div className="formGroup">
          <input
            id="signup-name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
          <label htmlFor="signup-name">Name</label>
        </div>
        <div className="formGroup">
          <input
            id="signup-username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            required
          />
          <label htmlFor="signup-username">Username</label>
        </div>
        <div className="formGroup">
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <label htmlFor="signup-password">Password</label>
        </div>
        <div className="formGroup">
          <input
            id="signup-confirm_password"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={({ target }) => setConfirmPassword(target.value)}
            required
          />
          <label htmlFor="signup-confirm_password">Confirm Password</label>
        </div>
        <button id="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <div className="logInText">
        <p>
          Already have an account? Please <Link to="/">LogIn</Link>
        </p>
      </div>
    </div>
  )
}
export default SignUpForm
