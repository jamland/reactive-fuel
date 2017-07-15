import React, { Component } from 'react';
// redux
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form';

// style
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Container, Col, Row, Card } from 'reactstrap';

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = "Please enter an valid email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address"
    }

    if (!values.password) {
        errors.password = 'Please enter a password'
    }

    return errors
}


class SignupForm extends Component {
    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <FormGroup row color={touched && error ? 'danger' : ''}>
            <Label for={type} sm={2} className="control-label">{label}</Label>
            <Col sm={10}>
                <Input  {...input} placeholder={label} className="form-control" type={type} />
                {touched && error && <FormFeedback>{error}</FormFeedback>}
            </Col>
        </FormGroup>
    )

    renderAuthenticationError () {
        if (this.props.authenticationError) {
            return <div className="alert alert-danger">{this.props.authenticationError}</div>
        }

        return <div></div>
    }


    render() {
        const { handleSubmit } = this.props;
        console.log('props', this.props)

        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <h1>Signup:</h1>

                            { this.renderAuthenticationError() }

                            <Form onSubmit={handleSubmit}>
                                <Field name="email" component={this.renderField} type="email" label="Email" placeholder="Enter it..."/>
                                <Field name="password" component={this.renderField} type="password" label="Password" placeholder="Enter it..."/>

                                <FormGroup check row>
                                    <Col sm={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary" size="lg">Signup</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps (state) {
    return {
        authenticationError: state.user.error
    }
}

// Decorate the form component
SignupForm = reduxForm({
  form: 'signup',
  validate
})(SignupForm)

export default SignupForm
