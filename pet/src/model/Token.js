
export const getToken=(name)=>{
    return localStorage.getItem(name)
}

export const setToken=(name,value)=>{
    return localStorage.setItem(name,value)
}

export const removeToken=(name)=>{
    return localStorage.removeItem(name)
}