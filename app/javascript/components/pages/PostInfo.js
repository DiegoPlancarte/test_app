import React, { Component } from 'react';
import { CardDeck, Row, Col, Card, CardImg, CardText, CardBody, Container } from 'reactstrap';
import { Link } from "react-router-dom"

class PostInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      post:''
    }
    this.getPostInfo()
  }

  getPostInfo = () => {
    fetch(`/posts/${this.props.match.params.id}`)
    .then((response)=> {
      return(response.json())
    }).then((data) => {
      this.setState({post:data})
    })
  }

  handleDelete = () => {
    this.props.onDelete(this.props.match.params.id)
  }

  render() {
    const { signed_in, current_user} = this.props
    const { post } = this.state
    return ( 
      <React.Fragment>
        <Container>
            <h1 className="text-primary" id="header">Post Details</h1>
            <hr/>
            { post && 
              <CardDeck>
                <Card border="light" className="shadow">
                  <Row md={1} lg={2}>
                    <Col>
                      <CardBody>
                        <CardText className="text-center"> {post.title} </CardText>
                        <CardText className="text-center"> {post.date}</CardText>
                        <CardText className="text-center"> <em>Description:</em> {post.content} </CardText>
                        {signed_in && (current_user.id === post.user_id) && 
                          <div className="text-center">
                          <Link to="/allposts" className= "btn btn-danger" onClick={this.handleDelete} >Delete Listing</Link>
                          &nbsp;
                          <Link to={`/edit/${post.id}`} className= "btn btn-info">Edit Post</Link>
                          </div>
                        }
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </CardDeck>
            }
          </Container>
      </React.Fragment>
    );
  }
}

export default PostInfo;