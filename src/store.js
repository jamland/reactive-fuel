import { applyMiddleware, createStore, compose } from 'redux'

// import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducers'
import * as Actions from './actions/userActions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = applyMiddleware(
    promise(),
    thunk,
    // logger
)

const store = createStore(reducer, composeEnhancers(
    middleware
))

store.dispatch(Actions.verifyAuth())

export default store
// export default createStore(reducer, middleware)
