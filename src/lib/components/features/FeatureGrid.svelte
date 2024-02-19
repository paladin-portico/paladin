<section class="maximum gridbox mt-10">
	<div class="card">
		<p class="h-full flex justify-center items-center">Lorem, ipsum dolor.</p>
	</div>

	<div class="card">
		<img src="public/images/img.jpg" alt="" class="w-[100%] h-[60%]" />
		<div class="mt-6 p-6">
			<p>Lorem, ipsum.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iure!</p>
		</div>
	</div>

	<div class="card">
		<img src="public/images/img.jpg" alt="" class="w-[100%] h-[50%]" />
		<div class="text-white mt-6 p-6">
			<p>Lorem, ipsum.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, iure!</p>
		</div>
	</div>

	<div class="card">
		<p class="h-full flex justify-center items-center">Lorem ipsum dolor sit.</p>
	</div>

	<div class="card">
		<p class="py-10 p-6">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, deserunt.
		</p>
	</div>
	<div class="card flex">
		<img src="public/images/img.jpg" alt="" class="w-[50%]" />
		<div class="text-white mt-6 p-6">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, quia.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, beatae?</p>
		</div>
	</div>
</section>

<style lang="postcss">
	.gridbox {
		width: 100%;
		/* height: 600px; */
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 2fr, 1fr, 1fr;
		gap: 1rem;
		box-sizing: border-box;
	}

	.card {
		width: 100%;
		height: 100%;
		background: #ff4d00;
		box-sizing: border-box;
	}

	.card:nth-of-type(1) {
		grid-column: 1/3;
		grid-row: 1/2;
	}
	.card:nth-of-type(2) {
		grid-column: 3/4;
		grid-row: 1/2;
		background: red;
	}
	.card:nth-of-type(3) {
		background: #000;
		grid-row: 2/4;
		grid-column: 1/2;
	}
	.card:nth-of-type(4) {
		background: blue;
		grid-row: 2/3;
		grid-column: 2/3;
	}
	.card:nth-of-type(5) {
		background: yellow;
		grid-column: 3/4;
		grid-row: 2/3;
	}
	.card:nth-of-type(6) {
		background: green;
		grid-column: 2/-1;
		grid-row: 3/4;
	}
</style>
