import React from 'react'
import { Link } from 'react-router-dom'

// redux
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActions from '../actions/userActions'
import * as AirportActions from '../actions/airportActions'

import RocketLoader from '../components/svg/RocketLoader'

// style
import { Container, Row, Col } from 'reactstrap'
import { Card, CardImg, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import '../css/Home.css'


class Home extends React.Component {

  componentWillMount () {
    this.props.action.fetchAllAirport()
  }

  render () {
    return (
      <AirportList airport={this.props.airport} match={this.props.match} />
    )
  }
}

const AirportList = (props, match) => {
    if (!props.airport.length) {
      return (
        <div>
            <RocketLoader />
        </div>
      )
    }

    const Cards = props.airport.map( (airport, index) => {
      const isBigCol = !index%3

      return (
          <Col xs="12" sm={isBigCol ? "12" : "6"} key={index}>
            <Card>
              <CardImg top width="100%" src={airport.small_image} alt="Card image cap" />
              <CardBlock>
                  <Row>
                      <Col xs="3" sm={isBigCol ? "2" : "3"} lg={isBigCol ? "2" : "2"}>
                          <div className="airport-codes">
                              <div className="icao">{airport.ICAO}</div>
                              <div className="iata">{airport.IATA}</div>
                          </div>
                      </Col>
                      <Col xs="9" sm={isBigCol ? "6" : "9"} lg={isBigCol ? "6" : "5"}>
                          <CardTitle>{airport.Name}</CardTitle>
                          <CardSubtitle>{airport.country}</CardSubtitle>
                      </Col>
                      <Col xs="12" sm={isBigCol ? "4" : "12"} lg={isBigCol ? "4" : "5"}  className="text-right">
                          <Link to={`/airports/${airport.URN}/fuel`} >
                              <Button color="primary" className="btn-lg-block">Requests Services</Button>
                          </Link>
                      </Col>
                </Row>
              </CardBlock>
            </Card>
          </Col>
        )
      })

    return(
        <div className="home-layout">
            <Container>
              <Row>
                  <Col xs="12">
                      <p className="text-left">Popular Destinations</p>
                  </Col>
              </Row>
              <Row>
                {Cards}
              </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    airport: state.airport.data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: bindActionCreators(Object.assign({},
            UserActions,
            AirportActions
            ), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
