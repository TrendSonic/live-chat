<template>
	<div class="welcome container">
		<h1>Welcome</h1>
		<div v-if="showLogin">
			<LoginForm @login="enterChat" />
			<p>Don't have an account? <span @click.prevent="switchFunc">Signup</span></p>
		</div>
		<div v-else>
			<SignUpForm @signed="enterChat" />
			<p>Have an account? <span @click.prevent="switchFunc">Login</span></p>
		</div>
	</div>
</template>

<script>
import SignUpForm from '../components/SingUpForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'

export default {
	components: { SignUpForm, LoginForm },
	setup() {
		const router = useRouter()
		const showLogin = ref(true)

		const enterChat = () => {
			router.push({ name: 'Chatroom' })
		}

		const switchFunc = () => {
			showLogin.value = !showLogin.value
		}

		return { showLogin, switchFunc, enterChat }
	}
}
</script>

<style>
.welcome {
	text-align: center;
	padding: 20px 0;
}

.welcome form {
	width: 300px;
	margin: 20px auto;
}

.welcome label {
	display: block;
	margin: 20px 0 10px;
}

.welcome input {
	width: 100%;
	padding: 10px;
	border-radius: 20px;
	border: 1px solid #eee;
	outline: none;
	color: #999;
	margin: 10px auto;
}

.welcome span {
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
}

.welcome button {
	margin: 20px auto;
}
</style>
