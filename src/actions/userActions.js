// import * as user from '../userActions'
// user.fetchUser()
import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAUyVV1qrmi6eK93MJnIRKqATrqsMeZI-c",
    authDomain: "reactive-fuel.firebaseapp.com",
    databaseURL: "https://reactive-fuel.firebaseio.com"
}

Firebase.initializeApp(config)

export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            name: "Andy",
            age: 32
        }
    }
}

export function setUserName (name) {
    return {
        type: 'SET_USERNAME',
        payload: name
    }
}

export function authUser () {
    return {
        type: 'SIGN_IN_USER'
    }
}

export function unAuthUser () {
    return {
        type: 'SIGN_OUT_USER'
    }
}

export function authError (error) {
    return {
        type: 'AUTH_ERROR',
        payload: error
    }
}

export function signUpUser (credentials) {
    return (dispatch) => {
        Firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                dispatch( authUser() )
            })
            .catch(error => {
                console.log(error)
                dispatch( authError(error) )
            })
    }
}

export function signInUser (credentials) {
    return (dispatch) => {
        Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(response => {
                console.log(response)
                dispatch( authUser() )
            })
            .catch(error => {
                console.log(error)
                dispatch( authError(error) )
            })
    }
}

export function signOutUser () {
    return (dispatch) => {
        Firebase.auth().signOut()
            .then(response => {
                dispatch( unAuthUser() )
            })
            .catch(error => {
                console.log(error)
                dispatch( authError(error) )
            })
    }
}

export function verifyAuth () {
    return (dispatch) => {
      Firebase.auth().onAuthStateChanged( user => {
        if (user) {
          dispatch(authUser())
        } else {
          dispatch(sighOutUser())
        }
      })
    }
}

export function sighOutUser() {
  return {
    
  }
}
