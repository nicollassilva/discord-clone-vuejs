import DiscordClone from './components/App/DiscordClone.vue'
import Login from './components/App/Pages/User/Login.vue'
import Register from './components/App/Pages/User/Register.vue'

export default [
    {
        name: 'App',
        path: '/',
        component: DiscordClone
    },
    {
        name: 'Login',
        path: '/login',
        component: Login
    },
    {
        name: 'Register',
        path: '/register',
        component: Register
    }
]