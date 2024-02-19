<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { CheckCheck, Sparkles } from 'lucide-svelte';
	import { isYearly } from '$lib/stores/pricingStore';
	// import type { SvelteComponent } from 'svelte';

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	export let icon: any;
	// export let icon: typeof SvelteComponent;
	export let plan: string;
	export let color: string;
	export let description: string;
	export let cost: number;
	export let recommend: boolean;
	export let planFeature: string[];
</script>

<section
	class={`max-w-sm h-[600px] p-6 border-2 ${recommend ? 'bgprimary' : ''}`}
	style="background:{color}"
>
	<div class="flex flex-col justify-between h-full">
		<section>
			<div class="flex items-end justify-between h-10">
				<svelte:component this={icon} class="text-night" />
				{#if recommend}
					<div class="bg-night/85 px-2 py-1 text-white flex items-center gap-2">
						<Sparkles class="w-4" />
						<p class="text-white uppercase text-xs font-semibold">popular</p>
					</div>
				{/if}
			</div>
			<h1
				class="text-night text-xl my-4 uppercase
			 font-bold"
			>
				{plan}
			</h1>
			<p class="text-night my-4">{description}</p>

			<p class="text-night text-4xl font-bold">
				{#if $isYearly}
					${cost * 12}/<span class="text-xl font-semibold">yearly</span>
				{:else}
					${cost}/<span class="text-xl font-semibold">monthly</span>
				{/if}
			</p>

			<section class="mt-8">
				<p
					class="text-night font-semibold text-lg border-y w-full text-center capitalize py-1 bgnight"
				>
					features
				</p>
				<ul class="flex flex-col gap-4 py-4">
					{#each planFeature as feature (feature)}
						<li class="flex items-center gap-2">
							<CheckCheck class="w-4 text-night" />
							<p class="capitalize text-night">{feature}</p>
						</li>
					{/each}
				</ul>
			</section>
		</section>
		<div class="h-12">
			<Button
				class="w-full font-normal bg-night text-lg h-full hover:bg-transparent hover:text-night border-night border-2"
				>get plan</Button
			>
		</div>
	</div>
</section>
