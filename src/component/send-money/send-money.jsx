export default function SendMoney(){
    return(
        <div className="container">
            <div className="card sending-card mt-5">
                <div>
                    <form>
                        <div className="input-container">
                            <input placeholder="enter reciever username" required />
                        </div>
                        <p style={{float:'right'}} className="text-error">User Detail</p>
                        <button className="mt-1">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}