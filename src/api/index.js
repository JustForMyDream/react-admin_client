import ajax from './ajax'

export const relogin = (username,password) => ajax('/login',{username,password},"POST")
