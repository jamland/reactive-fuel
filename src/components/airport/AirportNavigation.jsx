import React, { Component } from 'react'
import classnames from 'classnames'
import {Link, Route} from 'react-router-dom'


import FuelProviderFilters from './FuelProviderFilters'

// styles
import { Nav, NavItem } from 'reactstrap'

class AirportNavigation extends Component {
  constructor(props) {
      super(props)
      console.log('props', props);

      this.handleUnitsFilter = this.handleUnitsFilter.bind(this)
      this.handleCurrencyFilter = this.handleCurrencyFilter.bind(this)
  }

  handleUnitsFilter (event) {
    this.props.setUnitsFilter(event.target.value)
  }

  handleCurrencyFilter (event) {
    this.props.setCurrencyFilter(event.target.value)
  }


  render() {
      return (
          <div className={'d-md-flex align-items-center justify-content-start'}>
              <Nav tabs>
                <NavItem>
                  <Link to={`${this.props.match.url}/fuel`}
                        className={classnames('nav-link', { active: this.props.activeTab === '1' })}
                        onClick={() => { this.props.toggleTab('1') }}>
                          Fuel
                  </Link>
                </NavItem>
                <NavItem >
                  <Link to={`${this.props.match.url}/handling`}
                        className={classnames('nav-link', { active: this.props.activeTab === '2' })}
                        onClick={() => { this.props.toggleTab('2'); }}>
                          Handling
                  </Link>
                </NavItem>
              </Nav>

              <Route path={`${this.props.match.url}/fuel`}
                     render={ (props) => (
                          <FuelProviderFilters
                              activeTab={this.props.activeTab}
                              rSelected={this.props.rSelected}
                              onRadioBtnClick={this.props.onRadioBtnClick}
                              settings={this.props.settings}
                              handleUnitsFilter={this.handleUnitsFilter}
                              handleCurrencyFilter={this.handleCurrencyFilter}
                              {...props}
                          />
                     )}
              />

          </div>
      )
  }
}

export default AirportNavigation
