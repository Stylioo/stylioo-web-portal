import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./features/authSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import userReducer from "../features/user/user"
import { apiSlice } from "./api/apiSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer, // [api
        user: userReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector