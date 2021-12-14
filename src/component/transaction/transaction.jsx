// import { Data } from "./dummy-trans";

export default function Transaction({transData}){
    let datas = Array.from(transData);
    // if(data.length > 1 ) {
    //     <div className="container">
    //         <hr/>
    //         <div>
    //             <h3>Recent Transaction</h3>
    //             <br/>
    //             <p>No Transaction</p>
    //         </div>
    //     </div>
    // }
    // console.log(datas)

    return(
        <div className="container">
            <hr/>
            <div>
                <h3>Recent Transaction</h3>
            </div>
            <div>
                {datas.map((data, index)=>{
                    return(
                        <div className="card mt-1" key={index}>
                            <div>
                                <div className="tr-row">
                                    <div className="trans-type Dr">
                                    {data.transactionType}
                                    </div>
                                    <div className="trans-details ml-1">
                                        <p>{data.transactionId}</p>
                                        <div className="row">
                                            <p>{data.updatedAt}</p>
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
        </div>
    )
} 