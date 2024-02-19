const words = ['lorem', 'lorem', 'lorem'];

let wordIndex = 0;
let charIndex = 0;

let isDeleting = false;

const typewriter = () => {
	const currentWord = words[wordIndex];
	const currentChar = currentWord.substring(0, charIndex);

	if (!isDeleting && charIndex < currentWord.length) {
		charIndex++;
		setTimeout(typewriter, 200);
	} else if (isDeleting && charIndex > 0) {
		charIndex--;
		setTimeout(typewriter, 1200);
	} else {
		isDeleting = !isDeleting;
		wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
		setTimeout(typewriter, 1200);
	}

	return currentChar;
};

typewriter();
