import Vue from 'vue';
import App from './indexApp';
import api from 'src/api/install';
Vue.use(api);
new Vue({
    render: h => h(App)
}).$mount('#app');
