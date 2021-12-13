import { useDispatch } from "react-redux";

export function LogOut(){

    const dispatch = useDispatch();

    const logOut = () =>{
        dispatch({type:'LOGOUT'});
        localStorage.clear();
        window.location.replace('/')
    }
    return<button onClick={logOut} className="btn">Log-out</button>
}