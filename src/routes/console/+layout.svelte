<script lang="ts">
	import type { Snippet } from 'svelte';
	import Protect from '$lib/clerk/control/protect.svelte';

	let { children }: { children: Snippet } = $props();

	/* fixme: a demo code */
</script>

<Protect>
	<div class="flex min-h-screen flex-col">
		<header
			class="fixed top-0 z-50 flex h-16 w-full items-center border-b border-black bg-muted px-4 text-foreground"
		>
			<h1 class="text-xl font-bold">Website Title</h1>
		</header>

		<div class="flex flex-1 pt-16">
			<aside class="fixed left-0 top-16 h-screen w-64 overflow-y-auto bg-muted">
				<nav class="p-4">
					<ul class="space-y-2">
						<li class="rounded p-2 hover:bg-gray-200">Dashboard</li>
						<li class="rounded p-2 hover:bg-gray-200">Projects</li>
						<li class="rounded p-2 hover:bg-gray-200">Tasks</li>
						<li class="rounded p-2 hover:bg-gray-200">Settings</li>
					</ul>
				</nav>
			</aside>

			<main class="ml-64 flex-1 bg-background p-8 text-foreground">
				{@render children?.()}
			</main>
		</div>
	</div>
</Protect>
