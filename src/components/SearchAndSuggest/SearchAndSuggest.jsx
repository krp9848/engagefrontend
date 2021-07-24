import React from 'react'
import FollowSuggest from '../FollowSuggest/FollowSuggest'
import SearchUser from '../SearchUser/SearchUser'

import './SearchAndSuggest.scss'

const SearchAndSuggest = () => {
  return (
    <div className="search-and-suggest">
      <SearchUser />
      <FollowSuggest />
    </div>
  )
}

export default SearchAndSuggest
