import React from 'react'

import AirbpLogo from '../svg/airbpLogo'
import FuelPrice from './FuelPrice'

// style
import { Row, Col } from 'reactstrap'
import { Card, Button } from 'reactstrap'
import { Collapse } from 'reactstrap'
import '../../css/FuelProvider.css'

export const FuelTypeSticker = (props) => {
    return (
        <div className={'fuel-sticker '+props.type.toLowerCase().replace(/\s/g, '')}>
            {props.type}
        </div>
    )
}

const FuelProvider = (props) => {

    let taxCollapseOpen = false
    const handleTaxesToggle = () => {
        taxCollapseOpen = !taxCollapseOpen
    }

    return (
        <Row>
            <Col xs="4" sm="4" md="2">
                <AirbpLogo /><br />
            </Col>
            <Col xs="8" sm="8" md="3">
                <b>{props.provider.fuel_provider}</b><br />
                <small>
                    <a href="#">VIEW FBO</a>
                </small>
            </Col>
            <Col xs={{ size: 8, offset: 4 }}
                sm={{ size: 4, offset: 0 }}
                md={{ size: 2 }}>
                <FuelTypeSticker type={props.provider.product} />
            </Col>
            <Col xs={{ size: 8, offset: 4 }}
                sm={{ size: 4, offset: 0 }}
                md={{ size: 2 }}>

                <FuelPrice prices={props.provider.prices}
                    currency={props.settings.currencyFilter}
                    units={props.settings.unitsFilter}
                    fuelType={props.provider.product} />

                <br />
                <small>
                    <a href="#" onClick={ handleTaxesToggle() }>TAXES &amp; FEES</a>
                </small>
            </Col>
            <Col xs="12" sm="4" md="3" lg="2" className="text-right">
                <Button color="primary" size="md">Request Fuel</Button>
            </Col>
            <Col sm="12">
                <Collapse isOpen={false}>
                    <Card className="taxes-n-fees">
                        <div className="d-flex">
                            <b>Base price</b>
                            <b>3.51 US$</b>
                        </div>
                        <div className="d-flex">
                            <div>Fees</div>
                            <div>0.05 US$</div>
                        </div>

                        <h2 className="d-flex">
                            <b>Total International and/or Commercial</b>
                            <b>3.51 US$</b>
                        </h2>
                        <div className="d-flex">
                            <div>Duty</div>
                            <div>0.05 US$</div>
                        </div>
                        <div className="d-flex">
                            <div>TAX</div>
                            <div>21%</div>
                        </div>

                        <h2 className="d-flex">
                            <b>Total Internal and/or Private</b>
                            <b>6.17 US$</b>
                        </h2>
                        <p>
                            THESE ARE AIRPORT PUBLISHED PRICES. YOU MAY OBTAIN A BETTER PRICE BASED ON YOUR INDIVIDUAL ACCOUNT.
                        </p>
                        <p>
                            The following may apply :duties, fees and taxes: Airport Fee - Jet A1: 0.03 USD/USG Compulsory stock obligation fee - Jet A1: 3.85 EUR/CM Into Plane hook up fee - Jet A1: 27.13 EUR/flight No fuel operations fee- Jet A1: 45.00 EUR/flight Overwing Fee - Jet A1: 17,00 EUR/M3 ( (is applied to GA only) Overtime: 648.00 EUR/flight (in Winter only) Airport Fee - Avgas: 7.335 EUR/CM Into Plane hook up fee - Avgas: 21.36 EUR/flight (w.e.f 01-APR-2015) Into Plane Agent - SLCA
                        </p>
                        <p>
                            Prices, duties, taxes and fees cited in this message are valid on the day of issuance and therefore subject to change without notice. The duties, taxes and fees information contained in this message is purely for information purposes and provided as a guide only. This price is quoted using the IATA exchange rate on the month of pricing to calculate duties, taxes and fees information, and invoicing may be based on a different exchange rate (i.e. ECB), and or the rate on the day the invoice is generated.
                        </p>
                        <p>
                            For further information on duties, taxes and fees, please refer to the Air BP Duties, Taxes and Fees available on <a href="www.airbp.com">www.airbp.com</a>, alternatively please contact your Account Manager. Air BP makes no representation or warranty in respect of any of the information on duties, taxes and fees contained in this message, nor as to the availability or specification of fuel at any location on any given date. The information contained in this quotation is confidential to Air BP. You must not distribute any such information.
                        </p>
                    </Card>
                </Collapse>
            </Col>
        </Row>
    )
}

export default FuelProvider
