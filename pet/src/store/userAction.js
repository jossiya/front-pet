import  {requestLogin, requestRegister} from "../model/axios"
import {loginUser,registerUser} from "./userSlice"
import { setToken } from '../model/Token'

export const login=(data)=>{
    return async(dispatch)=>{
        const request = await requestLogin(data)
            .then(response=>{
                let jwtToken =response.headers.get("Authorization")
                console.log(jwtToken)
                let Refresh_Token=response.headers.get("Refresh_Token")
                setToken("Authorization",jwtToken)
                setToken("Refresh_Token",Refresh_Token)
                console.log(Refresh_Token)
                return response.data})

            console.log("리스폰 데이터",request)
        return dispatch(loginUser(request))
    }
}

    
export const register=(data)=>{
    return async(dispatch)=>{
        const request = await requestRegister(data)
            .then(response=>{
                return response.data})
        return dispatch(registerUser(request))
    }
    
}