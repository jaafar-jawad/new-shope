import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recipes from "../views/Recipes.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import MacAndCheese from "../views/recipesdList/MacAndCheese.vue";
import Cauliflower from  "../views/recipesdList/Cauliflower.vue";
import Hummus from "../views/recipesdList/Hummus.vue";
import Bean from "../views/recipesdList/Bean.vue";
import SweetPotato from "../views/recipesdList/SweetPotato.vue";
import Pizza from "../views/recipesdList/Pizza.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },

    {
        path: "/recipes",
        name: "recipes",
        component: Recipes
    },

    {
        path: "/login",
        name: "login",
        component: Login
    },

    {
        path: "/signup",
        name: "signup",
        component: Signup
    },

    {
        path: "/MacandCheese",
        name: "MacandCheese",
        component: MacAndCheese
    },
    {
        path: "/cauliflower",
        name: "cauliflower",
        component: Cauliflower
    },

    {
        path: "/hummus",
        name: "hummus",
        component: Hummus
    },

    {
        path: "/bean",
        name: "bean",
        component: Bean
    },


    {
        path: "/sweetpotato",
        name: "sweetpotato",
        component: SweetPotato
    },

    {
        path: "/pizza",
        name: "pizza",
        component: Pizza
    }

    
    

    
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
