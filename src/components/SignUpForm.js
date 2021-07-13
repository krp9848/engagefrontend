import React, { useState } from 'react'

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      console.log(`Password do not match`)
      return
    }
    console.log(`account created`)
    setName('')
    setUsername('')
    setPassword('')
    setConfirmPassword('')
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
        Name{' '}
        <input
          id="signup-name"
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />
      </div>
      <div>
        Username{' '}
        <input
          id="signup-username"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
          required
        />
      </div>
      <div>
        Password{' '}
        <input
          id="signup-password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
      </div>
      <div>
        Confirm Password{' '}
        <input
          id="signup-confirm_password"
          type="password"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
          required
        />
      </div>
      <button id="signup-button" type="submit">
        Sign Up
      </button>
    </form>
  )
}
export default SignUpForm
