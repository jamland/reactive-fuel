export default function reducer(state={
    currencyFilter: 'usd',
    unitsFilter: 'usg',
    error: null
}, action) {
    switch (action.type) {
        case "SET_CURRENCY_FILTER":
            return {
                ...state,
                currencyFilter: action.payload
            }
        case "SET_UNITS_FILTER":
            return {
                ...state,
                unitsFilter: action.payload
            }
        default:
            return state
    }
}
