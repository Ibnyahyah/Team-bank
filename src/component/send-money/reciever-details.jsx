// import { Link } from "react-router-dom";
import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { transferUsingAccountNumber } from '../../actions/transaction'

import Swal from 'sweetalert2'


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
        if(formData.senderAccountNumber === formData.receiverAccountNumber) {
            let timerInterval;
            Swal.fire({
                title: "Oops!!!",
                html: "You can not make a transfer to your account",
                timer: 4000,
                didOpen: () => {
                  timerInterval = setInterval(() => {
                  }, 100);
                },
                willClose: () => {
                  clearInterval(timerInterval);
                },
              });
              return false
        }
        dispatch(transferUsingAccountNumber(formData))
    }

    const handleChange = (e) => {
        // e.preventDefault()
        setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) })
    } 

   

    return(
        <div className="verifer">
            <div className="mt-1">
                <div className="mt-3 mb-2">
                    <h3 className="font-4 font-md">Receiver's Name :</h3>
                    <p className="font-2 font-md text-blue mt-1">{data.name}</p>
                    <h3 className="font-4 font-md">Receiver's account number :</h3>
                    <p className="font-2 font-md text-blue mt-1">{data.accountNumber}</p>
                    <h3 className="font-4 font-md">Receiver's Username :</h3>
                    <p className="font-2 font-md text-blue mt-1">{data.userName}</p>
                    <h3 className="font-4 font-md">Receiver's Email address :</h3>
                    <p className="font-2 font-md text-blue mt-1">{data.email}</p>

                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-container mb-1">
                        <input type="number" name="transferAmount" placeholder="Enter Amount to transfer" required onChange={handleChange}/>
                    </div>
                    <div className="input-container mb-1">
                        <input type="number" name="senderTransactionPin" placeholder="Enter Your 4 digit Pin" required onChange={handleChange}/>
                    </div>
                    <button className="btn mt-1">Confirm</button>
                </form>
            </div>
        </div>
    )
}