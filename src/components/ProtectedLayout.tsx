import useAuth from "@/hooks/useAuth"
import { Navigate, Outlet, useLocation } from "react-router-dom"

function ProtectedLayout({ allowedRole }: { allowedRole: string[] }) {

    const auth = useAuth()
    const location = useLocation()

    return (

        allowedRole.find(r => r === auth?.role) ? <Outlet /> :
            auth && auth.isAuthenticated ? <Navigate to='/accessDenied' state={{ from: location }} replace /> :
                <Navigate to='/signin' state={{ from: location }} replace />

    )
}

export default ProtectedLayout