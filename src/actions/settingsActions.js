export function setCurrencyFilter (currency) {
    return {
        type: 'SET_CURRENCY_FILTER',
        payload: currency
    }
}
export function setUnitsFilter (units) {
    return {
        type: 'SET_UNITS_FILTER',
        payload: units
    }
}
