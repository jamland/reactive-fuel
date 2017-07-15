import React, { Component } from 'react'
// redux
import { Field, reduxForm } from 'redux-form'
import { SubmissionError } from 'redux-form'

// style
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Container, Col, Row, Card, Alert } from 'reactstrap'

const SigninAlert = (props) => {
  return (
    <Alert color="warning">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </Alert>
  )
}

class SigninForm extends Component {

  render() {
    const { handleSubmit } = this.props
    console.log('props', this.props)

    return (
      <Container>

            <SigninAlert />

            <Row>
              <Col>
                  <Card>
                    <h1>Signin:</h1>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                              <Field name="email" component="input" type="email" placeholder="Enter it..."/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password</Label>
                            <Col sm={10}>
                              <Field name="password" component="input" type="password" placeholder="Enter it..."/>
                            </Col>
                        </FormGroup>
                        <Button type="submit">Signin</Button>
                    </Form>
                  </Card>
              </Col>
          </Row>
      </Container>
    );
  }
}

// Decorate the form component
SigninForm = reduxForm({
  form: 'signin' // a unique name for this form
})(SigninForm)

export default SigninForm
