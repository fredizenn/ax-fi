<script lang="ts" context="module">
	export interface TableFilter {
		search?: string;
		startDate?: Date | string | null | undefined;
		endDate?: Date | string | null | undefined;
		status?: string;
		type?: string;
		dateRange?: string;
		filter?: Record<string, any>;
		order?: any[];
		actions?: { [key: string]: string };
	}
</script>

<script lang="ts">
	import SideModal from '$cmps/layout/sideModal.svelte';
	import {
		cn,
		// endProgress,
		extractQueryParam,
		showError,
		showInfo
		// startProgress
	} from '$lib/utils';
	import { PageInfo } from '$lib/paginate';
	import { createEventDispatcher, onMount } from 'svelte';
	import debounce from 'lodash/debounce';
	import Button from './button.svelte';
	import Paginate from './paginate.svelte';
	import TableSearchBox from './tableSearchBox.svelte';
	import Modal, { type IModalSize } from './modal.svelte';
	import DataTable, { type IActionList, type ISortInfo, type ITableColumn } from './table.svelte';
	import { writable } from 'svelte/store';
	import type { ITableDataProps } from '$lib/types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { nanoid } from 'nanoid';
	import Flatpickr from 'svelte-flatpickr';
	import Svelecte from 'svelecte';
	import 'flatpickr/dist/flatpickr.css';
	import dayjs from 'dayjs';
	import { loadFromLocalStorage, saveToLocalStorage } from '$lib/localStore';
	import TableLoader from './tableLoader.svelte';
	import AlertDialog from './AlertDialog.svelte';

	export let optionalData: any = {};
	export let showEditorIn: 'modal' | 'side-modal' = 'side-modal';
	export let hideSearchBox = false;
	export let searchPlaceholder = `Search...`;
	export let addNewHeading = 'Add New Record';
	export let addButtonLabel = 'Add New';
	export let updateHeading = 'Update';
	export let newRecord: any = {};
	export let sideModalSize: IModalSize = 'sm';
	export let editorComponent: any;
	export let showModalButtons = false;
	export let actionLists: IActionList[] = [];
	export let headerColor: 'green' | 'orange' | 'white' | 'purple' | 'sky' | 'blue' = 'sky';
	export let height = 680;
	export let bgWhite = false;
	export let headerTextColor: 'black' | 'white' | 'gray' = 'black';
	export let tableColumns: ITableColumn[] = [];
	export let hiddenColumns: string[] = [];
	export let selectedRows: any[] = [];
	export let showActions = false;
	export let showMiniWidth = false;
	export let rowClickable = false;
	export let hideWhiteSpace = true;
	export let sortedColumns: ISortInfo[] = [];
	export let initialSortKeys: ISortInfo[] = [];
	export let showIndex = false;
	export let selectAllChecked = false;
	export let showCheckBox = false;
	export let showViewDetails = false;
	export let showEdit = false;
	export let allowDispatchAfterAction = false;
	export let allowLoadAfterCreate = true;
	export let showAdd = true;
	export let take = 15;
	export let reloadData = 0;
	export let isFormData = false;
	export let fillSpace = true;
	export let showTopActionsBackground = true;
	export let statusOptions: string[] = [];
	export let typesOptions: string[] = [];
	export let showTypeFilter = true;
	export let showFilterDateRange = true;
	export let showFilterStatus = true;
	export let busy = false;
	export let loadingBodySize = 10;
	export let loadingHeaderSize = 6;
	export let allowSticky = true;
	export let query = '';
	export let customFilterValues: any = {};
	export let showDelete = false;

	export let read = async (skip?: number, take?: number, defn?: TableFilter) => {
		return <any>{};
	};
	export let createEntry = async (x: any) => {
		showError('Not implemented');
		return <any>null;
	};
	export let updateEntry = async (x: any) => {
		showError('Not implemented');
		return <any>null;
	};
	export let deleteEntry = async (x: any) => {
		showError('Not implemented');
		return <any>null;
	};
	// export let tableActions: IActionList[] = [
	// 	{ icon: 'ri:edit-2-fil', name: 'Edit detail' }
	// 	// { icon: 'ri:edit-2-fil', name: 'Edit detail' }
	// ];
	let tableDataInfo: ITableDataProps<any> | undefined | null;
	const pageSizeKey = 'ekosDataTablePageSize';

	let showForm = false;
	let oldQuery = '';
	let pageInfo = new PageInfo();
	let editorHeading = '';
	let activeEntry = <any>{};
	let editing = false;
	let editor: any;
	let isValid = false;
	let tableData: any[] = [];
	let isLoading = false;
	let deleteLoading = false;
	let showAlert = false;

	$: ({ searchParams, pathname, search } = $page.url);

	// $: filters = {
	// 	search: extractQueryParam(search, 'query') ?? '',
	// 	// page: extractQueryParam(search, 'page') ?? pageInfo.currentPage,
	// 	status: extractQueryParam(search, 'status') ?? '',
	// 	type: extractQueryParam(search, 'type'),
	// 	startDate: extractQueryParam(search, 'startDate')
	// 		? new Date(extractQueryParam(search, 'startDate'))
	// 		: null,
	// 	endDate: extractQueryParam(search, 'endDate')
	// 		? new Date(extractQueryParam(search, 'endDate'))
	// 		: null
	// };

	$: pageNumber = extractQueryParam(search, 'page')
		? Number(extractQueryParam(search, 'page'))
		: pageInfo.currentPage;

	{
		const res = loadFromLocalStorage<{ pageSize: string }>(pageSizeKey);
		if (res?.pageSize) {
			pageInfo.setPageSize(Number(res?.pageSize));
		} else {
			pageInfo.setPageSize(take);
		}
	}

	let id = nanoid();
	let pickerId = nanoid();
	let fullPickerId = `#${pickerId}`;
	let options: any = {
		enableTime: false,
		noCalendar: false,
		dateFormat: 'd-M-Y',
		altFormat: 'd-M-Y', // enableTime ? "F j, Y" : "F j, Y H:i" // "Y-m-d H:i" //
		altInput: true,
		weekNumbers: false,
		mode: 'range',
		element: fullPickerId,
		onChange(selectedDates: any, dateStr: any) {
			// console.log('changed', { name, selectedDates, dateStr });
		}
	};

	let allColumns = writable<any>([]);

	const dispatch = createEventDispatcher();

	async function fetchData(page: number, params: TableFilter) {
		try {
			// startProgress();
			let currentPage = 0;
			busy = true;
			if (params.search) {
				// if (!pageInfo.hasNextPage) {
				pageInfo.currentPage = 1;
				// }
				currentPage = pageInfo.currentPage;
			} else {
				currentPage = page || pageInfo.currentPage;
			}
			let newParams: any = {
				pageNumber: currentPage,
				pageSize: pageInfo.pageSize,
				search: params.search ?? '',
				filter: params.filter ?? {},
				order: params.order ?? []
			};
			const ret: { success: boolean; message: string; data?: any } = await read(
				newParams.pageNumber,
				newParams.pageSize,
				{ ...params, filter: { ...customFilterValues }, search: query ?? '' }
			);

			if (!ret.success) {
				showError(ret.message || 'Failed to load data');
				return true;
			}

			const xs = ret.data;
			pageInfo.totalItems = xs.totalCount;
			pageInfo.setHasNextPage(xs.pageInfo.hasNextPage);
			pageInfo.setHasPrevPage(xs.pageInfo.hasPreviousPage);
			tableData = xs.items;
			// if (params.search) {
			// 	await goto(pathname);
			// }
		} catch (e: any) {
			showError(e.message || e);
		} finally {
			// endProgress();
			busy = false;
		}
	}

	async function getMore() {
		if (pageInfo.gotoNext()) {
			const current = new URLSearchParams(Array.from(searchParams.entries()));
			const value = pageInfo.currentPage;

			if (!value) {
				current.delete('page');
			} else {
				current.set('page', String(value));
			}

			const search = current.toString();
			const page = search ? `?${search}` : '';
			await goto(`${pathname}${page}`);
			await fetchData(value, { search: query });
		}
	}

	async function getLess() {
		if (pageInfo.gotoPrev()) {
			const current = new URLSearchParams(Array.from(searchParams.entries()));
			const value = pageInfo.currentPage;

			if (!value) {
				current.delete('page');
			} else {
				current.set('page', String(value));
			}

			const search = current.toString();
			const page = search ? `?${search}` : '';
			await goto(`${pathname}${page}`);
			await fetchData(value, { search: query });
		}
	}

	function addNew() {
		editorHeading = addNewHeading;
		activeEntry = (newRecord && { ...newRecord }) || null;
		editing = false;
		showForm = true;
	}

	function closeSideModal() {
		showForm = false;
		activeEntry = null;
	}

	async function save(entry: any) {
		const { values } = entry;
		try {
			isLoading = true;
			// startProgress();

			const ret: any = editing
				? await updateEntry({ ...values, id: activeEntry.id })
				: await createEntry(values);

			if (ret.success) {
				const successMessage = allowLoadAfterCreate
					? editing
						? 'Successfully updated record'
						: 'Successfully added record'
					: '';
				showInfo(ret.message || successMessage);
				allowLoadAfterCreate && (await fetchData(pageNumber, { search: query }));

				allowDispatchAfterAction &&
					dispatch('afterAction', { type: 'create', values, data: ret.data });

				showForm = false;
				activeEntry = {};
			} else {
				showError(ret.message);
			}
		} catch (e: any) {
			showError(e.message || e);
		} finally {
			isLoading = false;
			// endProgress();
		}
	}

	function handleEdit({ detail }: any) {
		activeEntry = detail;
		editorHeading = updateHeading;
		editing = true;
		showForm = true;
	}
	function handleView({ detail }: any) {
		activeEntry = detail;
		editorHeading = addNewHeading;
		editing = true;
		showForm = true;
	}

	function closeAlert() {
		activeEntry = {};
		showAlert = false;
		if (deleteLoading) deleteLoading = false;
	}
	function handleDelete({ detail }: any) {
		activeEntry = detail;
		showAlert = true;
		// editorHeading = updateHeading;
		// editing = true;
		// showForm = true;
	}

	async function doDelete(id: number) {
		try {
			deleteLoading = true;
			const ret = await deleteEntry(id);
			if (!ret.success) {
				showError(ret.message);
				return;
			}
			showInfo(ret.message);
			closeAlert();
			await fetchData(pageNumber, { search: query });
		} catch (error: any) {
			showError(error?.message || error);
		} finally {
			deleteLoading = false;
		}
	}

	async function handleDone() {
		closeSideModal();
		await fetchData(pageNumber, { search: query });
	}

	const debouncedSearch = debounce(fetchData, 300);

	$: if (reloadData > 0) {
		// pageInfo.currentPage = 1;
		fetchData(pageNumber, { search: query });
		reloadData = 0;
	}

	async function handlePageSize(val: number) {
		// await fetchData()
		pageInfo.setPageSize(val);
		await fetchData(pageInfo.currentPage, { search: query });

		saveToLocalStorage(pageSizeKey, { pageSize: val });
	}

	$: if (query) {
		oldQuery = query;
		debouncedSearch(pageNumber, { search: query });
	} else if (oldQuery && !query) {
		debouncedSearch(pageNumber, { search: query });
		oldQuery = '';
	}

	onMount(() => {
		if (pageNumber) {
			pageInfo.currentPage = pageNumber;
			fetchData(pageNumber, { search: query });
		} else {
			fetchData(pageInfo.currentPage, { search: query });
		}
	});
