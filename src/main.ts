import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import 'vant/lib/index.css'
import './utils/beforeEach'
import store from './store/index'
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
