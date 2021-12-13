import { Link } from "react-router-dom";

export default function ReceiverDetail(){
    return(
        <div className="container">
            <div className="card sending-card mt-5">
            <Link to="/send" className="text-black">Back</Link>
                    <h1 className="text-center text-blue">Confirm Transaction</h1>
                <div className="mt-3 mb-2">
                    <p className="font-4 font-lg text-center mb-1">#1000.00</p>
                    <p className="font-3 font-md">Reciever Name</p>
                    <p className="font-3 font-md">Receiver account number / username</p>
                    <p className="font-3 font-md">Sender Name</p>
                    <p className="font-3 font-md">Account Balance</p>
                </div>
                <form>
                    <div className="input-container">
                        <input type="number" required/>
                    </div>
                    <button className="btn">Confirm</button>
                </form>
            </div>
        </div>
    )
}