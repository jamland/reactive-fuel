import React from 'react'

// style
import { Row, Col } from 'reactstrap'
import { Button } from 'reactstrap'
import './HandlerProviderList.css'

const HandlerProviderList = (props) => {
    const providers = props.activeAirportHandlers && props.activeAirportHandlers.map( (provider) => (
        <Row key={provider.id} className="d-flex align-items-center handlers-list-item">
          <Col>
            <img src={provider.logo} alt="" width="150" />
          </Col>
          <Col>
              <h2>{provider.name}</h2>
              <a href="#" className="view-info">VIEW INFO</a>
          </Col>
          <Col className="text-right">
            <Button color="primary" size="md">Request Handling</Button>
          </Col>
        </Row>
    ))

    return (
      <div className="handlers-list">
        {providers}
      </div>
    )
}

export default HandlerProviderList
