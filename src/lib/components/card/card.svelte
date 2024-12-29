<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	interface CardProps extends HTMLAttributes<HTMLDivElement> {
		class?: string;
	}
	const { children, ...props }: CardProps = $props();
</script>

<div
	class={'grid grid-rows-[auto_1fr_auto] gap-4 rounded-lg border-4 bg-background p-4 ' +
		props.class}
>
	{@render children?.()}
</div>
