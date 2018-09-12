import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Components
import Homepage from './Homepage'
import ProfilePage from './ProfilePage'
import UserHomepage from './UserHomepage'
import UserSignup from './UserSignup'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/user/signup" component={UserSignup} />
            <Route path="/user/profile/:id" component={ProfilePage} />
            <Route path="/user/home" component={UserHomepage} />
          </div>
        </Router>
      </div>
    )
  }
}
