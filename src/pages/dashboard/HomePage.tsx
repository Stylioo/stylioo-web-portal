import ROLE from "@/constants/roles"
import { useAppSelector } from "@/redux/store"
import OwnerInsights from "../OwnerInsights/OwnerInsights"
import ReceptionistInsigntsPage from "../receptionistHome/HomePage"

function HomePage() {
    const currentUserRole = useAppSelector(state => state.auth.role)

    if (currentUserRole === ROLE.OWNER) {
        return <OwnerInsights />
    }
    else if (currentUserRole === ROLE.MANAGER) {
        return <h1>Manager Dashboard</h1>
    }
    else if (currentUserRole === ROLE.RECEPTIONIST) {
        return <ReceptionistInsigntsPage />
    }
    else if (currentUserRole === ROLE.ADMIN) {
        return <h1>Admin Dashboard</h1>
    }

    return <h1>Page Not Found</h1>
}

export default HomePage