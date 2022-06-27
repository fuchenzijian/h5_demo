import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index"
import "./common.css"
import "./assets/lib/index"
const app = createApp(App);
app.use(router);
app.mount('#app')