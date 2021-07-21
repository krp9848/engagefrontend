import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setNotification } from '../../reducers/notificationReducer'
import { createUser } from '../../reducers/userReducer'
import './SignUpForm.scss'
const SignUpForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      dispatch(
        setNotification(
          { message: 'Password do not match', messageType: 'failure' },
          5
        )
      )
      return
    }

    dispatch(createUser({ username, password, name }))
  }
  return (
    <div className="signUpFormContainer">
      <div className="signUpHeader">
        <h1>Sign up on Engage</h1>
      </div>
      <form className="signUpForm" onSubmit={handleLogin}>
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
