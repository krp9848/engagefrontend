import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import { FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { HOME, LOGIN, PROFILE, ROOT } from '../../navigation/CONSTANT'
import { useProvideAuth } from '../../navigation/Auth/useProvideAuth'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const auth = useProvideAuth()
  const loggedInUser = useSelector((state) => state.loggedInUser)
  const handleSignOut = () => {
    auth.signout()
  }
  return (
    <nav className="sidebar">
      <h1 className="app-logo">
        <Link to={ROOT}>Engage</Link>
      </h1>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to={HOME}>
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={`${PROFILE}/${loggedInUser.username}`}>
            <FaUser />
            <span>Profile</span>
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={LOGIN} onClick={() => handleSignOut()}>
            <FaSignOutAlt />
            <span>Sign Out</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
