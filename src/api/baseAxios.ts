import axios, {AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios'
import * as Cookies from 'js-cookie'
import MD5 from 'blueimp-md5'
import LS from '../utils/LocalStorage'
let token: object = {}
const initToken = () => {
  setToken(LS.get('manToken') || Cookies.get('manToken'))
}
export const setToken = (tokenData: string) => {
  token = {
    Authorization: tokenData
  }
}
export const getToken = () => {
  return token
}
initToken()
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  config.url = `/`
  const time = Date.now()
  Object.assign(config.headers, getToken(), {
    'Accept-Key' : MD5(time + 'qwhduhasdhasuiodfhuiashd'),
    'Accept-Time': time,
    'Accept-Plat': 'h5'
  })
  return config
},  (error: AxiosError) => {
  console.log(`捕捉到请求错误`)
  console.log(error.message)
})
axios.interceptors.response.use(({data, status}: AxiosResponse) => {
  if (status !== 200) {
    console.log(`捕捉到回调错误`)
    data.data = data.data ? data.data : {}
    return data.data
  }
  if (data.status === '200' || data.success === true) {
    return data.data
  } else {
    return Promise.reject(data)
  }
},  (error: any) => {
  if (error.response.status === 404) {
  }
  console.log(error.message)
  return Promise.reject(error)
})
export default axios
