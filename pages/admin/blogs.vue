<script setup>
	import { computed, reactive, ref } from "vue";

	const blogDialog = ref(false);
	const editingBlog = ref(null);
	const blogSaving = ref(false);
	const searchQuery = ref("");
	const filterStatus = ref("Todos");
	const sortBy = ref("Fecha (más reciente)");

	const blogForm = reactive({
		title: "",
		slug: "",
		excerpt: "",
		content: "",
		status: "draft",
		tags: "",
		featuredImage: "",
	});

	const blogHeaders = [
		{ title: "Título", key: "title", width: "40%" },
		{ title: "Estado", key: "status", width: "10%" },
		{ title: "Fecha", key: "date", width: "15%" },
		{ title: "Acciones", key: "actions", sortable: false, width: "10%" },
	];

	const blogs = ref([
		{
			id: 1,
			title: "Introducción a Vue 3 y Composition API",
			slug: "introduccion-vue-3-composition-api",
			excerpt:
				"Aprende los fundamentos de Vue 3 y cómo usar la nueva Composition API para crear aplicaciones más escalables.",
			content: "# Introducción a Vue 3\n\nVue 3 introduce muchas mejoras...",
			status: "published",
			category: "Desarrollo",
			tags: "vue, javascript, frontend",
			featuredImage: "/placeholder.svg?height=200&width=400",
			date: "2024-01-15",
		},
		{
			id: 2,
			title: "Mejores prácticas en CSS Grid",
			slug: "mejores-practicas-css-grid",
			excerpt:
				"Descubre cómo usar CSS Grid de manera efectiva para crear layouts modernos y responsivos.",
			content: "# CSS Grid\n\nCSS Grid es una herramienta poderosa...",
			status: "draft",
			category: "CSS",
			tags: "css, grid, layout",
			featuredImage: "/placeholder.svg?height=200&width=400",
			date: "2024-01-16",
		},
		{
			id: 3,
			title: "Optimización de rendimiento en aplicaciones web",
			slug: "optimizacion-rendimiento-web",
			excerpt:
				"Técnicas y estrategias para mejorar el rendimiento de tus aplicaciones web.",
			content: "# Optimización de rendimiento\n\nEl rendimiento es crucial...",
			status: "published",
			category: "Performance",
			tags: "performance, optimization, web",
			featuredImage: "/placeholder.svg?height=200&width=400",
			date: "2024-01-14",
		},
	]);

	const snackbar = reactive({
		show: false,
		message: "",
		color: "success",
	});

	const publishedBlogs = computed(
		() => blogs.value.filter((blog) => blog.status === "published").length
	);
	const draftBlogs = computed(
		() => blogs.value.filter((blog) => blog.status === "draft").length
	);

	const filteredBlogs = computed(() => {
		let filtered = blogs.value;
		if (filterStatus.value !== "Todos") {
			const status = filterStatus.value === "Publicado" ? "published" : "draft";
			filtered = filtered.filter((blog) => blog.status === status);
		}

		switch (sortBy.value) {
			case "Fecha (más antigua)":
				filtered = [...filtered].sort(
					(a, b) => new Date(a.date) - new Date(b.date)
				);
				break;
			case "Título A-Z":
				filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
				break;
			case "Título Z-A":
				filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
				break;
			case "Más vistas":
				filtered = [...filtered].sort((a, b) => b.views - a.views);
				break;
			default:
				filtered = [...filtered].sort(
					(a, b) => new Date(b.date) - new Date(a.date)
				);
		}

		return filtered;
	});

	const openBlogDialog = (blog = null) => {
		if (blog) {
			editingBlog.value = blog;
			Object.assign(blogForm, blog);
		} else {
			editingBlog.value = null;
			Object.assign(blogForm, {
				title: "",
				slug: "",
				excerpt: "",
				content: "",
				status: "draft",
				category: "",
				tags: "",
				featuredImage: "",
			});
		}
		blogDialog.value = true;
	};

	const closeBlogDialog = () => {
		blogDialog.value = false;
		editingBlog.value = null;
	};

	const generateSlug = () => {
		if (blogForm.title && !editingBlog.value) {
			blogForm.slug = blogForm.title
				.toLowerCase()
				.replace(/[^a-z0-9\s-]/g, "")
				.replace(/\s+/g, "-")
				.replace(/-+/g, "-")
				.trim();
		}
	};

	const saveBlog = async () => {
		blogSaving.value = true;

		setTimeout(() => {
			if (editingBlog.value) {
				const index = blogs.value.findIndex(
					(b) => b.id === editingBlog.value.id
				);
				if (index !== -1) {
					blogs.value[index] = {
						...blogForm,
						id: editingBlog.value.id,
						views: editingBlog.value.views,
					};
				}
				showNotification("Blog actualizado exitosamente", "success");
			} else {
				const newBlog = {
					...blogForm,
					id: Date.now(),
					views: 0,
					date: new Date().toISOString().split("T")[0],
				};
				blogs.value.unshift(newBlog);
				showNotification("Blog creado exitosamente", "success");
			}

			blogSaving.value = false;
			closeBlogDialog();
		}, 1000);
	};

	const deleteBlog = (id) => {
		blogs.value = blogs.value.filter((blog) => blog.id !== id);
		showNotification("Blog eliminado", "success");
	};

	const duplicateBlog = (blog) => {
		const duplicated = {
			...blog,
			id: Date.now(),
			title: `${blog.title} (Copia)`,
			slug: `${blog.slug}-copia`,
			status: "draft",
			views: 0,
			date: new Date().toISOString().split("T")[0],
		};
		blogs.value.unshift(duplicated);
		showNotification("Blog duplicado", "success");
	};

	const toggleBlogStatus = (blog) => {
		const newStatus = blog.status === "published" ? "draft" : "published";
		blog.status = newStatus;
		const statusText =
			newStatus === "published" ? "publicado" : "guardado como borrador";
		showNotification(`Blog ${statusText}`, "success");
	};

	const showNotification = (message, color = "success") => {
		snackbar.message = message;
		snackbar.color = color;
		snackbar.show = true;
	};
