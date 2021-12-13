// import { Data } from "./dummy-trans";

export default function Transaction(props){
    const { data } = props
    if(data.length === 0) {
        <div className="container">
            <hr/>
            <div>
                <h3>Recent Transaction</h3>
                <br/>
                <p>No Transaction</p>
            </div>
        </div>
    }

    return(
        <div className="container">
            <hr/>
            <div>
                <h3>Recent Transaction</h3>
            </div>
            {data.map((data)=>{
                return(
                    <div className="card">
                        <div>
                            <div className="tr-row" >
                                <div className="trans-type Dr">
                                   {data.transactionType}
                                </div>
                                <div className="trans-details">
                                    <p>{data.transactionId}</p>
                                    <div className="row">
                                        <p>{data.updatedAt}</p>
                                        <p>#{data.transactionAmount}.00</p>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 