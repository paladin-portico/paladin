<script lang="ts">
	import Hero from '$lib/components/landingPage/hero/Hero.svelte';
	let name = '';
	let email = '';
	let age = 0;
	let hobbiesInput = '';
	let hobbies: string[] = [];

	async function handleSubmit() {

		hobbies = hobbiesInput.split(',').map(hobby => hobby.trim());

		const response = await fetch('http://localhost:3000', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ name, email, age, hobbies })
		});

		if (response.ok) {
			// Handle successful submission
			console.log('Form submitted successfully');
		} else {
			// Handle errors
			console.error('Failed to submit form');
		}
	}
</script>

<Hero />

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" bind:value={name} placeholder="Name" />
	<input type="email" bind:value={email} placeholder="Email" />
	<input type="age" bind:value={age} placeholder="Age" />
	<input type="hobbies" bind:value={hobbiesInput} placeholder="Hobbies" />
	<button type="submit">Submit</button>
</form>
