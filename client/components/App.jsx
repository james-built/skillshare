import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// Components
import Homepage from './Homepage'
import ProfilePage from './ProfilePage'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Homepage} />
            <Route path="/profile" component={ProfilePage} />
          </div>
        </Router>
      </div>
      // <Homepage />
    )
  }
}
