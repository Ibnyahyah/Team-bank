import { combineReducers } from 'redux'

import auth from './auth'
import transaction from './transaction'

export default combineReducers({
    auth, transaction
})