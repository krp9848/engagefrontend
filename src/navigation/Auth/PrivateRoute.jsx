import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from './ProvideAuth'

// login screen  if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let { auth } = useAuth()
  console.log('Private Router context', auth)
  const user = useSelector((state) => state.loggedInUser)
  console.log('Private Router redux', user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth && auth.token ? (
          <>{children}</>
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
