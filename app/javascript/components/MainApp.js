import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//pages
import Navigation from "./pages/Navigation"
import Profile from "./pages/Profile"
import AllPosts from "./pages/AllPosts"
import NewPost from "./pages/NewPost"
import PostInfo from "./pages/PostInfo"

class MainApp extends React.Component {
  constructor(props){
    super(props)
      this.state ={
        posts:[]
      }
    this.getPosts();
  }

  componentDidMount(){
    this.getPosts()
  }
  
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
  
  getPosts = () =>{
    fetch("/posts")
    .then((response)=>{
      if(response.status === 200){
        return(response.json())
      }
    })
    .then((postsArray)=>{
      this.setState({posts: postsArray})
    })
  }

  createPost = (post) => {
    fetch('/posts', {
      body: JSON.stringify(post),
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

  deletePost = (id) => {
    return fetch(`/posts/${id}`, {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        return this.getPosts
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
            <Route exact path="/profile" render={(props) => <Profile current_user={current_user} createProfile={this.createProfile}/> } />
            <Route exact path="/newpost" render={(props) => <NewPost current_user={current_user} onSubmit={this.createPost}/> } />
            <Route exact path="/allposts" render={(props) => <AllPosts {...props} posts={ this.state.posts } /> } />
            <Route exact path="/postinfo/:id" render={(props) => <PostInfo {...props} signed_in={ signed_in } current_user={ current_user} onDelete={this.deletePost} /> } />
        </Switch>
      </Router>
    );
  }
}

export default MainApp