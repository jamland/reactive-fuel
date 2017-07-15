import {API} from '../utils/api'

export function fetchAllAirport () {
    return {
        type: 'FETCH_ALL_AIRPORT',
        payload: fetch(API.AIRPORT.HOME)
                    .then(function (res) { return res.json() })
    }
}

export function fetchAirport (RR_ID) {
    return {
        type: 'FETCH_AIRPORT',
        payload: fetch(API.AIRPORT.GET+RR_ID)
                    .then(function (res) { return res.json() })
    }
}

export function forgetAirport () {
    return {
        type: 'FORGET_AIRPORT'
    }
}

export function fetchAirportPrices (RR_ID) {
    return {
        type: 'FETCH_AIRPORT_PRICES',
        payload: fetch(API.AIRPORT.GET+RR_ID+API.PRICES)
                    .then(function (res) { return res.json() })
    }
}

export function fetchAirportHandlers (RR_ID) {
    return {
        type: 'FETCH_AIRPORT_HANDLERS',
        payload: fetch(API.AIRPORT.GET+RR_ID+API.HANDLERS)
                    .then(function (res) { return res.json() })
    }
}
