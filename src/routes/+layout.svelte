<script lang="ts">
	import { i18n } from '$lib/i18n';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import '../app.css';
	import { type Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>Arcstratus</title>

	<script>
		if ('color-theme' in localStorage) {
			localStorage.getItem('color-theme') === 'dark'
				? document.documentElement.classList.add('dark')
				: document.documentElement.classList.remove('dark');
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
			}
		}
	</script>
</svelte:head>

<ParaglideJS {i18n}>
	{@render children()}
</ParaglideJS>
