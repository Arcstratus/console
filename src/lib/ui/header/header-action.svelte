<script lang="ts">
	import SignOutButton from '$lib/clerk/unstyled/sign-out-button.svelte';
	import { onMount } from 'svelte';

	let inputElement: HTMLInputElement;

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.ctrlKey && event.key.toLowerCase() == 'k') {
			event.preventDefault();
			inputElement.focus();
		}
	};

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<div class="middle hidden gap-4 md:flex">
	<input bind:this={inputElement} type="text" placeholder="Search" class="rounded px-2" />
	<SignOutButton />
</div>
