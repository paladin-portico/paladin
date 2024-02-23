<script lang="ts">
	import ProfileCards from './interations/ProfileCards.svelte';
	import { LineChart } from 'lucide-svelte';
	import analytics from '$lib/assets/analytics.jpg';
	import analytics1 from '$lib/assets/analytics-1.jpg';
	import { register } from 'swiper/element/bundle';

	register();
</script>

<section class="maximum mt-20 flex flex-col gap-24">
	<div class="h-[400px] flex gap-8 items-center justify-between overflow-hidden">
		<!-- The text session -->
		<div class="w-1/2">
			<h1 class="mb-4 leading-tight text-4xl capitalize font-semibold">
				Dynamic Skill-Based Profile Creation
			</h1>
			<p class="">
				Designed for versatility and precision, this innovative tool allows you to craft and manage
				multiple profiles, each highlighting a distinct Resume, set of skills and experiences.
				Tailor your professional presentation for various job roles, ensuring you always put your
				best foot forward.
			</p>
		</div>
		<!-- The card session -->
		<div class="w-1/2">
			<ProfileCards />
		</div>
	</div>

	<!-- feature 2 -->
	<div class="flex flex-row-reverse gap-8 items-center justify-between h-[400px]">
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