</script>
<template>
	<div class="ps-p-6">
		<div class="ps-max-w-7xl ps-mx-auto">
			<div class="ps-flex ps-justify-between ps-items-center ps-mb-6">
				<h1 class="ps-text-3xl ps-font-bold ps-text-gray-900">
					Gestión de Blogs
				</h1>
				<v-btn
					@click="openBlogDialog()"
					color="primary"
					prepend-icon="mdi-plus"
				>
					Nuevo Blog
				</v-btn>
			</div>

			<!-- Stats Cards -->
			<div class="ps-grid ps-grid-cols-1 md:ps-grid-cols-4 ps-gap-4 ps-mb-6">
				<v-card elevation="2" class="ps-p-4">
					<div class="ps-flex ps-items-center">
						<v-icon
							icon="mdi-post-outline"
							color="primary"
							size="32"
							class="ps-mr-3"
						></v-icon>
						<div>
							<p class="ps-text-2xl ps-font-bold ps-text-gray-900">
								{{ blogs.length }}
							</p>
							<p class="ps-text-sm ps-text-gray-600">Total Blogs</p>
						</div>
					</div>
				</v-card>

				<v-card elevation="2" class="ps-p-4">
					<div class="ps-flex ps-items-center">
						<v-icon
							icon="mdi-check-circle"
							color="success"
							size="32"
							class="ps-mr-3"
						></v-icon>
						<div>
							<p class="ps-text-2xl ps-font-bold ps-text-gray-900">
								{{ publishedBlogs }}
							</p>
							<p class="ps-text-sm ps-text-gray-600">Publicados</p>
						</div>
					</div>
				</v-card>

				<v-card elevation="2" class="ps-p-4">
					<div class="ps-flex ps-items-center">
						<v-icon
							icon="mdi-pencil"
							color="warning"
							size="32"
							class="ps-mr-3"
						></v-icon>
						<div>
							<p class="ps-text-2xl ps-font-bold ps-text-gray-900">
								{{ draftBlogs }}
							</p>
							<p class="ps-text-sm ps-text-gray-600">Borradores</p>
						</div>
					</div>
				</v-card>

				<v-card elevation="2" class="ps-p-4">
					<div class="ps-flex ps-items-center">
						<v-icon
							icon="mdi-eye"
							color="info"
							size="32"
							class="ps-mr-3"
						></v-icon>
						<div>
							<p class="ps-text-2xl ps-font-bold ps-text-gray-900">12.5K</p>
							<p class="ps-text-sm ps-text-gray-600">Vistas Totales</p>
						</div>
					</div>
				</v-card>
			</div>

			<!-- Search and Filter -->

			<!-- Blogs Table -->
			<v-card elevation="2">
				<v-data-table
					:headers="blogHeaders"
					:items="filteredBlogs"
					:search="searchQuery"
					class="ps-elevation-1"
					:items-per-page="10"
				>
					<template #item.title="{ item }">
						<div class="ps-flex ps-items-center ps-space-x-3">
							<div>
								<p class="ps-font-medium ps-text-gray-900">{{ item.title }}</p>
								<p class="ps-text-sm ps-text-gray-500">{{ item.excerpt }}</p>
							</div>
						</div>
					</template>

					<template #item.status="{ item }">
						<v-chip
							:color="item.status === 'published' ? 'success' : 'warning'"
							size="small"
						>
							{{ item.status === "published" ? "Publicado" : "Borrador" }}
						</v-chip>
					</template>

					<template #item.views="{ item }">
						<div class="ps-flex ps-items-center">
							<v-icon icon="mdi-eye" size="16" class="ps-mr-1"></v-icon>
							{{ item.views }}
						</div>
					</template>

					<template #item.actions="{ item }">
						<div class="ps-flex ps-space-x-1">
							<v-btn
								@click="deleteBlog(item.id)"
								icon="mdi-delete"
								size="small"
								variant="text"
								color="error"
							></v-btn>
						</div>
					</template>
				</v-data-table>
			</v-card>
		</div>

		<!-- Blog Dialog -->
		<v-dialog v-model="blogDialog" max-width="900px" persistent scrollable>
			<v-card>
				<v-card-title class="ps-flex ps-justify-between ps-items-center">
					<span>{{ editingBlog ? "Editar Blog" : "Nuevo Blog" }}</span>
					<v-btn
						@click="closeBlogDialog"
						icon="mdi-close"
						variant="text"
					></v-btn>
				</v-card-title>

				<v-card-text style="height: 600px">
					<v-form ref="blogForm">
						<div
							class="ps-grid ps-grid-cols-1 md:ps-grid-cols-2 ps-gap-4 ps-mb-4"
						>
							<v-text-field
								v-model="blogForm.title"
								label="Título *"
								variant="outlined"
								:rules="[(v) => !!v || 'Título es requerido']"
								@input="generateSlug"
							></v-text-field>

							<v-text-field
								v-model="blogForm.slug"
								label="Slug (URL) *"
								variant="outlined"
								:rules="[(v) => !!v || 'Slug es requerido']"
							></v-text-field>
						</div>

						<v-textarea
							v-model="blogForm.excerpt"
							label="Extracto"
							variant="outlined"
							rows="3"
							class="ps-mb-4"
							hint="Breve descripción del blog (opcional)"
						></v-textarea>

						<v-textarea
							v-model="blogForm.content"
							label="Contenido *"
							variant="outlined"
							rows="12"
							class="ps-mb-4"
							:rules="[(v) => !!v || 'Contenido es requerido']"
							hint="Contenido principal del blog en Markdown"
						></v-textarea>

						<div
							class="ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-4 ps-mb-4"
						>
							<v-select
								v-model="blogForm.status"
								:items="['draft', 'published']"
								:item-title="
									(item) => (item === 'draft' ? 'Borrador' : 'Publicado')
								"
								:item-value="(item) => item"
								label="Estado *"
								variant="outlined"
							></v-select>

							<v-text-field
								v-model="blogForm.category"
								label="Categoría"
								variant="outlined"
							></v-text-field>

							<v-text-field
								v-model="blogForm.tags"
								label="Tags (separados por coma)"
								variant="outlined"
							></v-text-field>
						</div>

						<v-text-field
							v-model="blogForm.featuredImage"
							label="Imagen destacada (URL)"
							variant="outlined"
							class="ps-mb-4"
						></v-text-field>
					</v-form>
				</v-card-text>

				<v-card-actions class="ps-px-6 ps-py-4">
					<v-spacer></v-spacer>
					<v-btn @click="closeBlogDialog" variant="text">Cancelar</v-btn>
					<v-btn @click="saveBlog" color="primary" :loading="blogSaving">
						{{ editingBlog ? "Actualizar" : "Crear" }}
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<!-- Snackbar -->
		<v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
			{{ snackbar.message }}
		</v-snackbar>
	</div>
