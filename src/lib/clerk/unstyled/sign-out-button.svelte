<script lang="ts">
	import type { Clerk } from '@clerk/types';
	import Button from '$lib/components/button/button.svelte';
	import { clerk } from '../store';

	const { children } = $props();

	const signOut = (clerk: Clerk) => {
		clerk.signOut();
	};
</script>

{#if $clerk && $clerk.user}
	<Button onclick={() => signOut($clerk)}>
		{#if children}
			{@render children()}
		{:else}
			<p>Sign out</p>
		{/if}
	</Button>
{/if}
