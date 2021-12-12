import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <footer>
        <hr/>
        <div class="footer">
            <p>{(new Date().getFullYear())}. All Right Reserve</p>
                <ul>
                    <li><Link to="/">About us</Link></li>
                    <li><Link to="/">Business</Link></li>
                    <li><Link to="/">Personal</Link></li>
                </ul>
                <div class="row">
                    <p>Terms & Condition</p>
                    <p>Policy</p>
                </div>
        </div>
    </footer>
    )
}