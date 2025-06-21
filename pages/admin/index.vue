<script setup lang="ts">
	const form = ref();
	const email = ref("");
	const password = ref("");

	const authStore = useAuthStore();
	const router = useRouter();

	const handleSubmit = async () => {
		const { valid } = await form.value.validate();
		if (valid) {
			try {
				await authStore.login(email.value, password.value);
				alert("Inicio de sesión exitoso");
				router.push("/admin/home");
			} catch (err: any) {
				alert(err.toString());
			}
		}
	};
</script>

<template>
	<div
		class="ps-min-h-screen ps-flex ps-items-center ps-justify-center ps-bg-gradient-to-br ps-from-blue-500 ps-to-purple-600"
	>
		<v-card class="ps-w-full ps-max-w-md ps-mx-4" elevation="8">
			<v-card-title class="ps-text-center ps-py-6">
				<img
					src="../../assets/img/logoprestigio.png"
					alt="Guardias en acción"
					class="ps-rounded ps-shadow-lg ps-mx-auto"
					width="100"
					height="100"
				/>
				<h1 class="ps-text-2xl ps-font-bold ps-text-gray-800">
					Panel Administrativo
				</h1>
				<p class="ps-text-sm ps-text-gray-600 ps-mt-2">
					Ingresa tus credenciales para continuar
				</p>
			</v-card-title>

			<v-card-text class="ps-px-6 ps-pb-6">
				<v-form ref="form" @submit.prevent="handleSubmit">
					<v-text-field
						v-model="email"
						label="Email"
						placeholder="Email"
						variant="outlined"
						density="comfortable"
						class="sc-mb-4"
						color="primary"
						:rules="[(v) => !!v || 'email']"
					/>

					<v-text-field
						v-model="password"
						label="Contraseña"
						placeholder="Contraseña"
						variant="outlined"
						type="password"
						density="comfortable"
						class="sc-mb-6"
						color="primary"
						:rules="[(v) => !!v || 'Contraseña requerida']"
					/>

					<v-btn
						type="submit"
						color="primary"
						size="large"
						block
						class="ps-mb-4"
					>
						Iniciar Sesión
					</v-btn>

					<!-- <div class="ps-text-center">
						<a href="#" class="ps-text-sm ps-text-blue-600 hover:ps-underline">
							¿Olvidaste tu contraseña?
						</a>
					</div> -->
				</v-form>
			</v-card-text>
		</v-card>

		<!-- Snackbar para notificaciones -->
		<!-- <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
			{{ snackbar.message }}
		</v-snackbar> -->
	</div>
</template>

<style scoped>
	.ps-min-h-screen {
		min-height: 100vh;
	}
	.ps-flex {
		display: flex;
	}
	.ps-items-center {
		align-items: center;
	}
	.ps-justify-center {
		justify-content: center;
	}
	.ps-bg-gradient-to-br {
		background-image: linear-gradient(
			to bottom right,
			var(--tw-gradient-stops)
		);
	}
	.ps-from-blue-500 {
		--tw-gradient-from: #000;
		--tw-gradient-stops:
			var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0));
	}
	.ps-to-purple-600 {
		--tw-gradient-to: red;
	}
	.ps-w-full {
		width: 100%;
	}
	.ps-max-w-md {
		max-width: 28rem;
	}
	.ps-mx-4 {
		margin-left: 1rem;
		margin-right: 1rem;
	}
	.ps-text-center {
		text-align: center;
	}
	.ps-py-6 {
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}
	.ps-px-6 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	.ps-pb-6 {
		padding-bottom: 1.5rem;
	}
	.ps-text-2xl {
		font-size: 1.5rem;
		line-height: 2rem;
	}
	.ps-text-sm {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.ps-font-bold {
		font-weight: 700;
	}
	.ps-text-gray-800 {
		color: #1f2937;
	}
	.ps-text-gray-600 {
		color: #4b5563;
	}
	.ps-text-blue-600 {
		color: #2563eb;
	}
	.ps-mt-2 {
		margin-top: 0.5rem;
	}
	.ps-mb-4 {
		margin-bottom: 1rem;
	}
	.ps-mb-6 {
		margin-bottom: 1.5rem;
	}
	.hover\:ps-underline:hover {
		text-decoration: underline;
	}
</style>
