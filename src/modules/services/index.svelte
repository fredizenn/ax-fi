<script lang="ts">
	import gra from '$static/assets/gra.webp';
	import passport from '$static/assets/ghana-passport.jpeg';
	import gis from '$static/assets/gis.jpg';
	import gis2 from '$static/assets/gis2.jpg';
</script>

<!-- <div class="">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<h2 class="text-2xl font-bold text-gray-900">Popular Services</h2>

			<div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
				<div class="group relative cursor-pointer">
					<a href="/services/gra">
						<img
							src={gra}
							alt="Ghana Revenue Authority"
							class="h-40 w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-48 sm:aspect-[2/1] lg:aspect-square"
						/>

						<p class="pt-2 text-sm font-medium text-gray-700">Ghana Revenue Authority</p>
					</a>
				</div>
				<div class="group relative">
					<img
						src={passport}
						alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
						class="h-40 w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-48 sm:aspect-[2/1] lg:aspect-square"
					/>

					<p class="pt-2 text-sm font-medium text-gray-700">Passport Office</p>
				</div>
				<div class="group relative">
					<img
						src={gis2}
						alt="Collection of four insulated travel bottles on wooden shelf."
						class="object-fit h-40 w-full rounded-lg bg-white group-hover:opacity-75 max-sm:h-48 sm:aspect-[2/1] lg:aspect-square"
					/>
					
					<p class=" pt-2 text-sm font-medium text-gray-700">Ghana Immigration Service</p>
				</div>
			</div>
		</div>
	</div>
</div> -->

<div class="relative isolate bg-white px-6 py-6 sm:py-8 lg:px-8">
	<div
		class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
		aria-hidden="true"
	>
		<div
			class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#c2ffcf] to-[#89b1fc] opacity-30"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>
	<div class="mx-auto max-w-4xl text-center">
		<p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
			Popular Services
		</p>
	</div>
	<p
		class="mx-auto mt-6 max-w-2xl text-pretty text-center text-gray-600"
	>
		Explore our most frequently accessed government services. Here you'll find direct links to
		essential institutions like the Ghana Revenue Authority for tax matters, the Passport Office for
		travel documentation, and Ghana Immigration for citizenship and visa services - all designed to
		streamline your interaction with key government agencies.
	</p>
	<div
		class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
	>
		<div
			class="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none"
		>
			<h3 id="tier-hobby" class="text-base/7 font-semibold text-black">Passport Office</h3>
			<!-- <p class="mt-4 flex items-baseline gap-x-2">
				<span class="text-5xl font-semibold tracking-tight text-gray-900">$29</span>
				<span class="text-base text-gray-500">/month</span>
			</p> -->
			<p class="mt-6 text-base/7 text-gray-600">
				The Passports Office, a bureau of the Ministry is responsible for the issue of passports and other travel documents of Ghana to Ghanaian Citizens.
			</p>
			<ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
				<!-- <li class="flex gap-x-3">
					<svg
						class="h-6 w-5 flex-none text-indigo-600"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg>
					Apply for a travel passport
				</li> -->
				<!-- <li class="flex gap-x-3">
					<svg
						class="h-6 w-5 flex-none text-indigo-600"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg>
					Up to 10,000 subscribers
				</li> -->
				
			</ul>
			<a
				href="#"
				aria-describedby="tier-hobby"
				class="mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:mt-10"
				>Dive in &rarr;</a
			>
		</div>
		<div class="relative rounded-3xl bg-gray-900 p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
			<h3 id="tier-enterprise" class="text-base/7 font-semibold text-white">
				Ghana Revenue Authority
			</h3>
			<!-- <p class="mt-4 flex items-baseline gap-x-2">
				<span class="text-5xl font-semibold tracking-tight text-white">$99</span>
				<span class="text-base text-gray-400">/month</span>
			</p> -->
			<p class="mt-6 text-base/7 text-gray-300">
				File and Pay Taxes
			</p>
			<ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
				<li class="flex gap-x-3">
					<svg
						class="h-6 w-5 flex-none text-indigo-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg>
					Domestic Tax Bill
				</li>
				<li class="flex gap-x-3">
					<svg
						class="h-6 w-5 flex-none text-indigo-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg>
					File Returns &amp Pay Taxes
				</li>
				<li class="flex gap-x-3">
					<svg
						class="h-6 w-5 flex-none text-indigo-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg>
					Vehicle Income Tax
				</li>
				<li class="flex gap-x-3">
					<svg
						class="h-6 w-5 flex-none text-indigo-400"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
							clip-rule="evenodd"
						/>
					</svg>
					Customs Duty
				</li>
				
			</ul>
			<a
				href="#"
				aria-describedby="tier-enterprise"
				class="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
				>Dive in &rarr;</a
			>
		</div>
	</div>
</div>
