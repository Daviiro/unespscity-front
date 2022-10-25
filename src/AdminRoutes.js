import { Navigate, Outlet } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "./context/Auth/AuthContext";

const AdminRoutes = () => {
	const { user } = useContext(Context);

	//return user.isAdmin ? <Outlet /> : <Navigate to="/" />;
	return true ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
