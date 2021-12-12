import LoginNavbar from '../../component/navbar/login-navbar'
import ProfileEdit from '../../component/profile/profile-editor'
import Verification from '../../component/profile/verification'
import { Data } from './dummy-data'

export default function Profile(){
    return(
        <>
            <LoginNavbar/>
            <div class="container">
                <div class="card profile-card">
                    <div class="profile">
                        <div class="profile-img-box">
                            <img src="./logo192.png" alt="Team_bracket"/><sup>Verfied</sup>
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
            </div>
        </>
    )
}