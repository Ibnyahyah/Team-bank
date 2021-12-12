import Navbar from "../../component/navbar/navbar";

export default function Home(){

    // const user = JSON.parse(localStorage.getItem("profile"));

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
                </div>
            </div>
        </div>
        </>
    )
}
