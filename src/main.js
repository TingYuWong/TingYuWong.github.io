import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import anime from 'animejs';

const app = createApp(App)

app.config.globalProperties.$anime = anime

app.use(store).use(router).mount('#app')
