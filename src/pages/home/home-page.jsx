import { Link } from "react-router-dom";
import Footer from "../../component/footer/footer";
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
                    <div className="mt-3 mb-3 font-4">
                        <p>Stay in control of your finance with Team-Bank</p>
                    </div>
                <button className="btn"><Link to="/login" style={{color:'#133F77'}}>Get Started</Link></button>
                </div>
            </div>
        </div>
        <div style={{padding:'20px', background:'#133f77', color:'#133f77'}}>
            <div className="container">
                <div className="row gap-2">
                    <div className="col-6-sm col-3-md">
                        <div className="card">
                            <p>Make Deposit</p>
                        </div>
                    </div>
                    <div className="col-6-sm col-3-md">
                        <div className="card">
                            <p>Withdraw</p>
                        </div>
                    </div>
                    <div className="col-6-sm col-3-md">
                        <div className="card">
                            <p>Transfer</p>
                        </div>
                    </div>
                    <div className="col-6-sm col-3-md">
                        <div className="card">
                            <p>Online Payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container" id="about">
            <div className="row mt-5 mb-5">
                <div className="col-6-sm col-6-md">

                </div>
                <div className="col-6-sm col-6-md">
                    <h1>About Us</h1>
                    <h3 className="font-xl mt-2 mb-2">Not Fast Decision But<br/> Good Decision Fast.</h3>
                    <dl className="mb-1">
                        <dt className="font-4 font-lg mb-1">Our Goal</dt>
                        <dd>
                            <ul>
                                <li>To have the most fastest Transaction.</li>
                                <li>To Have the most secure payment system</li>
                                <li>Integgrating Fund Trsnfer For ecommerce Store</li>
                                <li>Have the best Costumer Care Center</li>
                            </ul>
                        </dd>
                    </dl>
                    <dl className="mb-1">
                        <dt className="font-4 font-lg mb-1">Our Vision</dt>
                        <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus quis amet molestiae voluptatum eligendi neque repellendus voluptates, dignissimos id at!</dd>
                    </dl>
                </div>
            </div>
            <div></div>
        </div>
            <Footer/>
        </>
    )
}
