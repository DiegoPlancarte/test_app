import React from 'react';
import { Redirect } from 'react-router';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewPost extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      success: false,
      form: {
        title: '',
        date: '',
        content: '',
        user_id: this.props.current_user.id}
    }
  }

  handleChange = (e) => {
    let {form} = this.state
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }
  
  handleSubmit = () => {
    this.props.onSubmit(this.state.form)
    this.setState({success:true})
  }

  render() { 
    return ( 
      <React.Fragment>
        <Container>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="title">Title</Label>
                  <Input 
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter your first name" 
                    onChange={this.handleChange}
                    value={this.state.form.title}
                    />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="date">Date</Label>
                  <Input 
                    type="date"
                    name="date"
                    id="date"
                    placeholder="Enter your last name" 
                    onChange={this.handleChange}
                    value={this.state.form.date}
                    />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="content">Content</Label>
                  <Input 
                    type="textarea"
                    name="content"
                    id="content"
                    placeholder="Enter your first name" 
                    onChange={this.handleChange}
                    value={this.state.form.content}
                    />
                </FormGroup>
              </Col>
            </Row>
            <Button className="btn bg-primary text-white" onClick={this.handleSubmit}>
            Submit
          </Button>
          {this.state.success && <Redirect to="/allposts" onClick={this.handleSubmit}/>}
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default NewPost;