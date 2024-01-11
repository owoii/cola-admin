// import 'uno.css'
import './assets/main.css'

import {createApp} from 'vue'

import App from './App.vue'
import {setupRouter} from './router'


const bootstrap = async () => {
    const app = createApp(App)

    // 配置路由
    setupRouter(app)

    app.mount('#app')
}

bootstrap()
