<script lang="ts">
	import PriceCard from '$lib/components/common/priceCard/PriceCard.svelte';

	import PeriodToggle from '$lib/components/pricePeriodCTRL/PeriodToggle.svelte';

	import { Leaf, Sprout, Palmtree } from 'lucide-svelte';

	const data = [
		{
			id: 1,
			plan: 'basic',
			icon: Leaf,
			cost: 100,
			planFeature: ['lorem', 'ipsum', 'loquit'],
			recommend: false,
			color: '#85FF66',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			id: 2,
			plan: 'standard',
			icon: Sprout,
			cost: 100,
			planFeature: ['lorem', 'ipsum', 'loquit', 'ipsfum', 'loquidt'],
			recommend: true,
			color: '#66D1FF',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		},
		{
			id: 3,
			plan: 'premium',
			icon: Palmtree,
			cost: 100,
			planFeature: [
				'lorem',
				'ipsum',
				'loquit',
				'loream',
				'ipsudm',
			],
			recommend: false,
			color: '#E066FF',
			description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
		}
	];

	let isYearly: boolean = false;
</script>

<section class="py-16">
	<div class="maximum">
		
		<div class="flex flex-col items-center lg:gap-6">
			<p class="uppercase text-primary font-medium tracking-wider">pricing plans</p>
			<div class="flex flex-col items-center lg:gap-6 lg:justify-between *:text-center">
				<h1 class="text-5xl leading-tight font-bold w-[50%]">
					We've got the <span class="text-primary uppercase">perfect</span> plans for you
				</h1>
				<p class="w-[60%] text-lg">
					Explore the enriched and affordable plans we've got for you to make your job applications
					easier. With <span class="text-primary font-semibold">Artificial Intelligence</span>
					tools integrated to fight for your cause at the job-front, you've got the best tools at low
					cost!
				</p>
			</div>
		</div>

		<!-- PRICING CONTROL -->
		<PeriodToggle {isYearly} />

		<!-- PRICING -->
		<section class="flex lg:flex-row space-x-8 mt-14">
			{#each data as { id, plan, icon, cost, planFeature, recommend, color, description } (id)}
				<PriceCard
					{icon}
					{plan}
					{isYearly}
					{cost}
					{planFeature}
					{recommend}
					{color}
					{description}
				/>
			{/each}
		</section>
	</div>
</section>
