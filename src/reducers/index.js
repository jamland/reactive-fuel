import { combineReducers } from 'redux'

import user from './userReducer'
import airport from './airportReducer'
import settings from './settingsReducer'
import { reducer as form } from 'redux-form'

export default combineReducers({
    airport,
    user,
    settings,
    form
})
