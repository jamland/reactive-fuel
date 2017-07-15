import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import * as UserActions from '../actions/userActions'
import SigninForm from '../components/auth/SigninForm';


const Signin = (props) => {
  const submit = (values) => {
    // Do something with the form values
    console.log(values);
    console.log('signin props', props);
    props.action.signInUser(values)
  }

  const renderAuthenticationError = () => {
    if (this.props.authenticationError) {
      return <div className="alert alert-danger">{ this.props.authenticationError }</div>
    }
    return <div></div>
  }

  return (
    <div>
      { this.renderAuthenticationError }
      <SigninForm onSubmit={submit} error={props.user.error} />
    </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    authenticationError: state.user.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: bindActionCreators(Object.assign({},
            UserActions
            ), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
