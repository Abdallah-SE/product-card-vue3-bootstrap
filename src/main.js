import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import router from './router'

/*//import './assets/styles/main.css'*/
//import './assets/styles/style.scss'
createApp(App).use(router).mount('#app')
/* = 
 * const app = createApp(App)
 * app.use(router)
 * app.mount(#app)
 * */
