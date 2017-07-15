import React, {Component} from 'react'
import {
  Link
} from 'react-router-dom'
import * as Actions from '../actions/userActions'
import { connect } from 'react-redux'

// style
import { Container, Row, Col } from 'reactstrap'
import { Navbar, Nav, NavItem } from 'reactstrap'

class Navigation extends Component {
    handleSignout () {
        this.props.signOutUser()
    }
    renderAuthLinks () {
        if (this.props.authenticated) {
            return [
                <NavItem key="1">
                    <Link to="/settings">Settings</Link>
                </NavItem>,
                <NavItem key="2">
                    &nbsp;|&nbsp;
                </NavItem>,
                <NavItem key="3">
                    <Link to="/signup" onClick={() => this.handleSignout()}>Logout</Link>
                </NavItem>
            ]
        } else {
            return [
                <NavItem key="1">
                    <Link to="/signin">Signin</Link>
                </NavItem>,
                <NavItem key="2">
                    &nbsp;|&nbsp;
                </NavItem>,
                <NavItem key="3">
                    <Link to="/signup">Signup</Link>
                </NavItem>
            ]
        }
    }

    render () {
        return (
            <div className="App-header">
                <Navbar color="faded" light toggleable>
                    <Container className="d-inline-flex">
                        <Nav navbar>
                        <NavItem>
                            <input type="search" placeholder="Search" />
                        </NavItem>
                        <NavItem>
                            <Link to="/">&nbsp;Home&nbsp;</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/requests">&nbsp;Requests&nbsp;</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/profile">&nbsp;Profile&nbsp;</Link>
                        </NavItem>
                        </Nav>

                        <Nav className="ml-auto" navbar>
                            { this.renderAuthLinks() }
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        authenticated: state.user.authenticated
    }
}

export default connect(mapStateToProps, Actions)(Navigation)
