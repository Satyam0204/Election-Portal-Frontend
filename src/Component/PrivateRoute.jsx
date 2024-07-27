import {  Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({children}) => {

    let {authToken} = useContext(AuthContext);

    
    return(
        !authToken? <Navigate to='/login' /> : children
    )
}
export default PrivateRoute;