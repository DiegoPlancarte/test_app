import React from "react"
import { Jumbotron, Button } from 'reactstrap'
import Navigation from "./pages/Navigation"

class MainApp extends React.Component {
  render () {
    const {
			signed_in,
			sign_in_route,
			sign_out_route,
			current_user,
			new_user_registration_path
		} = this.props
    return (
      <React.Fragment>
        <Navigation signed_in={signed_in} sign_in_route={sign_in_route} sign_out_route={sign_out_route} new_user_registration_path={new_user_registration_path}/>
      </React.Fragment>
    );
  }
}

export default MainApp
