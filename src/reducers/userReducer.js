export default function reducer(state={
    user: {
        id: null,
        name: null,
        age: null
    },
    authenticated: false,
    fetching: false,
    fetched: false,
    error: null
}, action) {
    switch (action.type) {
        case "SIGN_IN_USER":
            return {
                ...state,
                fetching: false,
                fetched: true,
                authenticated: true,
                error: null
            }
        case "SIGN_OUT_USER":
            return {
                ...state,
                fetching: false,
                fetched: false,
                authenticated: false,
                error: null
            }
        case "FETCH_USER_PENDING":
            return {
                ...state,
                fetching: true
            }
        case "FETCH_USER_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case "FETCH_USER_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true,
                user: action.payload
            }
        case "SET_USERNAME":
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload
                }
            }
        case 'AUTH_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}
