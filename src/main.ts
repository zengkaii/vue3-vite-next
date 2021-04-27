import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import 'vant/lib/index.css'
import './utils/beforeEach'

const app = createApp(App)
app.use(router)
app.mount('#app')
