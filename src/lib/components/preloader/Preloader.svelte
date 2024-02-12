<!-- <script lang="ts">
	// import { gsap } from "gsap";
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	let loading = true;

	onMount(() => {
		gsap.fromTo(
			'.screen',
			{ x: -100 },
			{
				rotation: 360,
				x: 100,
				opacity: 0,
				duration: 2,
				onComplete: () => {
					loading = false;
				}
			}
		);
	});
</script>

{#if loading}
	<section class="preloader">
		<div class="screen bg-red-400 h-28 w-28"></div>
	</section>
{/if}

<style>
	.preloader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
		transition: opacity 0.5s ease-out;
	}
</style> -->
