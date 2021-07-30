import React from 'react'
import { useSelector } from 'react-redux'
import User from '../User/User'
import './FollowSuggest.scss'

const FollowSuggest = () => {
  // only suggest users which are not currently being followed by the current user
  // or loggedInUser
  const users = useSelector((state) => state.users)
  const currentUser = useSelector((state) => state.currentUser)
  console.log('currentUser', currentUser)
  const currentlyFollowedUsers =
    (currentUser.following && currentUser.following.map((user) => user.id)) ||
    []

  let count = 0
  const fiveNotFollowedUsers = []
  for (let user of users) {
    if (
      !currentlyFollowedUsers.includes(user.id) &&
      user.id !== currentUser.id
    ) {
      fiveNotFollowedUsers.push(user)
      count += 1
    }
    if (count >= 5) break
  }

  return (
    <div className="follow-suggest-container">
      <h3 className="follow-suggest-header">Follow Suggestions</h3>
      {fiveNotFollowedUsers.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}

export default FollowSuggest
