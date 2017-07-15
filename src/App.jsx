import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

// redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from './actions/userActions'
import * as SettingsActions from './actions/settingsActions'
import * as AirportActions from './actions/airportActions'

// components
import Airport from './containers/Airport'
import Home from './containers/Home'
import Requests from './containers/Requests'
import Profile from './containers/Profile'
import Navigation from './components/Navigation'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import NoMatch from './components/errors/NoMatch'
import Settings from './components/auth/Settings'

// styles
import './App.css';

const PrivateRoute = ({ component: Component, authenticated, ...props}) => (
  <Route {...props}
    render={(props) => authenticated === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/signin', state: {from: props.location}}} />}
  />
)

const PublicRoute = ({ component: Component, authenticated, ...props }) => (
  <Route {...props}
        render={(props) => authenticated === false
            ? <Component {...props} />
            : <Redirect to='/' /> }
        />
)

class App extends Component {
  componentWillMount () {
    this.props.action.fetchUser()
  }

  handleLogout () {
      this.props.action.signOutUser()
  }

  render() {
    console.log('app logs', this.props);
    return (
      <Router>
        <div className="App">
          <Navigation authenticated={this.props.authenticated}
                        logout={this.props.handleLogout} />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/airports/:airportId"
                  component={Airport} />

            <PrivateRoute authenticated={this.props.authenticated} path="/requests" component={Requests} />
            <PrivateRoute authenticated={this.props.authenticated} path="/profile" component={Profile} />



            <PublicRoute authenticated={this.props.authenticated} path="/signin" component={Signin} authError={this.props.authError} />
            <PrivateRoute authenticated={this.props.authenticated} path="/settings" component={Settings} />
            <PublicRoute authenticated={this.props.authenticated} path="/signup" component={Signup} />


            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    airport: state.airport.airport,
    settings: state.settings.settings,
    authenticated: state.user.authenticated,
    authError: state.user.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: bindActionCreators(Object.assign({},
            UserActions,
            SettingsActions,
            AirportActions
            ), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
