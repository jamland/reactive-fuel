import React from 'react';

import FuelProvider from './FuelProvider'

// style
import { Badge, Alert } from 'reactstrap'
import { Row, Col } from 'reactstrap'
import { TabPane } from 'reactstrap'
import '../../css/FuelProvider.css'


const filterProviders = (list, activeTab) => {
    switch (activeTab) {
        case 'jetfuel':
            if (list) {
                return list.filter(provider => provider.product.toLowerCase().replace(/\s/g, '') === 'jetfuel')
            }
            break;
        case 'avgas':
            if (list) {
                return list.filter(provider => provider.product.toLowerCase().replace(/\s/g, '') === 'avgas')
            }
            break;
        default:
            return null
    }
}

const FuelProviderList = (props) => {

    const displayFuelProviders = filterProviders(props.activeAirportPrices, props.fuelTypeActive)

    const providers = () => {
        if (displayFuelProviders && displayFuelProviders.length > 0) {
            return displayFuelProviders.map( (provider) => {
                return (
                    <FuelProvider provider={provider}
                        settings={props.settings}
                        key={provider.id} />
                )
            })
        } else {
            return (
                <Alert color="warning">
                  Currently we don’t have prices for
                  <strong> {props.fuelTypeActive === 'jetfuel' ? 'JET FUEL' : 'AVGAS'} </strong>
                  available for this location.<br />
                  Please contact the airport directly.
                </Alert>
            )
        }
    }

    return (
        <TabPane tabId="1">
            <Row className={"text-left"}>
                <Col sm="12">
                    <div>
                        <br />
                        GA RAMP (RECOMMENDED)
                        <Badge color="primary"
                            data-balloon="Dedicated GA fuelling team providing prompt service,experienced refuellers for GA aircraft."
                            data-balloon-pos="down"
                            data-balloon-length="medium">?</Badge>
                        <br />
                        <br />
                        {providers()}
                    </div>
                </Col>
            </Row>
        </TabPane>
    )
}

export default FuelProviderList
