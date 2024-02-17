<script lang="ts">
	import { Switch } from '$lib/components/ui/switch';

	export let isYearly: boolean;
</script>

<div class="flex items-center justify-center mt-10 gap-4">
	<p class="capitalize text-secondary font-bold text-lg">monthly</p>
	<Switch bind:checked={isYearly} on:change={() => (isYearly = !isYearly)} />
	<p class="capitalize text-secondary font-bold text-lg">yearly</p>
</div>
