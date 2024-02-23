<script lang="ts">
	import * as Select from '$lib/components/ui/select';

	const skills = [
		{ id: 1, value: 'FE', label: 'Frontend Engineer' },
		{ id: 2, value: 'ACCT', label: 'Senior Accountant' },
		{ id: 3, value: 'BE', label: 'Backend Engineer' },
		{ id: 4, value: 'Mo', label: 'Animator' },
		{ id: 5, value: 'VOA', label: 'Voice Over Artist' }
	];
</script>

<Select.Root portal={null}>
	<Select.Trigger class="w-[180px]">
		<Select.Value placeholder="Select a profile" />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			<Select.Label>Profiles</Select.Label>
			{#each skills as skill}
				<Select.Item value={skill.value} label={skill.label}>
					<div class="flex items-center gap-2">
						<img
							src={`src/lib/assets/profiles/profile-${skill.id}.jpg`}
							alt="skill profile"
							class="w-6 h-6 object-cover object-center rounded-full"
						/>
						<p class="font-semibold">
							{skill.label}
						</p>
					</div>
				</Select.Item>
			{/each}
		</Select.Group>
	</Select.Content>
	<Select.Input name="favoriteSkill" />
</Select.Root>
