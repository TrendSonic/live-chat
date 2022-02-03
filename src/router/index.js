import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// auth guard for chatroom
const requireAuth = (to, from, next) => {
	let user = projectAuth.currentUser
	if(!user) {
		next({ name: 'Welcome' })
	} else {
		next()
	}
}

// auth guard for welcome page
const requireNoAuth = (to, from, next) => {
	let user = projectAuth.currentUser
	if(user) {
		next({ name: 'Chatroom' })
	} else {
		next()
	}
}

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
		beforeEnter: requireNoAuth
  },
	{
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
		beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router