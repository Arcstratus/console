<script lang="ts">
	import type { Snippet } from 'svelte';
	import SignedIn from './signed-in.svelte';
	import SignedOut from './signed-out.svelte';
	import Redirect from '$lib/ui/redirect.svelte';

	const { children }: { children: Snippet } = $props();
</script>

<SignedIn>
	{@render children()}
</SignedIn>
<SignedOut>
	<Redirect to="/" />
</SignedOut>
