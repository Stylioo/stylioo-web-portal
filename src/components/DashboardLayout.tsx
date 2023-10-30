import useAuth from '@/hooks/useAuth'
import SideBar from './SideBar/SideBar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

// Define the DashboardLayout component.

function DashboardLayout() {

    // Use the custom useAuth hook to access authentication information.
    const auth = useAuth()

    // Get the current location from react-router's useLocation hook.
    const location = useLocation()

    // Render the SideBar and its child components if the user is authenticated, or redirect to the 'signin' page if not.
    return (
        auth && auth.isAuthenticated ?
            <SideBar><Outlet /> </SideBar> :
            <Navigate to='/signin' state={{ from: location }} replace />

    )
}

// Export the DashboardLayout component for use in other parts of the application.

export default DashboardLayout