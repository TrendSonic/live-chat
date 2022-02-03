<template>
	<form @submit.prevent="handleSubmit">
		<input type="email" required placeholder="Email" v-model="email">
		<input type="password" required placeholder="Password" v-model="password">
		<div class="error">
			{{ error }}
		</div>
		<button>Log in to the chatroom</button>
	</form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
	setup(props, context) {
		const { error, login } = useLogin()
		// refs
		const email = ref('')
		const password = ref('')

		// form submit
		const handleSubmit = async () => {
			await login(email.value, password.value)

			if(!error.value) {
				console.log('user logged')
				context.emit('login')
			}
		}

		return { email, password, handleSubmit, error }
	}
}
</script>
