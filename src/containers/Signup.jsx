import React, { Component } from 'react';
import SignupForm from '../components/auth/SignupForm';
// redux
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/userActions'


class Signup extends Component {
  submit = (values) => {
    // Do something with the form values
    console.log(values);
    this.props.action.signUpUser(values)
  }
  render() {
    return (
        <SignupForm onSubmit={this.submit} error={this.props.user.error} />
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: bindActionCreators(Object.assign({},
            UserActions
            ), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
