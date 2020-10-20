import React, { useState, useEffect } from 'react';
import useForm from './useForm';
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Profile = (props) => {

  const [ inputs, setInputs, handleInputChange, handleSubmit ] = useForm()

  useEffect(()=>{
    setInputs(inputs=>({...inputs, user_id:props.current_user.id}))
    }, [inputs.user_id === 1])


  const submitHandler = () => {
    props.createProfile()
    handleSubmit
  }

  console.log(inputs)

  return ( 
    <React.Fragment>
      <Container>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="first_name">First Name</Label>
                <Input 
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter your first name" 
                  onChange={handleInputChange}
                  value={inputs.first_name || ''}
                  />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input 
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Enter your last name" 
                  onChange={handleInputChange}
                  value={inputs.last_name || ''}
                  />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={2}>
              <FormGroup>
                <Label for="date_of_birth">Date of Birth</Label>
                <Input 
                  type="date"
                  name="date_of_birth"
                  id="date_of_birth"
                  placeholder="Enter your first name" 
                  onChange={handleInputChange}
                  value={inputs.date_of_birth || ''}
                  />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="phone">Phone Number</Label>
                <Input 
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your first name" 
                  onChange={handleInputChange}
                  value={inputs.phone || ''}
                  />
              </FormGroup>
            </Col>
            <Col md={5}>
              <FormGroup>
                <Label for="email">Email Address</Label>
                <Input 
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your first name" 
                  onChange={handleInputChange}
                  value={inputs.email || ''}
                  />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={submitHandler}>Submit</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}

export default Profile;