import { React, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../reducers/loginReducer'
import './LoginForm.scss'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    const credentials = { username, password }

    dispatch(login(credentials))

    setUsername('')
    setPassword('')
  }
  return (
    <div className="loginFormContainer">
      <div className="loginHeader">
        <h1>Log in to Engage</h1>
      </div>
      <form className="loginForm" onSubmit={handleLogin}>
        <div className="formGroup">
          <input
            id="username"
            type="text"
            placeholder="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
            required
          />
          <label htmlFor="username">username</label>
        </div>
        <div className="formGroup">
          <input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <label htmlFor="password">password</label>
        </div>
        <button id="login-button" type="submit">
          Login
        </button>
      </form>
      <div className="signUpText">
        <p>
          Don&apos;t have an account? Please <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
