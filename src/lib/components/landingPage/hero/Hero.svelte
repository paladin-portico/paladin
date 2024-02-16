<script>
	import * as Alert from '$lib/components/ui/alert';
	import { AlertCircle } from 'lucide-svelte';
	import { onDestroy, onMount } from 'svelte';
	
	let imgSrc = 'public/images/img.jpg';

	onMount(() => {

		let interval = setInterval(() => {
			imgSrc = imgSrc === 'public/images/cv.png' ? 'public/images/img.jpg' : 'public/images/cv.png';
		}, 3000);

		onDestroy(() => {
			clearInterval(interval);
		});
  });
  
</script>

<section class="relative h-full">
	<div class="maximum w-full h-full flex">
		<div class="hero-texts">
			<Alert.Root class="w-max max-w-lg">
				<Alert.Title class="flex items-center gap-2">
					<AlertCircle />
					<p>Beta Mode</p>
				</Alert.Title>
				<Alert.Description
					>Paladin is actively being developed, hence, not fully functional. Check the
					<a href="/" class="underline text-primary">release notes</a>
					for updates</Alert.Description
				>
			</Alert.Root>

			<div class="text-5xl font-bold uppercase mt-10">
				<p>build your cv</p>
			</div>

			<div class="flex gap-14 mt-20">
				<div class="w-58">
					<p class="text-xl capitalize mt-4 font-bold">Lorem ipsum dolor sit.</p>

					<p class="text-sm mt-4">Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>

					<div class="capitalize underline mt-10 font-bold">
						<a href=" ">get started</a>
					</div>

				</div>

				<div class="w-58">
					<p class="text-xl capitalize mt-4 font-bold">ipsum dolor sit.</p>

					<p class="text-sm mt-4">Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>

					<div class="capitalize underline mt-10 font-bold">
						<a href=" ">get started</a>
					</div>
				</div>
			</div>
		</div>

		<div class="hero-image bg-primary w-full h-full min-h-[500px] ml-16 relative">

			<img src={imgSrc} alt="profile img" class="img custom-pulse h-60 w-64 ml-32 mt-52 animate-pulse">

			<div class="w-48 h-48 pl-2 absolute top-28 -left-24">
				<div class="w-44 h-12 py-3 bg-black text-white text-center rounded-lg absolut animate-bounce">
					<p>Lorem, ipsum dolor.</p>
				</div>

				<div class="w-44 h-12 py-3 bg-black text-white text-center rounded-lg absolute top-14">
					<p>Lorem, ipsum.</p>
				</div>

				<div class="w-44 h-12 py-3 bg-black text-white text-center rounded-lg absolute bottom-8">
					<p>Lorem, ipsum ygiu.</p>
				</div>
			</div>

			<div>
				<div class="w-56 h-30 py-3 bg-black text-white text-center rounded-lg absolute right-10 bottom-16 animate-bounce">
					<p class="font-bold">Lorem, ipsum dolor.</p>
					<p class="text-sm text-gray-500">Lorem, ipsum.</p>
					<p class="text-sm font-light">Lorem, ipsum dolor.</p>
				</div>

				<div class="custom-pulse w-56 h-30 py-3 bg-black text-white text-center rounded-lg absolute right-10 -bottom-12 animate-pulse">
					<p class="font-bold">Lorem, ipsum dolor.</p>
					<p class="text-sm text-gray-500">Lorem, ipsum.</p>
					<p class="text-sm font-light">Lorem, ipsum dolor.</p>

				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.custom-pulse {
    animation: pulse 10s infinite;
  }
</style>
