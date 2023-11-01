import { createSlice } from "@reduxjs/toolkit"


/* Define the initial state for the user slice */

const initialState = {
    uid: "",
    name: "",
    email: "",
    type: "",
    photoUrl: "https://stylioo.blob.core.windows.net/images/chirasi.jpg",
}

/* Create a user slice using createSlice */

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
         /* Define the setUser action */
        setUser: (state, action) => {
            state.uid = action.payload.uid
            state.name = action.payload.name
            state.email = action.payload.email
            state.type = action.payload.type
            state.photoUrl = action.payload.photoUrl
        },

        /* Define the changePicture action */
        changePicture: (state, action) => {
            state.photoUrl = action.payload
        }
    }
})

/* Define actions setUser and changePicture from the user slice */

export const { setUser, changePicture } = userSlice.actions

/* Export the user slice reducer */
export default userSlice.reducer