import React from 'react'

// Components
import Nav from './Nav'
import Header from './Header'

export default class UserHomepage extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Nav className="nav" />
      </div>
    )
  }
}
