import { Data } from "./dummy-trans";

export default function Transaction(){
    return(
        <div className="container">
            <hr/>
            <div>
                <h3>Recent Transaction</h3>
            </div>
            {Data.map((data,index)=>{
                return(
                    <div className="card"key={index}>
                        <div>
                            <div className="tr-row" >
                                <div className="trans-type Dr">
                                   {data.transType}
                                </div>
                                <div className="trans-details">
                                    <p>{data.transDetail}</p>
                                    <div className="row">
                                        <p>{data.transDate}</p>
                                        <p>#{data.transAmount}.00</p>
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