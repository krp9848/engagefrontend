import React from 'react'
import { useSelector } from 'react-redux'
import User from '../User/User'
import './FollowSuggest.scss'

const FollowSuggest = () => {
  // only suggest users which are not currently being followed by the current user
  const users = useSelector((state) =>
    state.users.filter((user, idx) => idx < 5)
  )
  return (
    <div className="follow-suggest-container">
      <h3 className="follow-suggest-header">Follow Suggestions</h3>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}

export default FollowSuggest
