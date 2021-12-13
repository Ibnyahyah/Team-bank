// import { Data } from "./dummy-trans";

export default function Transaction(props){
    const { data } = props
    if(data.length > 1 ) {
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
                    <div className="card mt-1">
                        <div>
                            <div className="tr-row">
                                <div className="trans-type Dr">
                                   {data.transactionType}
                                </div>
                                <div className="trans-details ml-1">
                                    <p>{data.transactionId}</p>
                                    <div className="row">
                                        <p>{(new Date(data.updatedAt).toDateString())}</p>
                                        <p className="font-4">#{data.transactionAmount}.00</p>
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