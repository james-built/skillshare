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

export default class UserProfile extends React.Component {
  constructor (props) {
    super(props)
    // This state will be filled with the user data from API call
    this.state = {
      name: '',
      about: '',
      skills: [],
      equipment: [],
      profilePic: ''
    }
  }

  // To be replaced with an API call
  componentDidMount () {
    const selectedUser = Number(this.props.match.params.id)
    const demoUsers = [
      {id: 1,
        name: 'Tim',
        skills: ['Drone Pilot', 'PCB Design', 'Soldering'],
        equipment: ['Batteries', 'Soldering Iron', 'Crimping Pliers'],
        profilePic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        projectPic: 'https://media.wired.com/photos/5ae226425581121251d2feb0/master/pass/battlebots-598125354.jpg',
        about: `Hi, I'm Tim and I race drones for fun. I have a collection of battlebots I have designed and built from scratch and have entered them in a number of contests. If you need help doing anything mechanical or electrical I have the skills to help you out. I want to work with others who have programming experience particularly with neural networks.`},
      {id: 2,
        name: 'Sarah',
        skills: ['Circuitry Design', 'Horticulture', 'Project Management'],
        equipment: ['Fertiliser', 'Pruning Shears', 'Garden Rake'],
        profilePic: 'https://images.pexels.com/photos/157741/woman-confident-happy-confident-woman-157741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        projectPic: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/growing-tomatoes-1521837077.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*'},
      {id: 3,
        name: 'Angela',
        skills: ['CAD', 'Animal Welfare Specialist', 'Data Visualisation'],
        equipment: ['3D Scanner', 'Wire Brush', 'Barcode Scanner'],
        profilePic: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        projectPic: 'https://www.shoppingzoneplus.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/w/a/wall-e1.jpg'},
      {id: 4,
        name: 'Paul',
        skills: ['Carpentry', 'Toasted Sandwich Maker', 'Rapid Prototyping'],
        equipment: ['3D Scanner', 'Wire Brush', 'Barcode Scanner'],
        profilePic: 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        projectPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTPAaNG7HbLLPkNWMS9-ZrQFecApNzgzfgnymNdvrztGWl6De'}
    ]
    demoUsers.map(({id, name, skills, equipment, about, profilePic, projectPic}) => {
      if (id === selectedUser) {
        this.setState({name, skills, equipment, about, profilePic, projectPic})
      }
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
        <div className="pre-scrollable" style={{}}>
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
