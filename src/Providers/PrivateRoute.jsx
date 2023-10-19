/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../Components/Pages/error/LoadingPage";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return  <LoadingPage></LoadingPage>
    }

    if (user){
        return children;
    }



    return <Navigate state={location.pathname} to="/login" />;
        
};

export default PrivateRoute;