// import { Link } from "react-router-dom";
import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { transferUsingAccountNumber } from '../../actions/transaction'




export default function ReceiverDetail(props){

    const dispatch = useDispatch()


    const user = JSON.parse(localStorage.getItem("profile"));


    const { data } = props

    const initialStateField = {
    senderAccountNumber: user.user.accountNumber,
    receiverAccountNumber: data.accountNumber,
    transferAmount: '',
    senderTransactionPin: ''
}
    // const history = useHistory();
    const [formData, setFormData] = useState(initialStateField)

    const handleSubmit = (e) => {
        e.preventDefault()
        // setFormData({ ...formData, receiverAccountNumber: data.name })
        // setFormData({ ...formData, senderAccountNumber: user.user.accountNumber })
        // console.log(formData)
        dispatch(transferUsingAccountNumber(formData))
    }

    const handleChange = (e) => {
        // e.preventDefault()
        setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) })
    } 

    return(
        <div className="container mt-2 display-f align-center justify-center verifer">
            <div className="card sending-card mt-5">
                <div className="mt-3 mb-2">
                    <h3 className="font-4 font-md">Receiver's Name</h3>
                    <p className="font-3 font-md">{data.name}</p>
                    <h3 className="font-4 font-md">Receiver's account number</h3>
                    <p className="font-3 font-md">{data.accountNumber}</p>
                    <h3 className="font-4 font-md">Receiver's Username</h3>
                    <p className="font-3 font-md">{data.userName}</p>
                    <h3 className="font-4 font-md">Receiver's Email address</h3>
                    <p className="font-3 font-md">{data.email}</p>

                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input type="number" name="transferAmount" placeholder="Enter Amount to transfer" required onChange={handleChange}/>
                    </div>
                    <div className="input-container">
                        <input type="number" name="senderTransactionPin" placeholder="Enter Your 4 digit Pin" required onChange={handleChange}/>
                    </div>
                    <button className="btn mt-1">Confirm</button>
                </form>
            </div>
        </div>
    )
}