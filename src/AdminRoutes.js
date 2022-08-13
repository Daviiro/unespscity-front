import { Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
    let auth = {'token': false}
    return ( auth.token ? <Outlet/> : <Navigate to = "/"/> )
}

export default AdminRoutes;