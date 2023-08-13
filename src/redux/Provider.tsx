import { Provider } from "react-redux"
import { store } from "./store"

type reduxProviderPropType = {
    children: React.ReactNode
}

const ReduxProvider = ({ children }: reduxProviderPropType) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider