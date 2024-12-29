<script module lang="ts">
	export interface RedirectProps {
		to: string;
	}
</script>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	const { to }: RedirectProps = $props();

	onMount(() => {
		goto(to);
	});
</script>
