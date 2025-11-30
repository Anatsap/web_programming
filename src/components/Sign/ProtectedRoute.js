import React from "react";
import { Navigate, Outlet, Redirect } from "react-router-dom";

const ProtectedRoute = () => {
    const auth = localStorage.getItem("loggedin");
    return auth ? <Outlet/> : <Navigate to={"/login"}/>;

};
export default ProtectedRoute;