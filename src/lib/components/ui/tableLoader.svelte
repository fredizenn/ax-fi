<script>
	export let bodySize = 10;
	export let headerSize = 6;
</script>

<table class="animate-pulse w-full">
	<thead>
		{#each Array(headerSize) as _}
			<th class="px-6 py-2 whitespace-nowrap">
				<div class=" h-7 bg-gray-300 rounded-md" />
			</th>
		{/each}
	</thead>
	<tbody class="border-t border-gray-400 divide-y ">
		{#each Array(bodySize) as _}
			<tr>
				{#each Array(headerSize) as _}
					<td class="px-6 py-2 whitespace-nowrap">
						<div class=" h-7 bg-gray-300 rounded-md" />
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