</script>

<div class="w-full h-full flex flex-col gap-2 overflow-y-hidden">
	<div
		class="flex flex-col gap-2"
		class:custom-container={!fillSpace}
		class:px-4={fillSpace}
		class:background={showTopActionsBackground}
		class:py-2={!showTopActionsBackground}
	>
		<div class="flex flex-col lg:flex-row gap-2 sm:justify-between lg:items-center">
			<div
				class:hidden={hideSearchBox}
				class="flex-grow w-full"
				class:lg:w-[350px]={!showTypeFilter}
				class:lg:w-[250px]={showTypeFilter}
			>
				<TableSearchBox placeholder={searchPlaceholder} bind:value={query} />
			</div>
			<div class="flex-grow">
				<div
					class="grid gap-4 items-center"
					class:lg:grid-cols-2={!showTypeFilter}
					class:lg:grid-cols-3={showTypeFilter}
				>
					<!-- <div class="col-span-1" class:hidden={!showTypeFilter}>
						<Svelecte
							placeholder={$i('forms.type')}
							options={typesOptions}
							clearable
							on:change={(e) => handleTypeChange(e)}
							labelAsValue
							value={filters.type}
						/>
					</div>
					<div class="col-span-1" class:hidden={!showFilterStatus}>
						<Svelecte
							placeholder={$i('forms.status')}
							options={statusOptions}
							clearable
							on:change={(e) => handleStatusChange(e)}
							labelAsValue
							value={filters.status}
						/>
					</div> -->
					<!-- <div class=" col-span-1" class:hidden={!showFilterDateRange}>
						<Flatpickr
							{options}
							value={`${filters && filters.startDate ? filters : filters.startDate && filters.endDate ? `${filters.startDate} to ${filters.endDate}` : ''}`}
							bind:formattedValue
							on:change={(e) => handleDateChange(e)}
							placeholder={$i('forms.dateRange')}
							class={cn(
								'border border-gray-300 border-solid h-[38.4px] rounded-[5px] w-full placeholder:font-thin cursor-pointer disabled:cursor-default'
							)}
						/>
					</div> -->
				</div>
			</div>
			<div class="flex flex-col sm:flex-row sm:items-center gap-4">
				<div>
					<div class="flex items-center gap-2">
						<div class="wh whitespace-nowrap">Page Size</div>
						<Svelecte
							value={pageInfo.pageSize}
							options={[
								{ value: 15, label: '15' },
								{ value: 20, label: '20' },
								{ value: 25, label: '25' },
								{ value: 30, label: '30' },
								{ value: 40, label: '40' },
								{ value: 45, label: '45' },
								{ value: 50, label: '50' },
								{ value: 100, label: '100' }
							]}
							placeholder="15"
							on:change={(e) => {
								// console.log(e);
								const { value } = e.detail;
								// dispatch('pageSizeClicked', value);
								handlePageSize(value);
							}}
						/>
					</div>
				</div>
				<div>
					<Paginate
						onNextPage={getMore}
						onPreviousPage={getLess}
						currentPage={pageInfo.currentPage}
						totalPages={pageInfo.totalPages}
						hasNextPage={pageInfo.hasNextPage}
						hasPreviousPage={pageInfo.hasPrevPage}
						refresh={() => {
							fetchData(pageNumber, { search: query });
						}}
						tableColumns={$allColumns}
						bind:hiddenColumns
					/>
				</div>
				<div class:hidden={!showAdd} class="grid">
					<Button label={addButtonLabel} color="primary" on:click={addNew} />
				</div>
			</div>
		</div>
	</div>
	<div class:custom-container={!fillSpace} class="w-full h-full flex flex-col gap-2">
		<slot
			name="tableFilters"
			pageSize={pageInfo.pageSize ?? 0}
			currentPage={pageInfo.currentPage ?? 0}
			search={query ?? ''}
		/>
		{#if busy}
			<TableLoader bodySize={loadingBodySize} headerSize={loadingHeaderSize} />
		{:else}
			<div class="flex-grow h-full w-full overflow-y-auto pb-10">
				<DataTable
					height={pageInfo.pageSize === 15 ? height : 800}
					{headerColor}
					data={tableData}
					{bgWhite}
					{headerTextColor}
					{tableColumns}
					{initialSortKeys}
					{showActions}
					{showCheckBox}
					{showViewDetails}
					{showEdit}
					{selectAllChecked}
					{showMiniWidth}
					{rowClickable}
					{hideWhiteSpace}
					{selectedRows}
					{showIndex}
					{actionLists}
					{showDelete}
					bind:hiddenColumns
					bind:allColumns
					bind:sortedColumns
					on:cancel
					on:edit={handleEdit}
					on:feed
					on:handleCheckbox
					on:view={handleView}
					on:delete={handleDelete}
					on:actionClicked
					on:rowClicked
				/>
			</div>
		{/if}
	</div>
</div>

<Modal
	open={showForm && showEditorIn === 'modal'}
	title={editorHeading}
	size={sideModalSize}
	on:close={closeSideModal}
	showModalButtons
	on:submit={() => editor.submit()}
>
	<div>
		<svelte:component
			this={editorComponent}
			recordId={activeEntry.id}
			data={activeEntry}
			bind:this={editor}
			bind:isValid
			on:submit={(e) => save(e.detail)}
			{optionalData}
			on:done={handleDone}
			on:changed
		/>
	</div>
</Modal>

<SideModal
	open={showForm && showEditorIn === 'side-modal'}
	title={editorHeading}
	on:close={closeSideModal}
	size={sideModalSize}
	{showModalButtons}
	{isValid}
	busy={isLoading}
	on:submit={() => editor.submit()}
>
	<svelte:component
		this={editorComponent}
		recordId={activeEntry.id}
		data={activeEntry}
		bind:this={editor}
		bind:isValid
		on:submit={(e) => save(e.detail)}
		{optionalData}
		on:done={handleDone}
		on:changed
	/>
</SideModal>

<AlertDialog
	bind:open={showAlert}
	message={`Are you sure you want to delete this?`}
	icon="ion:trash"
	on:cancel={closeAlert}
	busy={deleteLoading}
	on:yes={(_) => doDelete(activeEntry?.id)}
/>

<style>
	.background {
		@apply bg-gradient-to-b from-indigo-100 via-teal-50 to-[#f7f6f2] py-2.5;
	}
</style>
