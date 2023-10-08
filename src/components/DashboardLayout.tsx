import useAuth from '@/hooks/useAuth'
import SideBar from './SideBar/SideBar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function DashboardLayout() {

    const auth = useAuth()
    const location = useLocation()

    return (
        auth && auth.isAuthenticated ?
            <SideBar><Outlet /> </SideBar> :
            <Navigate to='/signin' state={{ from: location }} replace />

    )
}

export default DashboardLayout