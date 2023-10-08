import { useAppSelector } from "@/redux/store"

const useAuth = () => {

    const authState = useAppSelector((state) => state.auth)
    return authState
}

export default useAuth