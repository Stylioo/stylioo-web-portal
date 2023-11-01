// Import the useAppSelector function from the application's Redux store.
import { useAppSelector } from "@/redux/store"

// Define a custom hook called useAuth.
const useAuth = () => {
// Use the useAppSelector hook to access the auth state from the Redux store.
    const authState = useAppSelector((state) => state.auth)

    // Return the authState, which includes information about authentication.
    return authState
}

// Export the useAuth custom hook for use in other parts of the application.
export default useAuth