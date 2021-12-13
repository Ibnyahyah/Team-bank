import LoginNavbar from "../../component/navbar/login-navbar";
import SendMoney from "../../component/send-money/send-money";

export default function Sending(){
    return(
        <>
        <LoginNavbar/>
            <div className="mt-2 display-f align-center justify-center" style={{height:'70vh'}}>
                <SendMoney/>
            </div>
        </>
    )
}