import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Pokdeng from '../views/Pokdeng.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Login from '../views/Login.vue'
const history = createWebHistory()
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pokdeng',
        name: 'Pokdeng',
        component: Pokdeng
    },
    {
        path: '/leader-board',
        name: 'Leaderboard',
        component: Leaderboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]
const router = createRouter({history,routes})
export default router