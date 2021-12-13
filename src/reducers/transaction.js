/* eslint-disable no-fallthrough */
import { CONFIRM_RECEIVER_ACCOUNT } from '../constants/actionTypes';

const transactionReducer = (state = { transactionData: null }, action) => {
    switch (action.type) {
        case CONFIRM_RECEIVER_ACCOUNT:
            // localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            // console.log(action.data)
            return { ...state, transactionData: action?.data }
        default:
            return state;
    }
}

export default transactionReducer