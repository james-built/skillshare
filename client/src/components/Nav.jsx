import React from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggleNav: 'none'
    }
    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav () {
    if (this.state.toggleNav === 'none') {
      this.setState({toggleNav: 'block'})
    } else {
      this.setState({toggleNav: 'none'})
    }
  }

  render () {
    return (
      // this will popup the site nav menu
      <div>
        <div style={{
          display: this.state.toggleNav,
          bottom: '20px'}}>
          <Link to="/"><button>Home</button></Link>
          <Link to="/user/projects"><button>Your Projects</button></Link>
          <Link to="/user/collaborations"><button>Your Collaborations</button></Link>
        </div>
        <div className="fixed-bottom nav justify-content-center">
          <button onClick={this.toggleNav}>Navigate</button>
        </div>
      </div>
    )
  }
}
