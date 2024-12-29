<script module lang="ts">
	export interface CardHeaderProps {
		title: string;
	}
</script>

<script lang="ts">
	const { title }: CardHeaderProps = $props();
</script>

<div class="border-b-2 p-4 capitalize">
	<h3>{title}</h3>
</div>
