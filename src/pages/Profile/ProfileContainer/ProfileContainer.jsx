import React from 'react'
import SearchAndSuggest from '../../../components/SearchAndSuggest/SearchAndSuggest'
import Sidebar from '../../../components/Sidebar/Sidebar'
import ProfileView from '../ProfileView/ProfileView'
import './ProfileContainer.scss'

export const ProfileContainer = () => {
  return (
    <div className="profile-container">
      <Sidebar />
      <ProfileView />
      <SearchAndSuggest />
    </div>
  )
}
