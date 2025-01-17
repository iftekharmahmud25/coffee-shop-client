import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { authContext } from "../provider/AuthProvider";




const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56 mx-auto flex justify-center items-center my-36"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;