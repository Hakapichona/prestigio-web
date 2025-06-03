<template>
	<div class="ps-p-6">
		<div class="ps-max-w-6xl ps-mx-auto">
			<div class="ps-flex ps-justify-between ps-items-center ps-mb-6">
				<h1 class="ps-text-3xl ps-font-bold ps-text-gray-900">
					Gestión de Imágenes
				</h1>
				<v-btn
					@click="uploadDialog = true"
					color="primary"
					prepend-icon="mdi-upload"
				>
					Subir Imagen
				</v-btn>
			</div>

			<!-- Upload Stats -->
			<div class="ps-grid ps-grid-cols-1 md:ps-grid-cols-3 ps-gap-4 ps-mb-6">
				<v-card elevation="2" class="ps-p-4">
					<div class="ps-flex ps-items-center">
						<v-icon
							icon="mdi-image-multiple"
							color="primary"
							size="32"
							class="ps-mr-3"
						></v-icon>
						<div>
							<p class="ps-text-2xl ps-font-bold ps-text-gray-900">
								{{ images.length }}
							</p>
							<p class="ps-text-sm ps-text-gray-600">Total Imágenes</p>
						</div>
					</div>
				</v-card>

				<v-card elevation="2" class="ps-p-4">
					<div class="ps-flex ps-items-center">
						<v-icon
							icon="mdi-harddisk"
							color="success"
							size="32"
							class="ps-mr-3"
						></v-icon>
						<div>
							<p class="ps-text-2xl ps-font-bold ps-text-gray-900">2.4 GB</p>
							<p class="ps-text-sm ps-text-gray-600">Espacio Usado</p>
						</div>
					</div>
				</v-card>

				<v-card elevation="2" class="ps-p-4">
					<div class="ps-flex ps-items-center">
						<v-icon
							icon="mdi-calendar-today"
							color="info"
							size="32"
							class="ps-mr-3"
						></v-icon>
						<div>
							<p class="ps-text-2xl ps-font-bold ps-text-gray-900">12</p>
							<p class="ps-text-sm ps-text-gray-600">Este Mes</p>
						</div>
					</div>
				</v-card>
			</div>

			<!-- Search and Filter -->
			<v-card elevation="2" class="ps-mb-6">
				<v-card-text>
					<div class="ps-flex ps-gap-4 ps-items-center">
						<v-text-field
							v-model="searchQuery"
							label="Buscar imágenes..."
							prepend-inner-icon="mdi-magnify"
							variant="outlined"
							density="compact"
							class="ps-flex-1"
						></v-text-field>
						<v-select
							v-model="filterType"
							:items="imageTypes"
							label="Tipo"
							variant="outlined"
							density="compact"
							style="min-width: 120px"
						></v-select>
					</div>
				</v-card-text>
			</v-card>

			<!-- Images Gallery -->
			<v-card elevation="2">
				<v-card-title>Galería de Imágenes</v-card-title>
				<v-card-text>
					<div
						class="ps-grid ps-grid-cols-1 md:ps-grid-cols-3 lg:ps-grid-cols-4 xl:ps-grid-cols-5 ps-gap-4"
					>
						<div
							v-for="image in filteredImages"
							:key="image.id"
							class="ps-relative ps-group ps-bg-gray-100 ps-rounded-lg ps-overflow-hidden"
						>
							<img
								:src="image.url"
								:alt="image.name"
								class="ps-w-full ps-h-40 ps-object-cover"
								@click="openImageModal(image)"
							/>

							<!-- Overlay with actions -->
							<div
								class="ps-absolute ps-inset-0 ps-bg-black ps-bg-opacity-50 ps-opacity-0 group-hover:ps-opacity-100 ps-transition-opacity ps-flex ps-items-center ps-justify-center ps-space-x-2"
							>
								<v-btn
									@click="openImageModal(image)"
									icon="mdi-eye"
									size="small"
									color="white"
									variant="elevated"
								></v-btn>
								<v-btn
									@click="copyImageUrl(image.url)"
									icon="mdi-content-copy"
									size="small"
									color="white"
									variant="elevated"
								></v-btn>
								<v-btn
									@click="deleteImage(image.id)"
									icon="mdi-delete"
									size="small"
									color="error"
									variant="elevated"
								></v-btn>
							</div>

							<!-- Image info -->
							<div class="ps-p-3">
								<p
									class="ps-text-sm ps-font-medium ps-text-gray-900 ps-truncate"
								>
									{{ image.name }}
								</p>
								<p class="ps-text-xs ps-text-gray-500">
									{{ image.size }} • {{ image.type }}
								</p>
							</div>
						</div>
					</div>
				</v-card-text>
			</v-card>
		</div>

		<!-- Upload Dialog -->
		<v-dialog v-model="uploadDialog" max-width="600px" persistent>
			<v-card>
				<v-card-title>Subir Nueva Imagen</v-card-title>
				<v-card-text>
					<v-file-input
						v-model="selectedFiles"
						label="Seleccionar imágenes"
						accept="image/*"
						multiple
						prepend-icon="mdi-camera"
						variant="outlined"
						@change="previewImages"
						class="ps-mb-4"
					></v-file-input>

					<div v-if="imagePreviews.length > 0" class="ps-mb-4">
						<h4 class="ps-text-lg ps-font-medium ps-mb-2">Vista Previa:</h4>
						<div class="ps-grid ps-grid-cols-2 ps-gap-4">
							<div
								v-for="(preview, index) in imagePreviews"
								:key="index"
								class="ps-relative"
							>
								<img
									:src="preview.url"
									:alt="preview.name"
									class="ps-w-full ps-h-32 ps-object-cover ps-rounded"
								/>
								<p class="ps-text-xs ps-text-gray-600 ps-mt-1 ps-truncate">
									{{ preview.name }}
								</p>
							</div>
						</div>
					</div>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn @click="closeUploadDialog" variant="text">Cancelar</v-btn>
					<v-btn
						@click="uploadImages"
						color="primary"
						:disabled="!selectedFiles || selectedFiles.length === 0"
						:loading="uploadLoading"
					>
						Subir {{ selectedFiles ? selectedFiles.length : 0 }} imagen(es)
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<!-- Image Modal -->
		<v-dialog v-model="imageModal" max-width="800px">
			<v-card v-if="selectedImage">
				<v-card-title>{{ selectedImage.name }}</v-card-title>
				<v-card-text>
					<img
						:src="selectedImage.url"
						:alt="selectedImage.name"
						class="ps-w-full ps-h-auto ps-max-h-96 ps-object-contain"
					/>
					<div class="ps-mt-4 ps-grid ps-grid-cols-2 ps-gap-4 ps-text-sm">
						<div><strong>Tamaño:</strong> {{ selectedImage.size }}</div>
						<div><strong>Tipo:</strong> {{ selectedImage.type }}</div>
						<div><strong>Subida:</strong> {{ selectedImage.uploadDate }}</div>
						<div>
							<strong>Dimensiones:</strong> {{ selectedImage.dimensions }}
						</div>
					</div>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn @click="imageModal = false" variant="text">Cerrar</v-btn>
					<v-btn @click="copyImageUrl(selectedImage.url)" color="primary"
						>Copiar URL</v-btn
					>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<!-- Snackbar -->
		<v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
			{{ snackbar.message }}
		</v-snackbar>
	</div>
