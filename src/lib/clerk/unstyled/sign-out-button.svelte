<script lang="ts">
	import type { Clerk } from '@clerk/types';
	import type { Snippet } from 'svelte';
	import Button from '$lib/components/button/button.svelte';
	import { clerk } from '../store';

	const { children }: { children?: Snippet } = $props();

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
