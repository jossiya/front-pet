import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    loginUser : null,
}
const userSlicer=createSlice({
    name : "user",
    initialState,
    reducers : {
        loginUser(state,action){
            state.loginSuccess=action.payload
            console.log("페이로드다 이거는 : ",action.payload)
        },
        registerUser(state,action) {
            state.registerSuccess=action.payload
        }

    }
})
export const {loginUser,registerUser} = userSlicer.actions
export default userSlicer.reducer;