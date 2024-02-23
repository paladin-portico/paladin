<script lang="ts">
	const data = [
		{
			id: 1,
			imgSrc: 'src/lib/assets/profiles/profile-1.jpg',
			title: 'Graffiti Artist'
		},
		{
			id: 2,
			imgSrc: 'src/lib/assets/profiles/profile-2.jpg',
			title: 'Backend engineer'
		},
		{
			id: 3,
			imgSrc: 'src/lib/assets/profiles/profile-3.jpg',
			title: 'Fullstack engineer'
		},
		{
			id: 4,
			imgSrc: 'src/lib/assets/profiles/profile-4.jpg',
			title: 'Snr. Accountant'
		},
		{
			id: 5,
			imgSrc: 'src/lib/assets/profiles/profile-5.jpg',
			title: 'CyberSecurity Expert'
		}
	];
</script>

<swiper-container class="mySwiper" loop="true" effect="cards" grab-cursor="true">
	{#each data as { title, id, imgSrc } (id)}
		<swiper-slide
			class="card w-full h-full border-2 mx-auto flex flex-col justify-between rounded-3xl overflow-hidden bg-white"
		>
			<div class="p-4 h-2/3">
				<img
					src={imgSrc}
					alt="profile"
					class="w-full rounded-xl h-full object-cover object-center mx-auto"
				/>
				<h3 class="mt-4 capitalize text-xl font-semibold">{title}</h3>
			</div>
			<button
				class="w-full bg-primary text-lg font-semibold uppercase py-2 text-white cursor-pointer"
				>apply</button
			>
		</swiper-slide>
	{/each}
</swiper-container>

<style>
	swiper-container {
		/* overflow: hidden; */
		width: 240px;
		height: 350px;
	}
</style>
