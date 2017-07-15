import React from 'react'

import {UNITS_RATIO, UNITS_NAMES} from '../../utils/constants.js'

const FuelPrice = (props) => {
    // get ratio of USG to units
    const getRatioGalToUnits = (units) => {
        switch (units) {
            case 'l':
                return UNITS_RATIO['GAL_LITER_RATIO']
            case 'lbs':
                return UNITS_RATIO['GAL_POUND_RATIO']
            case 'kg':
                if (props.fuelType === 'JET FUEL') {
                    return UNITS_RATIO['GAL_KG_JET_RATIO']
                }
                return UNITS_RATIO['GAL_KG_AVG_RATIO']
            default:
                // default for USG to USG
                return 1
        }
    }
    const CalculatePrice = () => {
        const price = (props.prices[props.currency].price / getRatioGalToUnits(props.units)).toFixed(2)
        return (
            <div data-balloon="Prices excludes taxes and fees"
                data-balloon-pos="down"
                data-balloon-length="medium">
                {price} {props.currency} / {UNITS_NAMES[props.units]}*
            </div>
        )
    }
    return (
        <CalculatePrice />
    )
}

export default FuelPrice
