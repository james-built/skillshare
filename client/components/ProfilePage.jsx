import React from 'react'

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
    {id: 1, name: 'Tim', skills: ['Drone Pilot', 'Battlebot Design', 'Hotdog Eating Champion'], equipment: ['Batteries', 'Soldering Iron', 'Crimping Pliers'], profilePic: 'https://pbs.twimg.com/media/CynmmdYWgAAjky1.jpg', projectPic: 'https://media.wired.com/photos/5ae226425581121251d2feb0/master/pass/battlebots-598125354.jpg', about: `Hi, I'm Tim and I race drones for fun. I have a collection of battlebots I have designed and built from scratch and have entered them in a number of contests. If you need help doing anything mechanical or electrical I have the skills to help you out. I want to work with others who have programming experience so I can progress my personal project of building a sentient robot army.`},
      {id: 2, name: 'Sarah', skills: ['Circuitry Design', 'Futuristic Horticulture', 'Laser Eye Beams'], equipment: ['Fertiliser', 'Pruning Shears', 'Garden Rake'], profilePic: 'https://static3.depositphotos.com/1001951/142/i/950/depositphotos_1422665-stock-photo-cyber-woman-with-tomatos.jpg', projectPic: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/growing-tomatoes-1521837077.jpg?crop=1.00xw:1.00xh;0,0&resize=480:*'},
      {id: 3, name: 'Angela', skills: ['CAD', 'Animal Welfare Specialist', 'Gun Safety'], equipment: ['3D Scanner', 'Wire Brush', 'Barcode Scanner'], profilePic: 'https://thumb9.shutterstock.com/display_pic_with_logo/434191/434191,1276812066,15/stock-photo-young-attractive-dangerous-woman-aiming-at-gold-fish-55445089.jpg', projectPic: 'https://www.shoppingzoneplus.com/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/w/a/wall-e1.jpg'},
      {id: 4, name: 'Paul', skills: ['Carpentry', 'Toasted Sandwich Maker', 'Rapid Prototyping'], equipment: ['3D Scanner', 'Wire Brush', 'Barcode Scanner'], profilePic: 'https://st2.depositphotos.com/4296911/6391/i/950/depositphotos_63917813-stock-photo-portrait-of-a-young-sexy.jpg', projectPic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkTPAaNG7HbLLPkNWMS9-ZrQFecApNzgzfgnymNdvrztGWl6De'}
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
