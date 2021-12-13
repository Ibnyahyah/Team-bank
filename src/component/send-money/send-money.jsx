export default function SendMoney(){
    return(
        <div className="container">
            <div className="card sending-card mt-5">
                <div>
                    <form>
                        <div className="input-container">
                            <input placeholder="enter reciever username" required />
                        </div>
                        <div className="input-container">
                            <input type="number" placeholder="Amount" required />
                        </div>
                        <div className="input-container">
                            <input type="text" placeholder="Narration (optional)"  />
                        </div>
                        <p style={{float:'right'}} className="text-error">Reciever full-name</p>
                        <button className="mt-1">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}