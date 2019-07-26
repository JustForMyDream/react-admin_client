import ajax from './ajax'



export const relogin = (username,password) => ajax('/api/user/login',{username,password},"POST")
