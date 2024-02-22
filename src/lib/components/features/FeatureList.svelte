<script lang="ts">
	import { LineChart } from 'lucide-svelte';
	import analytics from '$lib/assets/analytics.jpg';
	import analytics1 from '$lib/assets/analytics-1.jpg';

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
	<div class="h-[400px] mt-20 flex gap-8">
		<!-- The text session -->
		<div class="w-[60%] h-full py-20">
			<h1 class="text-4xl font-semibold leading-tight">
				Lorem ipsum <br /> dolor sit Lorem, ipsum.
			</h1>
			<p class="my-8 pr-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maxime. Labore
				explicabo omnis laborum iste ad facilis ipsam pariatur magni.
			</p>
		</div>

		<!-- The card session -->
		<div class="w-[40%]">
			{#each data as item (item.id)}
				<div class="card w-[70%] h-[23rem] border-2 mx-auto rounded-xl">
					<img src={item.imgSrc} alt="profile" class="w-[90%] h-[60%] my-4 mx-auto rounded-xl" />
					<div>
						<div class="capitalize ml-6">
							<h3 class="text-lg font-bold">{item.title}</h3>
							<p>ipsum d</p>
						</div>
						<div class="w-full h-[50px] bg-black mt-[14px] rounded-b-xl text-center">
							<h2 class="text-lg font-semibold uppercase py-2 text-white cursor-pointer">apply</h2>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="maximum mt-14">
	<div class="flex gap-8 items-center justify-between h-[400px]">
		<div class="w-1/2">
			<h1 class="mb-4 leading-tight text-4xl capitalize font-semibold">
				comprehensive reports and analytics dashboard
			</h1>
			<p class="">
				We offer an in-depth view of your applications through intuitive and detailed
				visualizations. Whether you're looking to optimize operations or monitor growth, our
				dashboard puts critical information at your fingertips, ensuring you're always informed and
				ahead of the curve.
			</p>
		</div>
		<div class="w-1/2 relative analytic h-full grid place-items-center">
			<div class="absolute left-6 top-0 bg-primary text-white shadow-2xl">
				<p class="border-b p-2 text-sm font-semibold border-white">Profiles</p>
				<ul class=" bg-secondary w-full h-full">
					{#each ['Snr. Accountant', 'Frontend Engineer', 'Tax Lawyer'] as item}
						<li
							class="p-2 text-xs text-white last-of-type:border-b-0 border-b border-white cursor-pointer hover:opacity-100 opacity-50 transition ease-linear"
						>
							{item}
						</li>
					{/each}
				</ul>
			</div>
			<div class="relative">
				<img
					src={analytics}
					class="w-60 h-80 object-cover object-center analytics-shadow"
					alt="analytics"
				/>
				<img
					src={analytics1}
					class="absolute -top-10 -right-2/4 -z-10 w-60 h-60 object-cover blur-[1px] object-center"
					alt="analytics"
				/>
			</div>
			<div
				class="absolute right-6 bottom-14 bg-primary text-white p-2 shadow-2xl flex items-center gap-4"
			>
				<div class="bg-secondary text-white grid place-items-center w-8 h-8">
					<p class="text-xl font-bold">48</p>
				</div>
				<p class=" font-semibold border-white">Applications</p>
				<LineChart />
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.analytics-shadow {
		box-shadow: 15px 0 50px #868282;
	}
</style>
