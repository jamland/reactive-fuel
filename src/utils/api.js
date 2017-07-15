const API_URL = "https://fuelstaging-api.rocketroute.com/api/v1/"

export const API = {
    AIRPORT: {
        HOME:       API_URL+'airports/home',
        GET:        API_URL+'airports/',
        PINNED:     API_URL+'airports/pinned',
    },
    PRICES: '/publicprices',
    HANDLERS: '/handlers'
}
