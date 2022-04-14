import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Pokdeng from '../views/Pokdeng.vue'
import Leaderboard from '../views/Leaderboard.vue'
import Signin from '../views/Signin.vue'
import Signout from '../views/Signout.vue'
import Signup from '../views/Signup.vue'
import Edit from '../views/EditAccount.vue'
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
        path: '/sign-in',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/sign-out',
        name: 'Signout',
        component: Signout
    },
    {
        path: '/sign-up',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/edit-account',
        name: 'Edit',
        component: Edit
    }
]
const router = createRouter({history,routes})
export default router