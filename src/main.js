import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";
import "animate.css";
import   "@fortawesome/fontawesome-free";
import "./sass/main.scss";



Vue.config.productionTip = false;

new Vue({
    router,

    store,
    render: h => h(App)
}).$mount("#app");
