<script lang="ts" context="module">
	export interface ITableColumn {
		header: string;
		id?: string;
		plugins?: any;
		accessor?: string | string[] | ((row: any) => any);
	}

	export interface IActionList {
		name: string;
		icon?: string;
		otherClasses?: string;
		visible?: (row: any) => boolean;
	}
	export interface ISortInfo {
		id: string;
		order: 'asc' | 'desc';
		// name?: string;
	}
	function getRow(row: any) {
		const { original } = row;
		return original;
	}
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import { createTable, Subscribe, Render } from 'svelte-headless-table';
	import {
		addSortBy,
		addColumnOrder,
		addSelectedRows,
		addHiddenColumns,
		addResizedColumns
	} from 'svelte-headless-table/plugins';
	import { createEventDispatcher } from 'svelte';
	import { clickOutsideAction } from 'svelte-legos';
	import { slide } from 'svelte/transition';
	import { Dropdown, DropdownItem } from 'flowbite-svelte';

	export let data: any[];
	export let headerColor: 'green' | 'orange' | 'white' | 'purple' | 'sky' | 'blue' = 'white';
	export let height = 400;
	export let bgWhite = false;
	export let headerTextColor: 'black' | 'white' | 'gray' = 'black';
	export let tableColumns: ITableColumn[] = [];
	export let showActions = false;
	export let showCheckBox = false;
	export let showViewDetails = true;
	export let showEdit = false;
	export let showMiniWidth = false;
	export let rowClickable = false;
	export let hideWhiteSpace = true;
	export let hiddenColumns: string[] = [];
	export let sortedColumns: ISortInfo[] = [];
	export let initialSortKeys: ISortInfo[] = [];
	export const allColumns = writable<any>([]);
	export let actionLists: IActionList[] = [];
	export let showIndex = false;
	export let selectedRows: any[] = [];
	export let selectAllChecked = false;
	export let showDelete = false;

	let dropdown = -1;
	let openDropDown = false;

	const dispatch = createEventDispatcher();

	let tableData = writable(data);
	$: $tableData = data;
	const table = createTable(tableData, {
		sort: addSortBy({
			disableMultiSort: false,
			serverSide: true,
			initialSortKeys: initialSortKeys
		}),
		colOrder: addColumnOrder(),
		select: addSelectedRows(),
		hideCols: addHiddenColumns({
			initialHiddenColumnIds: hiddenColumns
		}),
		resize: addResizedColumns()
	});
	const columns = tableColumns.map((x: any) => table.column({ ...x }));
	const { headerRows, flatColumns, rows, tableAttrs, tableBodyAttrs, pluginStates, pageRows } =
		table.createViewModel(columns);
	$allColumns = flatColumns;
	// handle hidden columns
	const { hiddenColumnIds } = pluginStates.hideCols;
	$: $hiddenColumnIds = hiddenColumns;

	const { sortKeys } = pluginStates.sort;
	$: sortedColumns = $sortKeys;

	function handleRowCheckboxChange(row: any) {
		const selectedIndex = selectedRows.indexOf(row);
		if (selectedIndex === -1) {
			const updatedSelectedRows = [...selectedRows, row];
			selectedRows = updatedSelectedRows;
			dispatch('handleCheckbox', updatedSelectedRows);
		} else {
			const updatedSelectedRows = selectedRows.filter((index) => index !== row);
			selectedRows = updatedSelectedRows;
			dispatch('handleCheckbox', updatedSelectedRows);
		}
	}

	const handleSelectAllChange = () => {
		if (selectAllChecked) {
			selectedRows = [];
			dispatch('handleCheckbox', []);
		} else {
			const allRows = data.map((x) => x);
			selectedRows = allRows;
			dispatch('handleCheckbox', allRows);
		}
		selectAllChecked = !selectAllChecked;
	};

	let renderId = 0;
	function toggleSubmenu(index: any) {
		dropdown = dropdown === index ? -1 : index;
	}
	function handleClick(e: MouseEvent, index: number): void {
		openDropDown = true;
		toggleSubmenu(index);
		renderId++;
		const target = e.target as HTMLElement | null;
		if (target && (target.localName === 'iconify-icon' || target.localName === 'button')) {
			e.stopPropagation();
		}
	}

	function closeDropDown() {
		openDropDown = false;
		dropdown = -1;
	}
