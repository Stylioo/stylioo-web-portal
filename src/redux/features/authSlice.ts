import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type userType = {
    uid: string,
    first_name: string,
    last_name: string,
    email: string,
    role: string,
}

const initialState = localStorage.getItem('STYLIOO_WEB_PORTAL_1_0_CURRENT_USER') ?
    JSON.parse(localStorage.getItem('STYLIOO_WEB_PORTAL_1_0_CURRENT_USER') as string) :
    {
        uid: "",
        first_name: "",
        last_name: "",
        email: "",
        role: "",
    }

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userType>) => {
            state.uid = action.payload.uid
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            state.email = action.payload.email
            state.role = action.payload.role
            localStorage.setItem('STYLIOO_WEB_PORTAL_1_0_CURRENT_USER', JSON.stringify(action.payload))

        },
        removeUser: (state) => {
            state.uid = ""
            state.first_name = ""
            state.last_name = ""
            state.email = ""
            state.role = ""
            localStorage.removeItem('STYLIOO_WEB_PORTAL_1_0_CURRENT_USER')
        },
        isLoggedIn: (state) => {
            return state.uid !== ""
        }

    },
})

export const { setUser, removeUser, isLoggedIn } = authSlice.actions
export const authReducer = authSlice.reducer
