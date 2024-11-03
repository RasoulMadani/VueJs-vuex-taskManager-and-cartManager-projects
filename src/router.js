import {createRouter, createWebHistory} from "vue-router";
import Home from "./pages/Home.vue";
import TaskIndex from "./pages/Task.vue";

const routes=[
    {name: 'home',path:'/',component:Home},
    {name: 'tasks',path:'/tasks',component:TaskIndex},
];


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;