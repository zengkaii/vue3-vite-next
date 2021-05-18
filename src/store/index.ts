import { createStore } from "vuex"
import Types from './type'
import { loginByUsername } from "../api/info"
import localStorage from '@/utils/localStorage'
const store = createStore({
  state: {
    isLogin: false,
    token: ''
  },
  mutations: {

    // 登录
    [Types.LOGIN](state, { isLogin, token }) {
      state.isLogin = isLogin
      state.token = token
    }
  },
  getters: {
    isLogin: state => state.isLogin
  },
  actions: {
    [Types.LOGIN](type, option) {
      return loginByUsername({
        ...option
      })
        .then((res) => {
          localStorage.put("vite-token", res.data.token)
          let token = res.data.token
          this.commit(Types.LOGIN, { isLogin: true, token })
        })
    },
    [Types.LOGIN_OUT]() {
      return new Promise((resolve, reject) => {
        localStorage.remove('vite-token')
        resolve(true)
      })
    }
  }
})


export default store
