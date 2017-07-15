export default function reducer(state={
    data: {
        activeAirport: null,
        activeAirportPrices: null,
        activeAirportHandlers: null,
    },
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "FETCH_ALL_AIRPORT_PENDING":
            return {
                ...state,
                fetching: true,
                data: {
                    ...state.data,
                    activeAirportPrices: null
                }
            }
        case "FETCH_ALL_AIRPORT_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case "FETCH_ALL_AIRPORT_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload
            }
        case "FETCH_AIRPORT_PENDING":
            return {
                ...state,
                fetching: true
            }
        case "FETCH_AIRPORT_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case "FETCH_AIRPORT_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true,
                activeAirport: action.payload
            }
        case "FORGET_AIRPORT":
            return {
                ...state,
                fetching: false,
                fetched: false,
                activeAirport: null
            }
        case "FETCH_AIRPORT_PRICES_PENDING":
            return {
                ...state,
            }
        case "FETCH_AIRPORT_PRICES_REJECTED":
            return {
                ...state,
                error: action.payload
            }
        case "FETCH_AIRPORT_PRICES_FULFILLED":
            return {
                ...state,
                activeAirportPrices: action.payload
            }
        case "FETCH_AIRPORT_HANDLERS_PENDING":
            return {
                ...state,
            }
        case "FETCH_AIRPORT_HANDLERS_REJECTED":
            return {
                ...state,
                error: action.payload
            }
        case "FETCH_AIRPORT_HANDLERS_FULFILLED":
            return {
                ...state,
                activeAirportHandlers: action.payload
            }
        case "ALL_AIRPORT_ADD":
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: state.airports.concat([action.payload])
            }
        default:
            return state
    }
}
