import LoginNavbar from "../../component/navbar/login-navbar";
import Transaction from "../../component/transaction/transaction";

export default function Overview(){
    return(
        <>
        <LoginNavbar/>
            <div className="container">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <p>Account Number</p>
                            <p><b>1234567890</b></p>
                        </div>
                        <div className="col">
                            <p>Account Balance</p>
                            <p><b>1000.00</b></p>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col">
                            <p>Order Balance</p>
                            <p><b>#1090.00</b></p>
                        </div>
                        <div className="col">
                            <button className="recieve">Recieve</button>
                            <button className="send">send</button>
                        </div>
                    </div>
                </div>
            </div>
            <Transaction/>
        </>
    )
}