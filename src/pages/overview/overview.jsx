import { Link } from "react-router-dom";
import LoginNavbar from "../../component/navbar/login-navbar";
import Transaction from "../../component/transaction/transaction";

export default function Overview(){

    const user = JSON.parse(localStorage.getItem("profile"));

    const redirect = () => {
        localStorage.clear();
        window.location.replace("/login")
      }
      
      if(!user) {
        return(
          <>
          <div className="container display-f justify-center align-center" style={{height:'90vh'}}>
            <div className="card">
                <h2>You are not logged in, Login as to access this Page</h2>
                <h2>Click this <button onClick={redirect}>Link </button> to go to Login Page</h2>
            </div>
          </div>
          </>
        )
      }

    return(
        <>
        <LoginNavbar/>
            <div className="container">
                <div className="card mt-3 mb-2">
                    <div className="row">
                        <div className="col mb-1">
                            <p>Account Number</p>
                            <p><b>{user.user.accountNumber}</b></p>
                        </div>
                        <div className="col mb-1">
                            <p>Account Username</p>
                            <p><b>{user.user.userName}</b></p>
                        </div>
                        <div className="col mb-1">
                            <p>Account Balance</p>
                            <p><b>#{user.user.accountBalance}</b></p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            {/* <button className="recieve">Recieve</button> */}
                            <button className="send"><Link to="/send" className="text-white">send</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <Transaction transData={user.user.transactions}/>
        </>
    )
}