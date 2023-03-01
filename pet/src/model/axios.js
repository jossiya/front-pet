import axios from "axios";
import {BASE_URL} from '../config'
import { getToken } from './Token';

const authorization = getToken("Authorization")
const refreshToken =  getToken("Refresh_Token")


const headers={
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: null,
    Refresh_Token: null,
}

if (authorization !== undefined && authorization != null) {
    headers.Authorization = authorization;
  }
  if (refreshToken !== undefined && refreshToken != null) {
    headers.Refresh_Token = refreshToken;
  }


const instance = axios.create({
    baseURL : BASE_URL,
    headers,
});
export const requestLogin = async (body)=>{
    const response = await instance.post('/v1/members/login',body)
    return response;
}
export const requestBoardAll = async ()=>{
    const response = await instance.get(`/v1/boards/all`);
    return response.data
}
export const requestPostAll = async ()=>{
    const response = await instance.get(`/v1/posts/all`);
    return response.data
}
export const requestLogout= async ()=>{
    const response = await instance.post(`/v1/members/logout`)
    return response.data
}
 
export const requestRegister = async (body)=>{
    const response =await instance.post('/v1/members/signup',body)
    return response;
}

export const requestBoard=  async (id)=>{
    const response =await instance.get(`/v1/boards/${id.id}`)
    return response.data;
}
export const requestBoardCreate =  async (body)=>{
    const response =await instance.post(`/v1/boards/create`,body)
    return response.data;
}

export const requestBoardDelete = async (id)=>{
    const response =await instance.delete(`/v1/boards/withdrawl/${id}`)
    return response.data;
}
export const requestPostCreate = async (body)=>{
    const response =await instance.post(`/v1/posts/create`,body)
    return response.data;
}

export const  requestCommentCreate = async (body)=>{
    const response =await instance.post(`/v1/comments/create`,body)
    return response.data;
}