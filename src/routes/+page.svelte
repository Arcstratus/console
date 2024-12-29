<script lang="ts">
	import SignInButton from '$lib/clerk/unstyled/sign-in-button.svelte';
	import Card from '$lib/components/card/card.svelte';
	import CardHeader from '$lib/components/card/card-header.svelte';
	import CardContent from '$lib/components/card/card-content.svelte';
	import CardActions from '$lib/components/card/card-actions.svelte';
	import SignedOut from '$lib/clerk/control/signed-out.svelte';
	import SignedIn from '$lib/clerk/control/signed-in.svelte';
	import Redirect from '$lib/ui/redirect.svelte';
	import ad from '$lib/assets/ad.jpg';
</script>

<SignedIn>
	<Redirect to="/console" />
</SignedIn>

<SignedOut>
	<div class="container mx-auto h-screen w-full px-4">
		<div class="grid h-screen grid-cols-1 place-items-center gap-4 p-4 lg:grid-cols-2">
			<div class="center hidden h-3/4 flex-col lg:flex">
				<img src={ad} alt="ad" class="blur-xs rounded-lg object-cover opacity-75 shadow-lg" />
			</div>

			<Card class="h-3/4 w-full p-4">
				<CardHeader title="arcstratus" />
				<CardContent>
					<p>Welcome, back</p>
				</CardContent>
				<CardActions>
					<SignInButton />
				</CardActions>
			</Card>
		</div>
	</div>
</SignedOut>
