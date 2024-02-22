<script lang="ts">
	const data = [
		{
			id: 1,
			imgSrc: 'public/images/img.jpg',
			title: 'frontend engineer'
		}
		// {
		// 	id: 2,
		// 	imgSrc: 'public/images/cv.png',
		// 	title: 'frontend engineer'
		// },
		// {
		// 	id: 3,
		// 	imgSrc: 'public/images/img.jpg',
		// 	title: 'frontend engineer'
		// }
	];
</script>

<section class="maximum">
	<div class="h-[400px] mt-20 flex">
		<!-- The text session -->
		<div class="w-[60%] h-full">
			<h1 class="text-5xl font-semibold leading-normal">
				Lorem ipsum <br /> dolor sit Lorem, ipsum.
			</h1>
			<p class="mt-10 mb-10 pr-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maxime. Labore
				explicabo omnis laborum iste ad facilis ipsam pariatur magni.
			</p>
		</div>

		<!-- The card session -->
		<div class="w-[40%]">
			{#each data as item (item.id)}
				<div class="card w-[70%] h-[23rem] border-2 mt-4 mx-auto rounded-xl">
					<img src={item.imgSrc} alt="profile" class="w-[90%] h-[60%] my-4 mx-auto rounded-xl" />
					<div>
						<div class="capitalize ml-6">
							<h3 class="text-lg font-bold">{item.title}</h3>
							<p>ipsum d</p>
						</div>
						<div class="w-full h-[50px] bg-black mt-[14px] rounded-b-xl text-center">
							<h2 class="text-lg font-semibold uppercase py-2 text-white">apply</h2>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
