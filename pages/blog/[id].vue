<script setup lang="ts">
	import { blogPosts } from "@/data/blogPosts";
	import { navigateTo } from "nuxt/app";
	import { useRoute } from "vue-router";

	const route = useRoute();
	const id = Number(route.params.id);
	const post = blogPosts.find((p) => p.id === id) as any;

	if (!post) {
		// Si no existe, redirige al listado
		navigateTo("/blog");
	}
</script>

<template v-if="post">
	<section class="ps-container ps-mx-auto ps-py-16">
		<NuxtLink
			to="/blog"
			class="ps-text-gray-400 ps-hover:ps-text-white ps-block ps-mb-6"
		>
			← Volver al Blog
		</NuxtLink>

		<h1 class="ps-text-4xl ps-font-bold ps-mb-4">{{ post.title }}</h1>
		<p class="ps-text-gray-400 ps-mb-6">
			<span
				class="ps-bg-red-600 ps-text-white ps-text-xs ps-px-2 ps-py-1 ps-rounded"
			>
				{{ post.category }}
			</span>
			<span class="ps-ml-2">{{ post.date }}</span>
		</p>

		<img
			:src="post.image"
			:alt="post.title"
			class="ps-w-full ps-rounded-lg ps-mb-8"
		/>

		<div class="prose prose-invert">
			<div v-html="post.content"></div>
		</div>
	</section>
</template>

<style scoped>
	.ps-container {
		max-width: 800px;
		margin: 0 auto;
	}
	.prose h2,
	.prose h3 {
		margin-top: 1.5rem;
	}
</style>
