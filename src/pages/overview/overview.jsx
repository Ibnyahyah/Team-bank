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
          <><div>
            <br /> <br/>
            <h2>You are not logged in, Login as to access this Page</h2>
            <h2>Click this <button onClick={redirect}>Link </button> to go to Login Page</h2>
          </div></>
        )
      }

    return(
        <>
        <LoginNavbar/>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <p>Account Number</p>
                            <p><b>{user.user.accountNumber}</b></p>
                        </div>
                        <div className="col">
                            <p>Account Username</p>
                            <p><b>{user.user.userName}</b></p>
                        </div>
                        <div className="col">
                            <p>Account Balance</p>
                            <p><b>#{user.user.accountBalance}</b></p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <button className="recieve">Recieve</button>
                            <button className="send">send</button>
                        </div>
                    </div>
                </div>
            </div>
            <Transaction data={user.user.transactions}/>
        </>
    )
}