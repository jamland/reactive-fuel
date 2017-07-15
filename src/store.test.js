import store from './store'
import expect from 'expect'
import airportReducer from './reducers/airportReducer'

describe('store', () => {
    it ('should init', () => {
        const actual = store.getState().settings
        console.log('store', store.getState());
        const expected = {
            currencyFilter: 'usd',
            unitsFilter: 'usg',
            error: null
        }
        expect(actual).toEqual(expected)
    })
})
