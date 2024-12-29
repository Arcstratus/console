<script module lang="ts">
	import type { Snippet } from 'svelte';

	export interface SignInButtonProps {
		// show sign-in modal or redirect to custom sign-in page
		mode?: 'modal' | 'redirect' | undefined;

		// redirect to this url after sign-in
		afterSignInUrl?: string | undefined;

		// redirect to this url after sign-up
		afterSignUpUrl?: string | undefined;

		// only used when mode is "redirect" and custom sign-in page
		redirectUrl?: string | undefined;

		children?: Snippet;
	}
</script>

<script lang="ts">
	import type { Clerk } from '@clerk/types';
	import Button from '$lib/components/button/button.svelte';
	import { clerk } from '../store';

	const {
		afterSignInUrl,
		afterSignUpUrl,
		redirectUrl,
		mode = 'modal',
		children
	}: SignInButtonProps = $props();

	const signIn = (clerk: Clerk) => {
		const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
		if (mode === 'modal') {
			clerk?.openSignIn(opts);
		} else {
			clerk?.redirectToSignIn(opts);
		}
	};
</script>

{#if $clerk && !$clerk.user}
	<Button onclick={() => signIn($clerk)} class="w-full">
		{#if children}
			{@render children()}
		{:else}
			<p>Sign In</p>
		{/if}
	</Button>
{/if}
