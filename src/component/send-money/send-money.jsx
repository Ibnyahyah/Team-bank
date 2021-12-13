import React, { useState } from 'react'
// import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { confirmAccountUsingEmail, confirmAccountUsingUserName, confirmAccountUsingAccountNumber } from '../../actions/transaction'
import ReceiverDetail from "./reciever-details"



export default function SendMoney(){

    const user = JSON.parse(localStorage.getItem("profile"));

    const receiverAccount = useSelector((state) => state.transaction);
    console.log(receiverAccount.transactionData)

    if(!(user.user)) window.location.replace("/login")

    const dispatch = useDispatch()

    const [formData, setFormData] = useState("")

    // const [className, setClassName] = useState("active")

    const [accountType, setAccountType] = useState("userName")

    const handleSubmit = (e) => {
        e.preventDefault()

        if(accountType === "email") {
        dispatch(confirmAccountUsingEmail(formData))
        }

        if(accountType === "userName") {
        dispatch(confirmAccountUsingUserName(formData))
        }

        if(accountType === "accountNumber") {
        dispatch(confirmAccountUsingAccountNumber(formData))
        }
    }


    return(
        <div className="container">
            <div className="card sending-card mt-5">
                <div className="center">
                    <h3>Send Money To Other User</h3> <br />
                    <h4>Select how to transfer</h4>
                    <select onChange={(e) =>
                          setAccountType(e.target.value)
                        }>
                        <option value="userName">Username</option>
                        <option value="accountNumber">Account Number</option>
                        <option value="email">Email</option>
                    </select>
                    <br /><br />
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        {accountType === "userName" ? 
                            <div className="input-container">
                                <h4>Username</h4>
                                <input placeholder="Enter Reciever's Username" required onChange={(e) =>
                          setFormData(e.target.value)
                        }/>
                            </div> 
                        : accountType === "accountNumber" ?  
                            <div className="input-container">
                                <h4>Account Number</h4>
                                <input placeholder="Enter Reciever's Account Number" required onChange={(e) =>
                          setFormData(e.target.value)
                        }/>
                            </div> 
                        :
                            <div className="input-container">
                                <h4>Email Address</h4>
                                <input placeholder="Enter Reciever's Email" required onChange={(e) =>
                          setFormData(e.target.value)
                        }/>
                            </div> 
                        }
                        <button className="mt-1">Continue</button>
                    </form>

                    {!receiverAccount.transactionData ? ""
                    :
                        <ReceiverDetail data={receiverAccount.transactionData} />
                    }
                </div>
            </div>
        </div>
    )
}

 // eslint-disable-next-line no-lone-blocks
 {/* <div className="input-container">
                            <input type="number" placeholder="Amount" required />
                        </div>
                        <div className="input-container">
                            <input type="text" placeholder="Narration (optional)"  />
                        </div>
                        <p style={{float:'right'}} className="text-error">Reciever full-name</p> */}
                        // eslint-disable-next-line no-lone-blocks
                        {/* {!} */}