// Import the useAuth custom hook from the 'useAuth' module.
import useAuth from "@/hooks/useAuth"

// Import the Navigate component, Outlet component, and useLocation from 'react-router-dom'.
import { Navigate, Outlet, useLocation } from "react-router-dom"

// Define the ProtectedLayout component, which takes an 'allowedRole' prop.
function ProtectedLayout({ allowedRole }: { allowedRole: string[] }) {
    // Use the custom useAuth hook to access authentication information.
    const auth = useAuth()
     // Get the current location from react-router's useLocation hook.
    const location = useLocation()

    return (

    // Check if the user's role is among the allowed roles. If yes, render the child components (Outlet).
    // If not, check if the user is authenticated. If yes, redirect to the 'accessDenied' page with the current location.
    // If not authenticated, redirect to the 'signin' page with the current location.

        allowedRole.find(r => r === auth?.role) ? <Outlet /> :
            auth && auth.isAuthenticated ? <Navigate to='/accessDenied' state={{ from: location }} replace /> :
                <Navigate to='/signin' state={{ from: location }} replace />

    )
}

// Export the ProtectedLayout component for use in other parts of the application.

export default ProtectedLayout