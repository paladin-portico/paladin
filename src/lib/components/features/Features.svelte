<script lang="ts">
	// import FeatureGrid from './FeatureGrid.svelte';
	import FeatureList from './FeatureList.svelte';
</script>

<section class="maximum py-14">
	<div class="flex flex-col items-center w-full text-center gap-6 max-w-[50%] mx-auto">
		<div class="benefit rounded-full px-4 py-1 border-2 w-max border-primary">
			<p class="capitalize font-bold text-primary">features</p>
		</div>

		<h1 class="font-semibold text-3xl">
			Now you can manage job applications seamlessly with <span class="text-primary">Paladin</span>.
		</h1>
		<p class="">
			Have you seen the various tools used by employers to supposedly <span
				class="uppercase decoration-[3px] font-bold text-lg decoration-primary decoration-wavy line-through"
			>
				separate the good candidates from the bad eggs?
			</span>
			Explore some of our rich features to put you ahead of the game!
		</p>
	</div>
	<FeatureList />
	<!-- <FeatureGrid /> -->
</section>
