export default function ProfileEdit({data}){
    return(
        <>
            <div className="profile-edit">
                <form>
                    <div>
                        username: @<input type="text" value={data.username}/>
                    </div>
                    <div>
                        Name: <input type="text" value={data.name}/>
                    </div>
                    <div>
                        Phone: <input type="number" value={data.phone}/>
                    </div>
                    <div>
                        email: <input type="email" value={data.email}/>
                    </div>
                    <button>Edit</button>
                </form>
            </div>
        </>
    )
}