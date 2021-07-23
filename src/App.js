import React from 'react'
import RouterConfig from './navigation/RouterConfig'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { ProvideAuth } from './navigation/Auth/ProvideAuth'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ProvideAuth>
          <Router>
            <RouterConfig />
          </Router>
        </ProvideAuth>
      </Provider>
    </>
  )
}

export default App
