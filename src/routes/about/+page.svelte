<script lang="ts">
	import aboutImage from '$lib/assets/about-us.jpg';
	import paladinAudio from '$lib/assets/audio/paladin.mp3';

	import { Volume1, Github, Linkedin, Twitter } from 'lucide-svelte';

	let audio: HTMLAudioElement;

	function playAudio(): void {
		audio.play();
	}
</script>

<section>
	<div class=" w-full py-16">
		<!-- header -->
		<div class="maximum">
			<p class="uppercase text-primary font-medium tracking-wider">this is Paladin</p>
			<div class="flex flex-col lg:flex-row lg:items-end lg:gap-6 lg:justify-between">
				<h1 class="text-5xl font-bold w-[50%] leading-tight">
					We seek to make job applications easier...<br /> from the applicant's POV
				</h1>
				<div class="w-[40%] ">
					<div class="flex items-start gap-2">
						<button
							class="bg-secondary rounded-full w-8 h-8 grid place-items-center pl-1 cursor-pointer"
							on:click={playAudio}
						>
							<audio preload="auto" bind:this={audio}>
								<source src={paladinAudio} type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
							<Volume1 class="text-white" />
						</button>
						<div>
							<div class="flex items-center space-x-2">
								<span class="text-xl font-semibold text-primary">Paladin</span>
								<span class="text-sm">/ˈpalədɪn/</span>
							</div>
							<div class="mt-1">
								<span class="flex space-x-2">
									<i class="text-sm">noun</i>
									<p class="capitalize bg-night/50 text-white px-2 py-1 text-xs">
										historical
									</p>
								</span>
							</div>
						</div>
					</div>
					<p class="text-justify mt-2">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit rem voluptate
						aspernatur! Dolor non voluptates odit esse odio fugiat quae officia. Tempore adipisci
						sapiente labore illum in corrupti, ipsam voluptate.
					</p>
				</div>
			</div>
		</div>
		<!-- Image -->
		<div class="h-[38rem] w-full overflow-hidden my-14">
			<img
				src={aboutImage}
				alt="people working in collaboration"
				class="object-top w-full h-full object-cover"
			/>
		</div>
		<!-- Story -->
		<section class="maximum">
			<div>
				<p class="pb-8 uppercase text-primary font-medium tracking-wider">the plot</p>
				<div class="flex flex-col gap-10">
					<div class="border-t flex items-start w-full lg:justify-between py-6">
						<h3 class="text-4xl font-bold capitalize w-[40%]">the percieved problem</h3>
						<p class="text-justify w-[50%]">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aliquam ut expedita
							excepturi possimus, impedit ad magnam quae inventore reprehenderit nostrum,
							consequatur fuga placeat. Fugit excepturi adipisci in ea possimus ratione fuga,
							quaerat eius debitis quod obcaecati porro quibusdam quia asperiores eveniet amet velit
							exercitationem quisquam sunt? Commodi, sit quasi.
						</p>
					</div>
					<div class="border-t flex items-start w-full lg:justify-between py-6">
						<h3 class="text-4xl font-bold capitalize w-[40%]">the attempted solution</h3>
						<p class="text-justify w-[50%]">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aliquam ut expedita
							excepturi possimus, impedit ad magnam quae inventore reprehenderit nostrum,
							consequatur fuga placeat. Fugit excepturi adipisci in ea possimus ratione fuga,
							quaerat eius debitis quod obcaecati porro quibusdam quia asperiores eveniet amet velit
							exercitationem quisquam sunt? Commodi, sit quasi.
						</p>
					</div>
					<div class="border-t flex items-start w-full lg:justify-between py-6">
						<h3 class="text-4xl font-bold capitalize w-[40%]">the envioned goal</h3>
						<div class="w-[50%]">
							<p class="text-justify">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti aliquam ut
								expedita excepturi possimus, impedit ad magnam quae inventore reprehenderit nostrum,
								consequatur fuga placeat. Fugit excepturi adipisci in ea possimus ratione fuga,
								quaerat eius debitis quod obcaecati porro quibusdam quia asperiores eveniet amet
								velit exercitationem quisquam sunt? Commodi, sit quasi.
							</p>
							<div class="w-full pt-8">
								<blockquote class="twitter-tweet" data-theme="dark">
									<p lang="en" dir="ltr">
										Job searching is hard. The process and nuances of applying for jobs, taking into
										consideration the arrays of skills you have, is even harder!<br /><br />THERE
										should be some partner/assistance along the way to make this a bit easier.<br
										/><br />There should be. We SHOULD DO SOMETHING about it.
									</p>
									&mdash; Ishola (@Ishola_oa)<a
										href="https://twitter.com/Ishola_oa/status/1745092582365905248?ref_src=twsrc%5Etfw"
										>January 10, 2024</a
									>
								</blockquote>
								<script
									async
									src="https://platform.twitter.com/widgets.js"
									charset="utf-8"
								></script>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Team -->
			<div class="mt-8">
				<p class="pb-8 uppercase text-primary font-medium tracking-wider">the team</p>
				<div class="border-t flex items-start w-full lg:justify-between py-6">
					<h3 class="text-4xl font-bold capitalize w-[40%]">the crew behind the scene</h3>
					<div class="w-[50%] flex flex-wrap justify-between">
						<div class="w-44">
							<img src="/public/images/profile-1.jpg" alt="" class="w-full " />
							<h3 class="capitalize my-2">john doe</h3>
							<span class="flex items-center *:text-primary *:w-8 justify-between">
								<Linkedin class="" />
								<Github />
								<Twitter />
							</span>
						</div>
						<div class="w-44">
							<img src="/public/images/profile-2.jpg" alt="" class="w-full " />
							<h3 class="capitalize my-2">john doe</h3>
							<span class="flex items-center *:text-primary *:w-5 justify-between">
								<Linkedin class="" />
								<Github />
								<Twitter />
							</span>
						</div>
						<div class="w-44">
							<img src="/public/images/profile-1.jpg" alt="" class="w-full " />
							<h3 class="capitalize my-2">jane doe</h3>
							<span class="flex items-center *:text-primary *:w-5 justify-between">
								<Linkedin class="" />
								<Github />
								<Twitter />
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
