<script>
	import '../app.css';
	// import Preloader from '$lib/components/preloader/Preloader.svelte';
	import Navbar from '$lib/components/common/navbar/Navbar.svelte';
	import Footer from '$lib/components/landingPage/footer/Footer.svelte';
</script>

<!-- <Preloader /> -->
<Navbar />
<slot />
<Footer />
