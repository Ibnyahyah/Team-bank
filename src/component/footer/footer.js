import {Link} from 'react-router-dom';

export default function Footer(){
    return(
        <footer>
        <hr/>
        <div class="footer">
            <p>{(new Date().getFullYear())}. All Right Reserve</p>
                <ul>
                    <li><Link to="/"><i class="fab fa-facebook"></i></Link></li>
                    <li><Link to="/"><i class="fas fa-envelope-open-text"></i></Link></li>
                    <li><Link to="/"><i class="fab fa-twitter"></i></Link></li>
                </ul>
                <div class="row">
                    <p>Terms & Condition</p>
                    <p>Policy</p>
                </div>
        </div>
    </footer>
    )
}