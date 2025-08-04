import { createApp } from 'vue';
import App from './App.vue';

//引入element-ui
import ElementPlus from 'element-plus';
//引入element ui的样式
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
