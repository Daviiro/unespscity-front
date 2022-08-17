import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./context/Auth/AuthContext";

const AdminRoutes = () => {
	const { user } = useContext(Context);
	//let auth = { token: true };
	return user.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
