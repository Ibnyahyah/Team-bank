/* eslint-disable no-fallthrough */
import { CONFIRM_RECEIVER_ACCOUNT, SUCCESSFUL_TRANSFER } from '../constants/actionTypes';

const transactionReducer = (state = { transactionData: null }, action) => {
    switch (action.type) {
        case CONFIRM_RECEIVER_ACCOUNT:
            // localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            // console.log(action.data)
            return { ...state, transactionData: action?.data }
        case SUCCESSFUL_TRANSFER:
            localStorage.clear()
            localStorage.setItem('profile', JSON.stringify({ ...action?.user }))
            setTimeout(() => {
                return { ...state, transactionData: null }
            }, 9000)
        default:
            return state;
    }
}

export default transactionReducer