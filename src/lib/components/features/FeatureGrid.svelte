<section class="maximum gridbox mt-10">
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
	<div class="card"></div>
</section>

<style lang="postcss">
	.gridbox {
		width: 100%;
		height: 600px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 2fr, 1fr, 1fr;
		gap: 1rem;
	}

	.card {
		width: 100%;
		height: 100%;
		background: #ff4d00;
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
