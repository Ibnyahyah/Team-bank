import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row mb-2">
                    <div className="col-4-sm"></div>
                    <div className="col-2-sm">
                        <ul>
                            <h4 className="mb-1 font-2">Quick Link</h4>
                            <li>About us</li>
                            <li>Business</li>
                            <li>Help Desk</li>
                            <li>Faqs</li>
                        </ul>
                    </div>
                    <div className="col-2-sm">
                        <ul>
                            <h4 className="mb-1 font-2">Features</h4>
                            <li>Online Banking</li>
                            <li>Store Payment</li>
                            <li>Investor channel</li>
                        </ul>
                    </div>
                    <div className="col-3-sm">
                        <ul>
                            <h4 className="mb-1 font-2">Contact Us</h4>
                            <li>Phone: +2348100000000</li>
                            <li>Email: TeamBracket@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        <hr/>
        <div className="footer">
            <p>{(new Date().getFullYear())}. All Right Reserve</p>
                <ul>
                    <li><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                    <li><Link to="/"><i className="fas fa-envelope-open-text"></i></Link></li>
                    <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                </ul>
                <div className="row">
                    <p>Terms & Condition</p>
                    <p>Policy</p>
                </div>
        </div>
    </footer>
    )
}