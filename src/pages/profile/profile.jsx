import { Link } from 'react-router-dom'
import LoginNavbar from '../../component/navbar/login-navbar'
import ProfileEdit from '../../component/profile/profile-editor'
import Verification from '../../component/profile/verification'
import { Data, DataUrl } from './dummy-data'

export default function Profile(){
    
    // const user = JSON.parse(localStorage.getItem("profile"));

    return(
        <>
            <LoginNavbar/>
            <div class="container">
                <div class="card profile-card">
                    <div class="profile">
                        <div class="profile-img-box">
                            <img src="./logo192.jpeg" alt="Team_bracket"/><sup>Verfied</sup>
                        </div>
                        {Data.map((data)=>{
                            return(
                                <div className="row">
                                    <ProfileEdit data={data}/>
                                    <Verification data={data}/>
                                </div>
                                )
                            })}
                    </div>
                </div>
                <div className="card profile-bar">
                    {DataUrl.map((data)=>{
                        return(
                            <div>
                                <div className="row">
                                    <div className="card">
                                        <p><Link to={data.url}>{data.details}</Link></p>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}