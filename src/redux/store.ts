import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./features/authSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import userReducer from "../features/user/user"

export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector