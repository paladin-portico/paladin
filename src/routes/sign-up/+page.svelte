<script lang="ts">
</script>

<section class="maximum w-full flex flex-col justify-center items-center">
	<div class="w-[40%] h-full my-4">
		<div class="welcome w-[90%] text-center">
			<h1 class="text-3xl font-semibold mb-2 capitalize">sign up</h1>
			<p>Create your account</p>
		</div>
		<form class="w-[90%]">
			<div class="my-2">
				<label class="capitalize font-semibold" for="username">username</label>
				<input
					class="w-full py-[6px] px-2 mt-2 block border rounded"
					type="text"
					name="username"
					id="username"
					placeholder=" Enter your Username"
				/>
			</div>
			<div class="my-2">
				<label class="capitalize font-semibold" for="email">email</label>
				<input
					class="w-full py-[6px] px-2 mt-2 block border rounded"
					type="email"
					id="email"
					placeholder="Enter your email"
				/>
			</div>
			<div class="my-4">
				<label class="capitalize font-semibold" for="password">password</label>
				<input
					class="w-full py-[6px] px-2 mt-2 block border rounded"
					type="password"
					id="password"
					placeholder="*********"
				/>
			</div>

			<button
				class="w-full border py-[6px] rounded mb-2 bg-primary text-white font-semibold hover:opacity-[80%]"
				>Sign up</button
			>
			<h2 class="text-center uppercase mb-2">or</h2>
			<button class="w-full border py-[6px] rounded mb-2 font-semibold hover:opacity-[80%]"
				>Sign up with Google</button
			>

			<div class="text-center">
				<p>
					Already have an account? <span class="text-primary"><a href=" ">Login</a></span>
				</p>
			</div>
		</form>
	</div>
</section>

<style>
</style>
