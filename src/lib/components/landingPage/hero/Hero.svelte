<script>
	import { Sparkles } from 'lucide-svelte';

	// import { onMount } from 'svelte';
	// let imgSrc = 'public/images/img.jpg';

	// onMount(() => {
	// 	let interval = setInterval(() => {
	// 		imgSrc = imgSrc === 'public/images/cv.png' ? 'public/images/img.jpg' : 'public/images/cv.png';
	// 	}, 3000);

	// 	return () => {
	// 		clearInterval(interval);
	// 	};
	// });
</script>

<section class="relative h-full py-14">
	<div class="maximum w-full h-full flex justify-center">
		<div class="hero-texts">
			<div class="text-center">
				<h1 class="text-7xl font-bold text-secondary uppercase leading-tight">
					the <span class="inline-block relative text-primary">
						<Sparkles class="absolute text-primary -top-3 right-0" />
						magic wand</span
					>
					for job applications
				</h1>
				<p class="pt-4 text-secondary text-lg lg:max-w-3xl mx-auto">
					Paladin is a job application manager from the applicant's POV. Apply to mail-provided
					vacancies without stress through predefined skill-based profiles of your various skill and many more features.
				</p>
			</div>

			<div class="w-full lg:max-w-2xl mx-auto flex items-start justify-between gap-6 mt-10">
				<a
					href="/about"
					class="hover:text-white transition-all ease-linear duration-200 bg-black/10 hover:bg-primary p-4 w-full flex items-center flex-col text-center"
				>
					<p class="text-xl capitalize mt-4 font-bold">Lorem ipsum dolor sit.</p>

					<p class="text-sm mt-4">Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>
				</a>
				<a
					href="/"
					class="hover:text-white transition-all ease-linear duration-200 bg-black/10 hover:bg-primary p-4 flex w-full items-center flex-col text-center"
				>
					<p class="text-xl capitalize mt-4 font-bold">Lorem ipsum dolor sit.</p>

					<p class="text-sm mt-4">Lorem ipsum dolor sit amet sectetur adipisicing elit.</p>
				</a>
			</div>
		</div>
	</div>
</section>

<style>
</style>
