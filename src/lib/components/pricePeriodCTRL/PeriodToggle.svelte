<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';
	import { isYearly } from '$lib/stores/pricingStore';
</script>

<div class="flex items-center justify-center mt-10 gap-4">
	<p class="capitalize text-secondary font-bold text-lg">monthly</p>
	<Switch bind:checked={$isYearly} />
	<p class="capitalize text-secondary font-bold text-lg">yearly</p>
</div>