</script>

<div class="w-full h-full flex-auto">
	<div class="grid grid-cols-1 gap-2">
		<div
			class=" overflow-x-auto w-full h-full scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
		>
			<table {...$tableAttrs} class="w-full mb-6 pb-6">
				<thead
					class=" sticky top-0"
					class:bg-[#92cbdf]={headerColor === 'sky'}
					class:bg-green-300={headerColor === 'green'}
					class:bg-[#CF9B14]={headerColor === 'orange'}
					class:bg-[#cbc3fa]={headerColor === 'purple'}
					class:bg-blue-300={headerColor === 'blue'}
					class:bg-white={headerColor === 'white'}
					class:text-gray-700={headerTextColor === 'gray'}
					class:text-white={headerTextColor === 'white'}
					class:text-black={headerTextColor === 'black'}
					class:border-b-2={headerColor === 'white'}
				>
					{#each $headerRows as headerRow (headerRow.id)}
						<Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
							<tr {...rowAttrs}>
								{#if showCheckBox}
									<th
										class="px-6 py-2.5 text-left rtl:text-right whitespace-nowrap font-semibold text-sm"
									>
										<input
											class="cursor-pointer"
											type="checkbox"
											checked={selectAllChecked}
											on:change={handleSelectAllChange}
										/>
									</th>
								{/if}
								{#if showActions}
									<th
										class="px-4 py-2.5 text-left rtl:text-right whitespace-nowrap font-semibold text-sm"
										>Actions</th
									>
								{/if}
								{#if showIndex}
									<th
										class="px-6 py-2.5 text-left rtl:text-right whitespace-nowrap font-semibold text-sm"
										>#</th
									>
								{/if}
								{#each headerRow.cells as cell (cell.id)}
									<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
										<!-- use:props.resize : apply to th -->
										<th
											{...attrs}
											on:click={props.sort.toggle}
											class="px-6 py-2.5 text-left rtl:text-right whitespace-nowrap font-semibold text-sm cursor-pointer relative"
										>
											<div class="flex items-center gap-1">
												<Render of={cell.render()} />
												{#if props.sort?.order === 'asc'}
													<iconify-icon icon="ph:caret-up" class="text-gray-500" />
												{:else if props.sort?.order === 'desc'}
													<iconify-icon icon="ph:caret-down" class="text-gray-500" />
												{:else if props.sort?.disabled == false}
													<iconify-icon icon="ph:caret-up-down" class="text-gray-500" />
												{/if}
												<!-- {#if !props.resize.disabled}
													<div class="resizer" use:props.resize.drag />
												{/if} -->
											</div>
										</th>
									</Subscribe>
								{/each}
							</tr>
						</Subscribe>
					{/each}
				</thead>
				<tbody
					{...$tableBodyAttrs}
					class="divide-y"
					class:bg-white={bgWhite}
					use:clickOutsideAction
					on:clickoutside={closeDropDown}
				>
					{#each $pageRows as row, index (row.id)}
						<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
							<tr
								{...rowAttrs}
								class:bg-slate-100={index % 2 !== 0}
								class:cursor-pointer={rowClickable}
								class:hover:bg-gray-100={rowClickable}
								class="dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
								on:click={(e) => {
									if (rowClickable) {
										dispatch('rowClicked', getRow(row));
										closeDropDown();
									}
								}}
							>
								{#if showCheckBox}
									<td class="px-6 py-2">
										<input
											type="checkbox"
											class="cursor-pointer"
											on:change={() => handleRowCheckboxChange(getRow(row))}
											checked={selectedRows.find((x) => x.id === getRow(row).id) ?? false}
										/>
									</td>
								{/if}
								{#if showActions}
									<td class="px-5 py-2">
										<button
											class="dropdown bg-gray-200 hover:bg-gray-300 rounded-[5px] w-7 h-7 grid place-content-center border border-gray-300 dark:bg-gray-900 dark:hover:bg-gray-700"
											on:click={(e) => handleClick(e, index)}
										>
											<iconify-icon class="dots-menu dark:text-white" icon="tabler:dots-vertical" />
										</button>
										<!-- {#if dropdown === index && openDropDown} -->
										{#key renderId}
											<Dropdown open={openDropDown && dropdown === index} placement="right">
												{#each actionLists as { name, icon, otherClasses, visible }}
													{#if visible}
														{#if visible(getRow(row))}
															<DropdownItem
																data-dropdown-id={`dropdown-${row.id}`}
																class="flex text-sm items-center px-4 py-2 gap-1 hover:bg-gray-100 w-full {otherClasses}"
																on:click={(e) => {
																	dispatch('actionClicked', { name, row: getRow(row) });
																	closeDropDown();
																	e.stopPropagation();
																}}
															>
																{#if icon}
																	<iconify-icon {icon} style="font-size: 18px;" />
																{/if}
																{name}
															</DropdownItem>
														{/if}
													{:else}
														<DropdownItem
															data-dropdown-id={`dropdown-${row.id}`}
															class="flex text-sm items-center px-4 py-2 gap-1 hover:bg-gray-100 w-full whitespace-nowrap {otherClasses}"
															on:click={(e) => {
																dispatch('actionClicked', { name, row: getRow(row) });
																closeDropDown();
																e.stopPropagation();
															}}
														>
															{#if icon}
																<iconify-icon {icon} style="font-size: 18px;" />
															{/if}
															{name}
														</DropdownItem>
													{/if}
												{:else}
													{#if showViewDetails}
														<DropdownItem
															data-dropdown-id={`dropdown-${row.id}`}
															class="flex items-center px-4 py-2 gap-1 hover:bg-gray-100 w-full"
															on:click={(e) => {
																dispatch('view', getRow(row));
																closeDropDown();

																e.stopPropagation();
															}}
														>
															<iconify-icon icon="ion:eye" style="font-size: 18px;" />View Details
														</DropdownItem>
													{/if}

													{#if showEdit}
														<DropdownItem
															data-dropdown-id={`dropdown-${row.id}`}
															class="flex items-center px-4 py-2 gap-1 hover:bg-gray-100 w-full"
															on:click={(e) => {
																dispatch('edit', getRow(row));
																closeDropDown();

																e.stopPropagation();
															}}
														>
															<iconify-icon icon="ri:edit-2-fill" style="font-size: 18px;" />Edit
															Details
														</DropdownItem>
													{/if}
													{#if showDelete}
														<DropdownItem
															data-dropdown-id={`dropdown-${row.id}`}
															class="flex items-center px-4 py-2 gap-1 text-red-600 hover:bg-red-100 w-full"
															on:click={(e) => {
																dispatch('delete', getRow(row));
																closeDropDown();

																e.stopPropagation();
															}}
														>
															<iconify-icon icon="mdi:trash" style="font-size: 18px;" />Delete
															Details
														</DropdownItem>
													{/if}
												{/each}
											</Dropdown>
										{/key}

										<!-- {/if} -->
									</td>
								{/if}
								{#if showIndex}
									<td class="px-6 py-2">
										{index + 1}
									</td>
								{/if}
								{#each row.cells as cell (cell.id)}
									<Subscribe attrs={cell.attrs()} let:attrs>
										<td
											{...attrs}
											class="py-2 px-6 text-left text-sm rtl:text-right"
											class:whitespace-nowrap={hideWhiteSpace}
										>
											<Render of={cell.render()} />
										</td>
									</Subscribe>
								{/each}
							</tr>
						</Subscribe>
					{/each}
				</tbody>
			</table>
			{#if !$pageRows.length}
				<div class="w-full h-72 flex justify-center items-center">
					<div class="bg-yellow-200 py-4 px-6 rounded-md">No records found</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.resizer {
		position: absolute;
		top: 0;
		bottom: 0;
		right: -4px;
		width: 8px;
		background: #6194d9;
		cursor: col-resize;
		z-index: 1;
	}
</style>
