import Vue from 'vue';
import Main from './views/Main.vue';
import store from './store';
import './style/index.css';
import { router } from "./router";
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';
import './directives/draggable.js';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(Main),
}).$mount('#root');
