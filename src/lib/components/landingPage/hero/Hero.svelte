<script>
	import { onMount } from 'svelte';

	let imgSrc = 'public/images/img.jpg';

	onMount(() => {
		let interval = setInterval(() => {
			imgSrc = imgSrc === 'public/images/cv.png' ? 'public/images/img.jpg' : 'public/images/cv.png';
		}, 3000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<section class="relative h-full py-10">
	<div class="maximum w-full h-full flex">
		<div class="hero-texts lg:w-1/2">
			<div class="">
				<h1 class="text-5xl font-bold text-secondary uppercase lg:w-[85%]">
					<!-- with <span class="text-primary">paladin</span> you can <br /> -->
					you can effectively <br />
					<span> build your cv </span>
				</h1>
				<p class="pt-4 text-secondary text-lg lg:w-[95%]">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, asperiores. Quam,
					recusandae minus. Error, ratione? Odio earum aperiam iure hic adipisci? Tempore itaque
					modi maxime placeat deleniti beatae iure molestiae.
				</p>
			</div>

			<div class="w-full flex items-start justify-between mt-6">
				<div class="w-56">
					<p class="text-xl capitalize mt-4 font-bold">Lorem ipsum dolor sit.</p>

					<p class="text-sm mt-4">Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>

					<a
						href=" "
						class="w-max block capitalize underline underline-offset-4 mt-10 font-bold text-secondary hover:text-primary"
						>get started</a
					>
				</div>
				<div class="w-56">
					<p class="text-xl capitalize mt-4 font-bold">Lorem ipsum dolor sit.</p>

					<p class="text-sm mt-4">Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>

					<a
						href=" "
						class="w-max block capitalize underline underline-offset-4 mt-10 font-bold text-secondary hover:text-primary"
						>get started</a
					>
				</div>
			</div>
		</div>

		<div class="hero-image bg-primary w-full h-full lg:w-1/2 ml-16 relative">
			<img src={imgSrc} alt="profile img" class="custom-pulse h-60 w-64 ml32 mt52 animate-pulse" />

			<div class="w-48 h-48 pl-2 absolute top-28 -left-24">
				<div
					class="w-44 h-12 py-3 bg-black text-white text-center rounded-lg absolut animate-bounce"
				>
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
				<div
					class="w-56 h-30 py-3 bg-black text-white text-center rounded-lg absolute right-10 bottom-16 animate-bounce"
				>
					<p class="font-bold">Lorem, ipsum dolor.</p>
					<p class="text-sm text-gray-500">Lorem, ipsum.</p>
					<p class="text-sm font-light">Lorem, ipsum dolor.</p>
				</div>

				<div
					class="custom-pulse w-56 h-30 py-3 bg-black text-white text-center rounded-lg absolute right-10 -bottom-12 animate-pulse"
				>
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
