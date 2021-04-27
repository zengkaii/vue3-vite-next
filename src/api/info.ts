import axios from './baseAxios'


interface LoginByUsernameModel {
    phone: number | string,
    smsCode?: number | string,
    password?: number | string,
    type: number | string
}
export const loginByUsername: any = (params: LoginByUsernameModel) => {
    axios.post('/sys/user/login', params)
}