export default function Verification({data}){
    return(
        <>
            <div>
                <div className="card verification">
                    <div>
                        <form>
                            <p>Verify using your BVN</p>
                            <div className="input-container-verification">
                                <label for="bvn">
                                    <input type="number" value={data.bvn} required/>
                                </label>
                            </div>
                            <div>
                                <button className="btn">Verify</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}