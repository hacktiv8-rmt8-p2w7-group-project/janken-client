import Vue from "vue"
import VueRouter from "vue-router"
import DashBoard from "../views/DashBoard.vue"
import Login from "../views/Login.vue"
import GameRoom from "../views/GameRoom.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
        // beforeEnter:(to, from, next) => {
        //     if(localStorage.access_token && to.name === 'Login') {
        //         next({ name: 'DashBoard' })
        //     } else {
        //         next()
        //     }
        // }
    },
    {
        path: "/dashboard",
        name: "DashBoard",
        component: DashBoard,
    },
    {
        path: "/dashboard/:gameId",
        name: "GameRoom",
        component: GameRoom,
    },
    {
        path: "/dummy",
        name: "GameRoom",
        component: GameRoom,
    },
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, form, next) => {
    if (!localStorage.access_token && to.name !== "Login") {
        next({ name: "Login" })
    } else {
        next()
    }
})

export default router
