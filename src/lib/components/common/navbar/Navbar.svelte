<script>
	import Logo from '$lib/components/common/logo/Logo.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import NavList from './NavList.svelte';
</script>

<nav class="sticky top-0 z-50 shadow bg-white">
	<div class="py-4 flex items-center justify-between maximum">
		<Logo />
		<NavList />
		<Button class="capitalize block hover:bg-secondary   transition duration-300">get started</Button>
	</div>
</nav>
