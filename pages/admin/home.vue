<script setup lang="ts">
	const router = useRouter();
	const stats = ref([
		{
			title: "Total Blogs",
			value: "24",
			icon: "mdi-post-outline",
			color: "primary",
			trend: 12,
		},
		{
			title: "Imágenes",
			value: "156",
			icon: "mdi-image-multiple",
			color: "success",
			trend: 8,
		},
	]);

	const recentActivity = ref([
		{
			id: 1,
			action: "Nuevo blog publicado",
			time: "Hace 2 horas",
			icon: "mdi-plus",
			color: "success",
		},
		{
			id: 2,
			action: "Imagen subida",
			time: "Hace 4 horas",
			icon: "mdi-upload",
			color: "info",
		},
		{
			id: 3,
			action: "Blog editado",
			time: "Hace 1 día",
			icon: "mdi-pencil",
			color: "warning",
		},
		{
			id: 4,
			action: "Usuario registrado",
			time: "Hace 2 días",
			icon: "mdi-account-plus",
			color: "primary",
		},
	]);

	const shortcuts = ref([
		{
			title: "Nuevo Blog",
			action: "../admin/blogs",
			icon: "mdi-plus",
		},
		{
			title: "Subir Imagen",
			action: "../admin/images",
			icon: "mdi-upload",
		},
		{
			title: "Ver Blogs",
			action: "blogs",
			icon: "mdi-view-list",
		},
		{
			title: "Galería",
			action: "images",
			icon: "mdi-view-grid",
		},
	]);
</script>

<template>
	<div class="ps-p-6">
		<div class="ps-max-w-7xl ps-mx-auto">
			<h1 class="ps-text-3xl ps-font-bold ps-text-gray-900 ps-mb-8">
				Dashboard
			</h1>

			<!-- Stats Cards -->
			<div
				class="ps-grid ps-grid-cols-1 md:ps-grid-cols-2 lg:ps-grid-cols-4 ps-gap-6 ps-mb-8"
			>
				<v-card
					v-for="stat in stats"
					:key="stat.title"
					elevation="2"
					class="ps-p-6"
				>
					<div class="ps-flex ps-items-center ps-justify-between">
						<div>
							<p class="ps-text-sm ps-font-medium ps-text-gray-600">
								{{ stat.title }}
							</p>
							<p class="ps-text-2xl ps-font-bold ps-text-gray-900">
								{{ stat.value }}
							</p>
						</div>
						<v-icon :icon="stat.icon" :color="stat.color" size="40"></v-icon>
					</div>
				</v-card>
			</div>

			<!-- Charts Section -->
			<div class="ps-grid ps-grid-cols-1 lg:ps-grid-cols-2 ps-gap-6 ps-mb-8">
				<v-card elevation="2">
					<v-card-title>Actividad Reciente</v-card-title>
					<v-card-text>
						<div class="ps-space-y-4">
							<div
								v-for="activity in recentActivity"
								:key="activity.id"
								class="ps-flex ps-items-center ps-space-x-3"
							>
								<v-avatar :color="activity.color" size="32">
									<v-icon
										:icon="activity.icon"
										color="white"
										size="16"
									></v-icon>
								</v-avatar>
								<div class="ps-flex-1">
									<p class="ps-text-sm ps-font-medium ps-text-gray-900">
										{{ activity.action }}
									</p>
									<p class="ps-text-xs ps-text-gray-500">{{ activity.time }}</p>
								</div>
							</div>
						</div>
					</v-card-text>
				</v-card>

				<v-card elevation="2">
					<v-card-title>Accesos Rápidos</v-card-title>
					<v-card-text>
						<div class="ps-grid ps-grid-cols-2 ps-gap-4">
							<v-btn
								v-for="shortcut in shortcuts"
								:key="shortcut.title"
								@click="router.push(shortcut.action)"
								variant="outlined"
								class="ps-h-20 ps-flex-col"
							>
								<v-icon :icon="shortcut.icon" class="ps-mb-2"></v-icon>
								<span class="ps-text-xs">{{ shortcut.title }}</span>
							</v-btn>
						</div>
					</v-card-text>
				</v-card>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.ps-p-6 {
		padding: 1.5rem;
	}
	.ps-max-w-7xl {
		max-width: 80rem;
	}
	.ps-mx-auto {
		margin-left: auto;
		margin-right: auto;
	}
	.ps-text-3xl {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}
	.ps-font-bold {
		font-weight: 700;
	}
	.ps-text-gray-900 {
		color: #111827;
	}
	.ps-mb-8 {
		margin-bottom: 2rem;
	}
	.ps-grid {
		display: grid;
	}
	.ps-grid-cols-1 {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	.ps-grid-cols-2 {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.ps-gap-6 {
		gap: 1.5rem;
	}
	.ps-gap-4 {
		gap: 1rem;
	}
	.ps-flex {
		display: flex;
	}
	.ps-items-center {
		align-items: center;
	}
	.ps-justify-between {
		justify-content: space-between;
	}
	.ps-text-sm {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.ps-text-xs {
		font-size: 0.75rem;
		line-height: 1rem;
	}
	.ps-text-2xl {
		font-size: 1.5rem;
		line-height: 2rem;
	}
	.ps-font-medium {
		font-weight: 500;
	}
	.ps-text-gray-600 {
		color: #4b5563;
	}
	.ps-text-gray-500 {
		color: #6b7280;
	}
	.ps-text-green-600 {
		color: #059669;
	}
	.ps-text-red-600 {
		color: #dc2626;
	}
	.ps-mt-4 {
		margin-top: 1rem;
	}
	.ps-ml-2 {
		margin-left: 0.5rem;
	}
	.ps-mb-2 {
		margin-bottom: 0.5rem;
	}
	.ps-space-y-4 > * + * {
		margin-top: 1rem;
	}
	.ps-space-x-3 > * + * {
		margin-left: 0.75rem;
	}
	.ps-flex-1 {
		flex: 1 1 0;
	}
	.ps-h-20 {
		height: 5rem;
	}
	.ps-flex-col {
		flex-direction: column;
	}

	@media (min-width: 768px) {
		.md\:ps-grid-cols-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.lg\:ps-grid-cols-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
		.lg\:ps-grid-cols-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
