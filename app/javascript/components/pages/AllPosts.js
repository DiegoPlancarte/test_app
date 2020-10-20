import React, { Component } from 'react'
import { Container, Row, Col, Card, CardText, CardBody, CardTitle, CardImg, CardFooter, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class AllPosts extends Component {
  render() {
    const { posts } = this.props
    return (
      <React.Fragment>
        <Container>
          <h1 className="text-primary" id="header">All Posts</h1>
          <hr/>
          <Row md="1" lg="2" xl="3">
            {posts.map((v,i)=> {
              return(
              <Col className="vendor-cards">
                <Card key={v.id} border="light" className="shadow">
                  <CardBody>
                    <CardTitle><strong>{v.title}</strong></CardTitle>
                    <CardText>{v.date}</CardText>
                    <Link to={`/postinfo/${v.id}`} >
                      <Button className="text-white bg-primary">Details</Button>
                    </Link>
                  </CardBody>
                </Card>
              </Col>
            )})}
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default AllPosts;