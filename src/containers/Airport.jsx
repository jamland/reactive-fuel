import React from 'react'
import {Route} from 'react-router-dom'

// redux
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/userActions'
import * as SettingsActions from '../actions/settingsActions'
import * as AirportActions from '../actions/airportActions'

// components
import FuelProviderList from '../components/airport/FuelProviderList'
import HandlerProviderList from '../components/airport/HandlerProviderList'
import AirportNavigation from '../components/airport/AirportNavigation'
import RocketLoader from '../components/svg/RocketLoader'

// styles
import { Container, Row, Col } from 'reactstrap'
import { Card } from 'reactstrap'
import { TabContent } from 'reactstrap'
import style from '../css/Airport.css'

class Airport extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            activeTab: '1',
            rSelected: 'jetfuel',
        }

        this.toggleTab = this.toggleTab.bind(this)
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this)
    }

    componentWillMount() {
        const airportRR = this.props.match.params.airportId
        this.props.action.fetchAirport(airportRR)
        this.props.action.fetchAirportPrices(airportRR)
        this.props.action.fetchAirportHandlers(airportRR)
    }

    componentWillUnmount () {
        this.props.action.forgetAirport()
    }

    toggleTab(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        })
      }
    }

    onRadioBtnClick(rSelected) {
      this.setState({ rSelected: rSelected });
    }

    render () {
      if (!this.props.airport) {
        return (
          <div>
              <RocketLoader />
          </div>
        )
      }

      let heroImageStyle = {
          backgroundImage: "url("+this.props.airport.big_image+")"
      }

      return (
          <div style={style}>
              <div style={heroImageStyle} className={"airport-hero"}></div>

              <Container>
                <Row>
                  <Col>

                    <div className={"airport-description"}>
                        <p>
                            {this.props.airport.ICAO} // {this.props.airport.IATA} <br/>
                        </p>
                        <h1>
                            {this.props.airport.Name}
                        </h1>
                    </div>

                    <Card className={"airport-card"}>
                      <AirportNavigation
                          activeTab={this.state.activeTab}
                          rSelected={this.state.rSelected}
                          onRadioBtnClick={this.onRadioBtnClick}
                          toggleTab={this.toggleTab}
                          setCurrencyFilter={this.props.action.setCurrencyFilter}
                          setUnitsFilter={this.props.action.setUnitsFilter}
                          settings={this.props.user}
                          match={this.props.match}
                      />

                      <TabContent activeTab={this.state.activeTab}>
                          <Route path={`${this.props.match.url}/fuel`}
                                 render={ (props) => (
                                      <FuelProviderList
                                          activeAirportPrices={this.props.activeAirportPrices}
                                          settings={this.props.settings}
                                          fuelTypeActive={this.state.rSelected}
                                          {...props}
                                      />
                                 )}
                          />
                          <Route path={`${this.props.match.url}/handling`}
                                 render={ (props) => (
                                      <HandlerProviderList
                                          activeAirportHandlers={this.props.activeAirportHandlers}
                                          {...props}
                                      />
                                  )}
                          />
                      </TabContent>

                    </Card>
                  </Col>
                </Row>
              </Container>
          </div>
      )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    settings: state.settings,
    airport: state.airport.activeAirport,
    activeAirportPrices: state.airport.activeAirportPrices,
    activeAirportHandlers: state.airport.activeAirportHandlers
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

export default connect(mapStateToProps, mapDispatchToProps)(Airport)
