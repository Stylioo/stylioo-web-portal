import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    uid: "",
    name: "",
    email: "",
    type: "",
    photoUrl: "https://stylioo.blob.core.windows.net/images/chirasi.jpg",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid
            state.name = action.payload.name
            state.email = action.payload.email
            state.type = action.payload.type
            state.photoUrl = action.payload.photoUrl
        },

        changePicture: (state, action) => {
            state.photoUrl = action.payload
        }
    }
})


export const { setUser, changePicture } = userSlice.actions

export default userSlice.reducer