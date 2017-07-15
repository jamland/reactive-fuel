import React from 'react'
import classnames from 'classnames'

// style
import { ButtonGroup, Button, Input } from 'reactstrap'

const FuelProviderFilters = (props) => {
    return (
          <div className={classnames('ml-auto', 'd-inline-flex', { hidden: props.activeTab !== '1' })}>
            <ButtonGroup>
                <Button outline
                    color="primary"
                    onClick={() => props.onRadioBtnClick('jetfuel')}
                    active={props.rSelected === 'jetfuel'}>
                    JETFUEL
                </Button>
                  <Button outline
                      color="primary"
                      onClick={() => props.onRadioBtnClick('avgas')}
                      active={props.rSelected === 'avgas'}>
                      AVGAS
                  </Button>
              {/* </LinkContainer> */}
            </ButtonGroup>&nbsp;
            <Input type="select"
                   name="unitsFilter"
                   value={props.settings.unitsFilter}
                   onChange={props.handleUnitsFilter} >
              <option value="usg">Gallons US</option>
              <option value="l">Litres</option>
              <option value="lbs">Pounds</option>
              <option value="kg">Kilos</option>
            </Input>&nbsp;
            <Input type="select"
                   name="currencyFilter"
                   value={props.settings.currencyFilter}
                   onChange={props.handleCurrencyFilter}>
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="aud">AUD</option>
              <option value="nzd">NZD</option>
            </Input>
          </div>
      )
}

export default FuelProviderFilters
