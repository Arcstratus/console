<script lang="ts">
	import { clerk } from '../store';

	const { children } = $props();
</script>

{#if $clerk && !$clerk.user}
	{@render children()}
{/if}
