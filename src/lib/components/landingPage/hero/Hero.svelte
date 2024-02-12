<script>
	import * as Alert from '$lib/components/ui/alert';
	import { AlertCircle } from 'lucide-svelte';
</script>

<section class="relative h-full">
	<div class="maximum w-full">
		<div class="hero-texts">
			<Alert.Root class="w-max max-w-lg">
				<Alert.Title class="flex items-center gap-2">
					<AlertCircle />
					<p>Beta Mode</p>
				</Alert.Title>
				<Alert.Description
					>Paladin is actively being developed, hence, not fully functional. Check the
					<a href="/" class="underline text-primary">release notes</a>
					for updates</Alert.Description
				>
			</Alert.Root>

			<div>
				<h1>Lorem, ipsum.</h1>
				<div>
					<div>
						<h3>Lorem ipsum dolor sit.</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						<a href="/">Lorem, ipsum.</a>
					</div>
					<div>
						<h3>Lorem ipsum dolor sit.</h3>
						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
						<a href="/">Lorem, ipsum.</a>
					</div>
				</div>
			</div>
		</div>
		<div class="hero-image bg-primary w-full h-full"></div>
	</div>
</section>
