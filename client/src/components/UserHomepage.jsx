import React from 'react'

// Components
import Nav from './Nav'
import Header from './Header'

//

export default class UserHomepage extends React.Component {
  render () {
    return (
      <div className="container">
        <Header />
        <div style={{height: '100%'}}>
          <div className="row justify-content-between" style={{height: '100%'}}>
            <h2>My Projects</h2>
            <img src="https://via.placeholder.com/100x100" />
          </div>
          <div className="row justify-content-between" style={{height: '100%'}}>
            <img src="https://via.placeholder.com/100x100" />
            <h2>My Collaborations</h2>
          </div>
          <div className="row justify-content-between" style={{height: '100%'}}>
            <h2>Browse Projects</h2>
            <img src="https://via.placeholder.com/100x100" />
          </div>
        </div>
        <Nav />
      </div>
    )
  }
}
