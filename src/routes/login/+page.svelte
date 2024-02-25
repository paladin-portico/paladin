<script lang="ts">
</script>

<section class="maximum w-full flex flex-col justify-center items-center">
	<div class="w-[40%] h-full my-4">
		<div class="welcome">
			<h1 class="text-4xl font-semibold mb-2">welcome back</h1>
			<p>welcome back! please enter your details.</p>
		</div>
		<form class="my-4">
			<div class="my-2">
				<label class="capitalize font-semibold" for="email">email</label>
				<input
					class="w-[90%] py-[6px] px-2 mt-2 block border rounded"
					type="email"
					name="email"
					id="email"
					placeholder=" Enter your email"
				/>
			</div>
			<div>
				<label class="capitalize font-semibold" for="password">password</label>
				<input
					class="w-[90%] py-[6px] px-2 mt-2 block border rounded"
					type="password"
					id="password"
					placeholder="**********"
				/>
			</div>

			<div class="w-[90%] flex justify-between my-4">
				<div>
					<input type="checkbox" id="check" />
					<label for="check">Remember for 30 days</label>
				</div>
				<a href=" " class="text-primary">forget password</a>
			</div>
			<button
				class="w-[90%] border py-[6px] rounded mb-4 bg-primary text-white font-semibold hover:opacity-[80%]"
				>Sign in</button
			>
			<button class="w-[90%] border py-[6px] rounded mb-4 font-semibold hover:opacity-[80%]"
				>Sign in with Google</button
			>

			<div class="text-center">
				<p>Don't have an account? <span class="text-primary"><a href=" ">Sign up</a></span></p>
			</div>
		</form>
	</div>
</section>

<style>
</style>
