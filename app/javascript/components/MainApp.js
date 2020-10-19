import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages
import Navigation from "./pages/Navigation"
import Profile from "./pages/Profile"

class MainApp extends React.Component {
  
  getProfile = () => {
    fetch('/profiles')
    .then((response)=>{
      if(response.status === 200){
        return(response.json())
      }
    })
    .then((profile)=>{
      this.setState({profile:profile})
    })
  }
  
  createProfile = (profile) => {
    fetch('/profiles', {
      body: JSON.stringify(profile),
      headers:{
        'Content-Type': 'application/json'
      },
      method: "POST"
    })
    .then((response) => {
      if(response.ok){
        return this.getProfile()
      }
    })
  }
  
  
  render () {
    const {
      signed_in,
			sign_in_route,
			sign_out_route,
			current_user,
			new_user_registration_path
		} = this.props
    return (
      <Router>
        <Navigation signed_in={signed_in} sign_in_route={sign_in_route} sign_out_route={sign_out_route} new_user_registration_path={new_user_registration_path}/>
        
        <Switch>
            <Route exact path="/profile" render={(props) => <Profile current_user={ current_user} createProfile={this.createProfile}/> } />
        </Switch>
      </Router>
    );
  }
}

export default MainApp
