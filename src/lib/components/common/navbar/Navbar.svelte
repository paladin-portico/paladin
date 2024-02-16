<script>
	import Logo from '$lib/components/common/logo/Logo.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<nav class="shadow">
	<div class="py-4 flex items-center justify-between maximum">
		<Logo />

		<ul class="flex space-x-20 *:capitalize *:text-lg *:font-semibold">
			<li class="hover:text-primary transition"><a href="/">why paladin</a></li>
			<li class="hover:text-primary transition"><a href="/">pricing</a></li>
			<li class="hover:text-primary transition"><a href="/">release note</a></li>
		</ul>

		<Button class="capitalize block">get started</Button>
	</div>
</nav>
