import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/navbar";

export default function Home(){
    return(
        <>
        <div className="main-section-home">
        <Navbar/>
            <div className="container">
                <div>
                    <h1>Welcome</h1>
                    <div>
                        <p>Stay in control of your finance with Team-Bank</p>
                    </div>
                <button><Link to="/login" style={{color:'#133F77'}}>Get Started</Link></button>
                </div>
            </div>
        </div>
            <div className="container" style={{marginTop:'100px', background:'#133f77', color:'white'}}>
                <div className="row">
                    <div className="card">
                        <p>Make Deposit</p>
                    </div>
                    <div className="card">Withdraw</div>
                    <div className="card">Transfer</div>
                    <div className="card">Online Payment</div>
                </div>
            </div>
        </>
    )
}
