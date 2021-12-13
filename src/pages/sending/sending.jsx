import LoginNavbar from "../../component/navbar/login-navbar";
import SendMoney from "../../component/send-money/send-money";

export default function Sending(){
    return(
        <>
        <LoginNavbar/>
            <div>
                <SendMoney/>
            </div>
        </>
    )
}