</template>

<script setup>
	import { computed, reactive, ref } from "vue";

	const uploadDialog = ref(false);
	const imageModal = ref(false);
	const selectedFiles = ref(null);
	const selectedImage = ref(null);
	const uploadLoading = ref(false);
	const searchQuery = ref("");
	const filterType = ref("Todos");

	const imagePreviews = ref([]);

	const imageTypes = ["Todos", "JPG", "PNG", "GIF", "SVG"];

	const images = ref([
		{
			id: 1,
			name: "hero-banner.jpg",
			url: "/placeholder.svg?height=300&width=400",
			size: "2.4 MB",
			type: "JPG",
			uploadDate: "2024-01-15",
			dimensions: "1920x1080",
		},
		{
			id: 2,
			name: "product-image.png",
			url: "/placeholder.svg?height=300&width=400",
			size: "1.8 MB",
			type: "PNG",
			uploadDate: "2024-01-14",
			dimensions: "1200x800",
		},
		{
			id: 3,
			name: "logo.svg",
			url: "/placeholder.svg?height=300&width=400",
			size: "45 KB",
			type: "SVG",
			uploadDate: "2024-01-13",
			dimensions: "500x200",
		},
		{
			id: 4,
			name: "background.jpg",
			url: "/placeholder.svg?height=300&width=400",
			size: "3.2 MB",
			type: "JPG",
			uploadDate: "2024-01-12",
			dimensions: "2560x1440",
		},
	]);

	const snackbar = reactive({
		show: false,
		message: "",
		color: "success",
	});

	const filteredImages = computed(() => {
		let filtered = images.value;

		if (searchQuery.value) {
			filtered = filtered.filter((img) =>
				img.name.toLowerCase().includes(searchQuery.value.toLowerCase())
			);
		}

		if (filterType.value !== "Todos") {
			filtered = filtered.filter((img) => img.type === filterType.value);
		}

		return filtered;
	});

	const previewImages = () => {
		imagePreviews.value = [];
		if (selectedFiles.value) {
			Array.from(selectedFiles.value).forEach((file) => {
				const reader = new FileReader();
				reader.onload = (e) => {
					imagePreviews.value.push({
						name: file.name,
						url: e.target.result,
					});
				};
				reader.readAsDataURL(file);
			});
		}
	};

	const uploadImages = async () => {
		uploadLoading.value = true;

		setTimeout(() => {
			if (selectedFiles.value) {
				Array.from(selectedFiles.value).forEach((file, index) => {
					const newImage = {
						id: Date.now() + index,
						name: file.name,
						url:
							imagePreviews.value[index]?.url ||
							"/placeholder.svg?height=300&width=400",
						size: (file.size / (1024 * 1024)).toFixed(1) + " MB",
						type: file.type.split("/")[1].toUpperCase(),
						uploadDate: new Date().toISOString().split("T")[0],
						dimensions: "1920x1080",
					};
					images.value.unshift(newImage);
				});
			}

			uploadLoading.value = false;
			closeUploadDialog();
			showNotification(
				`${selectedFiles.value.length} imagen(es) subida(s) exitosamente`,
				"success"
			);
		}, 2000);
	};

	const closeUploadDialog = () => {
		uploadDialog.value = false;
		selectedFiles.value = null;
		imagePreviews.value = [];
	};

	const openImageModal = (image) => {
		selectedImage.value = image;
		imageModal.value = true;
	};

	const deleteImage = (id) => {
		images.value = images.value.filter((img) => img.id !== id);
		showNotification("Imagen eliminada", "success");
	};

	const copyImageUrl = async (url) => {
		try {
			await navigator.clipboard.writeText(url);
			showNotification("URL copiada al portapapeles", "success");
		} catch (err) {
			showNotification("Error al copiar URL", "error");
		}
	};

	const showNotification = (message, color = "success") => {
		snackbar.message = message;
		snackbar.color = color;
		snackbar.show = true;
	};
