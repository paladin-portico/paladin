<script lang="ts">
	import { onMount } from 'svelte';

	const words = ['create skill-based profiles', 'craft editable resume', 'apply to mails with AI'];
	let wordIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let displayedText = '';

	const typewriter = () => {
		const currentWord = words[wordIndex];

		if (!isDeleting && charIndex <= currentWord.length) {
			displayedText = currentWord.substring(0, charIndex++);
		} else if (isDeleting) {
			displayedText = currentWord.substring(0, charIndex--);
		}

		if (charIndex === currentWord.length + 1 && !isDeleting) {
			isDeleting = true;
			setTimeout(typewriter, 2000); // Delay before start deleting
		} else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			wordIndex = (wordIndex + 1) % words.length;
			setTimeout(typewriter, 300); // Delay before start typing next word
		} else {
			setTimeout(typewriter, isDeleting ? 200 : 120); // Speed of deleting and typing
		}
	};

	onMount(() => {
		typewriter();
	});
</script>

<span class="text-primary relative">{displayedText}</span>

<style lang="postcss">
	span::after {
		content: '';
		background: #ff4d00;
		width: 3px;
		height: 100%;
		right: -5px;
		position: absolute;
		animation: blink 0.7s infinite;
	}

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
