<script lang="ts">
	import Logo from '$lib/components/common/logo/Logo.svelte';
	import NavList from '$lib/components/common/navbar/NavList.svelte';
</script>

<footer class="maximum flex items-center justify-between py-8 border-t">
	<div class="flex items-center gap-10">

		<Logo />
	<NavList />
	</div>
	<p class="">
		Copyright @ {new Date().getFullYear()}. Paladin
	</p>
</footer>
