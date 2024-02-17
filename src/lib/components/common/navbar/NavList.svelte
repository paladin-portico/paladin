<script lang="ts">
	import { page } from '$app/stores';

	const data = [
		{
			id: 1,
			item: 'why paladin',
			link: '/about'
		},
		{
			id: 2,
			item: 'pricing',
			link: '/pricing'
		},
		{
			id: 3,
			item: 'release note',
			link: '/'
		}
	];
</script>

<ul class="flex space-x-20 *:capitalize *:text-md *:font-semibold">
	{#each data as item (item.id)}
		<li class="hover:text-primary transition duration-300">
			<a
				data-sveltekit-preload-code="eager"
				href={item.link}
				class={`transition duration-300 ${$page.url.pathname === item.link ? 'text-primary' : ''}`}>{item.item}</a
			>
		</li>
	{/each}
</ul>
