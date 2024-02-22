<script>
	import { BrainCircuit } from 'lucide-svelte';
	// import SkillAvatar from './interations/SkillAvatar.svelte';
	import interview from '$lib/assets/interview-1.jpg';
</script>

<section class="maximum gridbox mt-10">
	<div class="card justify-center flex flex-col items-center p-4 text-night gap-4">
		<BrainCircuit class="w-14 h-14" />
		<p class="font-bold text-center text-2xl">Generate skill-tailored cover letters on the go</p>
	</div>

	<div class="card p-4 grid place-items-center">
		<!-- <FilePenLine /> -->
		<h1
			class="font-bold text-3xl text-center text-night/75 uppercase selection:text-white selection:bg-inherit"
		>
			the absolute job-search nutcracker!
		</h1>
		<p class="text-night/65 font-medium p-4 text-center">
			Left to us, you are definitely getting that job. The system is just piss... oh Please! <br />
			<br />But hey! we can make the job search easier. With our in-house ATS, platform to create
			and edit your CV, automatic application to provided mails, AI generated cover letters and much
			more, you are at the advantage here! <br /> <br /> Psst! we even keep your application counts for
			you 😭
		</p>
	</div>

	<div class="card">
		<!-- <LayoutDashboard /> -->
		<!-- <SkillAvatar /> -->
		<img src={interview} alt="interview session" class="h-full w-full object-cover" />
	</div>

	<div class="card grid place-items-center">
		<img
			src="logo/full-white.svg"
			alt="logomark"
			class="w-1/2 transition-grayscale duration-200 ease-linear"
		/>
	</div>

	<div class="card flex p-6 items-center">
		<!-- <Mails /> -->
		<div class="text-night w-1/2">
			<h1 class="font-bold text-2xl text-night/50 uppercase">
				create and manage <br /> multiple skill-based profile
			</h1>
			<p class="text-night/75 mt-2 font-medium">
				Craft personalized profiles for various skills, each with its editble CV, tailoring each CV
				to perfection. Effortlessly switch between profiles when applying for jobs.
			</p>
		</div>
	</div>
</section>

<style lang="postcss">
	.gridbox {
		width: 100%;
		/* height: 600px; */
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		/* grid-template-rows: 1fr, 1fr, 1fr; */
		grid-template-rows: repeat(3, 250px);
		gap: 1rem;
		box-sizing: border-box;
	}

	.card {
		width: 100%;
		height: 100%;
		/* background: hsl(18, 100%, 50%); */
		box-sizing: border-box;
	}

	.card:nth-of-type(1) {
		grid-column: 1/3;
		grid-row: 1/2;
	}
	.card:nth-of-type(2) {
		grid-column: 3/4;
		grid-row: 1/3;
	}
	.card:nth-of-type(3) {
		grid-row: 2/4;
		grid-column: 1/2;
	}
	.card:nth-of-type(4) {
		grid-row: 2/3;
		grid-column: 2/3;
		background: #ff4d00;
	}

	.card:nth-of-type(5) {
		grid-column: 2/-1;
		grid-row: 3/4;
	}
</style>