</template>

<style scoped>
	.ps-p-6 {
		padding: 1.5rem;
	}
	.ps-p-4 {
		padding: 1rem;
	}
	.ps-px-6 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	.ps-py-4 {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	.ps-max-w-7xl {
		max-width: 80rem;
	}
	.ps-mx-auto {
		margin-left: auto;
		margin-right: auto;
	}
	.ps-flex {
		display: flex;
	}
	.ps-justify-between {
		justify-content: space-between;
	}
	.ps-items-center {
		align-items: center;
	}
	.ps-mb-6 {
		margin-bottom: 1.5rem;
	}
	.ps-mb-4 {
		margin-bottom: 1rem;
	}
	.ps-mr-3 {
		margin-right: 0.75rem;
	}
	.ps-mr-1 {
		margin-right: 0.25rem;
	}
	.ps-text-3xl {
		font-size: 1.875rem;
		line-height: 2.25rem;
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
	.ps-font-medium {
		font-weight: 500;
	}
	.ps-text-gray-900 {
		color: #111827;
	}
	.ps-text-gray-600 {
		color: #4b5563;
	}
	.ps-text-gray-500 {
		color: #6b7280;
	}
	.ps-grid {
		display: grid;
	}
	.ps-grid-cols-1 {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
	.ps-gap-4 {
		gap: 1rem;
	}
	.ps-space-x-3 > * + * {
		margin-left: 0.75rem;
	}
	.ps-space-x-1 > * + * {
		margin-left: 0.25rem;
	}
	.ps-flex-1 {
		flex: 1 1 0%;
	}
	.ps-elevation-1 {
		box-shadow:
			0 2px 1px -1px rgba(0, 0, 0, 0.2),
			0 1px 1px 0 rgba(0, 0, 0, 0.14),
			0 1px 3px 0 rgba(0, 0, 0, 0.12);
	}

	@media (min-width: 768px) {
		.md\:ps-grid-cols-2 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.md\:ps-grid-cols-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