</script>

<style scoped>
	.ps-p-6 {
		padding: 1.5rem;
	}
	.ps-p-4 {
		padding: 1rem;
	}
	.ps-p-3 {
		padding: 0.75rem;
	}
	.ps-max-w-6xl {
		max-width: 72rem;
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
	.ps-mb-2 {
		margin-bottom: 0.5rem;
	}
	.ps-mr-3 {
		margin-right: 0.75rem;
	}
	.ps-mt-4 {
		margin-top: 1rem;
	}
	.ps-mt-1 {
		margin-top: 0.25rem;
	}
	.ps-text-3xl {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}
	.ps-text-2xl {
		font-size: 1.5rem;
		line-height: 2rem;
	}
	.ps-text-lg {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}
	.ps-text-sm {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.ps-text-xs {
		font-size: 0.75rem;
		line-height: 1rem;
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
	.ps-grid-cols-2 {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.ps-gap-4 {
		gap: 1rem;
	}
	.ps-gap-2 {
		gap: 0.5rem;
	}
	.ps-relative {
		position: relative;
	}
	.ps-group {
	}
	.ps-bg-gray-100 {
		background-color: #f3f4f6;
	}
	.ps-rounded-lg {
		border-radius: 0.5rem;
	}
	.ps-rounded {
		border-radius: 0.25rem;
	}
	.ps-overflow-hidden {
		overflow: hidden;
	}
	.ps-w-full {
		width: 100%;
	}
	.ps-h-40 {
		height: 10rem;
	}
	.ps-h-32 {
		height: 8rem;
	}
	.ps-h-auto {
		height: auto;
	}
	.ps-max-h-96 {
		max-height: 24rem;
	}
	.ps-object-cover {
		object-fit: cover;
	}
	.ps-object-contain {
		object-fit: contain;
	}
	.ps-absolute {
		position: absolute;
	}
	.ps-inset-0 {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.ps-bg-black {
		background-color: #000000;
	}
	.ps-bg-opacity-50 {
		background-opacity: 0.5;
	}
	.ps-opacity-0 {
		opacity: 0;
	}
	.ps-transition-opacity {
		transition-property: opacity;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}
	.ps-justify-center {
		justify-content: center;
	}
	.ps-space-x-2 > * + * {
		margin-left: 0.5rem;
	}
	.ps-truncate {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.ps-flex-1 {
		flex: 1 1 0%;
	}

	@media (min-width: 768px) {
		.md\:ps-grid-cols-3 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.lg\:ps-grid-cols-4 {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (min-width: 1280px) {
		.xl\:ps-grid-cols-5 {
			grid-template-columns: repeat(5, minmax(0, 1fr));
		}
	}

	.group:hover .group-hover\:ps-opacity-100 {
		opacity: 1;
	}
</style>
