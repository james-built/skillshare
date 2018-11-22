import React from 'react'
import request from 'superagent'

// Components
import Nav from './Nav'

// Styles
const profileImage = {
  backgroundImage: "url('https://via.placeholder.com/200x200')",
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '30%',
  borderRadius: '100%'
}

// @flow

function testFlow(a: number): string {
  return a.length
}

export default class UserProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      about: '',
      skills: [],
      equipment: [],
      profilePic: '',
      projectPic: ''
    }
  }

  componentDidMount () {
    const selectedUser = Number(this.props.match.params.id)
    request
      .get(`/api/v1/users/get-user/${selectedUser}`)
      .then(res => {
        let user = res.body.user
        this.setState({
          name: user.name,
          about: user.about,
          skills: user.mySkillsEquipment.split(', '),
          equipment: user.requiredSkillsEquipment.split(', '),
          profilePic: user.profilePicture,
          projectPic: user.projectImage
        })
      })
      .catch(err => {
        return err.message
      })
  }

  render () {
    return (
      <div className="">
        <div className="profile_header">
          <img style={profileImage} src={this.state.profilePic} alt="profile image"/>
          <h2 className="pageHeader">{this.state.name}</h2>
        </div>
        <p>{this.state.about}</p>
        <div className="" style={{}}>
          <p>Some skills that they have:</p>
          <ul>
            {this.state.skills.map((skill, x) => {
              return <li key={x}>{skill}</li>
            })}
          </ul>
          <p>A picture of a project they worked on:</p>
          <img style={{height: 150, width: 'auto', marginBottom: '10px'}} src={this.state.projectPic} alt="uploaded picture"/>
          <br/>
          <p>A list of some of their equipment:</p>
          <ul>
            {this.state.equipment.map((item, j) => {
              return <li key={j}>{item}</li>
            })}
          </ul>
        </div>
        <Nav />
      </div>
    )
  }
}
