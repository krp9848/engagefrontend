import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import User from '../User/User'
import './SearchUser.scss'

const SearchUser = () => {
  const [searchUser, setSearchUser] = useState('')
  const users = useSelector((state) => {
    if (!searchUser) return []
    return state.users.filter((user) =>
      user.name.toLowerCase().includes(searchUser.toLowerCase())
    )
  })
  return (
    <div className="searchUser">
      <input
        type="text"
        id="search-username"
        placeholder="Search User"
        value={searchUser}
        onChange={({ target }) => setSearchUser(target.value)}
      />

      <div className="searchResults">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

export default SearchUser
