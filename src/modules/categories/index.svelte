<script lang="ts">
	import arch from '$static/assets/gh-arch.jpg';
	export let title = 'Money and Finance';
	export let description = 'Income, Personal, Corporate Taxes';
	export let buttonText = 'Learn more';

	export let filter: 'Individual' | 'Business' = 'Individual';
	// export let imageUrl = "/path/to/your/image.jpg";
</script>

<div class="">
	<div class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:max-w-none">
			<div class="w-full flex items-center justify-between">
				<h2 class="text-2xl font-bold text-gray-900">Categories</h2>
				<a href="/services" class="text-sm/6 font-medium text-black"
						>View all<span aria-hidden="true">→</span></a
					>
			</div>
			
			<!-- <div class="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
				<div class="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
				  <div class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
					<div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
					  <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
						<img class="absolute inset-0 size-full rounded-2xl bg-gray-800 object-cover shadow-2xl" src={arch} alt="">
					  </div>
					</div>
					<div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
					  <figure class="relative isolate pt-6 sm:pt-12">
						<svg viewBox="0 0 162 128" fill="none" aria-hidden="true" class="absolute left-0 top-0 -z-10 h-32 stroke-white/20">
						  <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z" />
						  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
						</svg>
						<blockquote class="text-xl/8 font-semibold text-white sm:text-2xl/9">
						  <p>Financial Services</p>
						</blockquote>
						<figcaption class="mt-8 text-base">
						  <div class="font-semibold text-white">Judith Black</div>
						  <div class="mt-1 text-gray-400">Income, Personal, Corporate Taxes</div>
						</figcaption>
					  </figure>
					</div>
				  </div>
				</div>
			  </div> -->
			  
			<div
				class="mt-6 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
			>
				<div
					class="hover:bg-slate-100 transition-all duration-200 group relative rounded-tl-lg rounded-tr-lg bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:rounded-tr-none"
				>
					
					<div class="mt-8 ">
						<h3 class="text-base font-semibold text-gray-900">
							<a href="#" class="focus:outline-none">
								<!-- Extend touch target to entire panel -->
								<span class="absolute inset-0" aria-hidden="true"></span>
								Business Registration And Permits
							</a>
						</h3>
						<p class="mt-2 text-sm text-gray-500">
							Managing legal requirements for establishing and operating a company, including
							business registration and maintaining necessary documentation and licenses.
						</p>
					</div>
					
				</div>
				<div
					class="hover:bg-slate-100 transition-all duration-200 group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:rounded-tr-lg"
				>
					
					<div class="mt-8">
						{#if filter === 'Individual'}
						<h3 class="text-base font-semibold text-gray-900">
							<a href="#" class="focus:outline-none">
								<span class="absolute inset-0" aria-hidden="true"></span>
								Births, Deaths &amp; Marriages
							</a>
						</h3>
						<p class="mt-2 text-sm text-gray-500">
							Request official documentation of major life events, including records of births,
							deaths, marriages, and divorces.
						</p>
						{:else}
						<div class="text-base font-semibold text-gray-900">
							<a href="#" class="focus:outline-none">
								<span class="absolute inset-0" aria-hidden="true"></span>
								Transportation
							</a>
						</div>
						<p class="mt-2 text-sm text-gray-500">
							Obtain Driver's License, Vehicle Registration, and Road Worthy Certificates.
						</p>
						{/if}
					</div>
					
				</div>
				<div
					class="hover:bg-slate-100 transition-all duration-200 group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
				>
					
					<div class="mt-8">
						<h3 class="text-base font-semibold text-gray-900">
							<a href="#" class="focus:outline-none">
								<!-- Extend touch target to entire panel -->
								<span class="absolute inset-0" aria-hidden="true"></span>
								Social Services and Welfare
							</a>
						</h3>
						<p class="mt-2 text-sm text-gray-500">
							Encompasses government assistance programs and support initiatives provided by the
							Government of Ghana.
						</p>
					</div>
					
				</div>
				<div
					class="hover:bg-slate-100 transition-all duration-200 group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
				>
					
					<div class="mt-8">
						<h3 class="text-base font-semibold text-gray-900">
							<a href="#" class="focus:outline-none">
								<!-- Extend touch target to entire panel -->
								<span class="absolute inset-0" aria-hidden="true"></span>
								Health And Food Services
							</a>
						</h3>
						<p class="mt-2 text-sm text-gray-500">
							Healthcare services and regulatory standards for food, medicine, and pharmaceutical
							products.
						</p>
					</div>
					
				</div>
				<div
					class="hover:bg-slate-100 transition-all duration-200 group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:rounded-bl-lg"
				>
					
					<div class="mt-8">
						<h3 class="text-base font-semibold text-gray-900">
							<a href="#" class="focus:outline-none">
								<!-- Extend touch target to entire panel -->
								<span class="absolute inset-0" aria-hidden="true"></span>
								Police, Justice and Safety
							</a>
						</h3>
						<p class="mt-2 text-sm text-gray-500">
							Contact law enforcement agencies, initiate legal proceedings, or get in touch with
							security services.
						</p>
					</div>
				
				</div>
				<div
					class="hover:bg-slate-100 transition-all duration-200 group relative rounded-bl-lg rounded-br-lg bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 sm:rounded-bl-none"
				>
					
					<div class="mt-8">
						<h3 class="text-base font-semibold text-gray-900">
							<a href="#" class="focus:outline-none">
								<!-- Extend touch target to entire panel -->
								<span class="absolute inset-0" aria-hidden="true"></span>
								Energy and Petroleum
							</a>
						</h3>
						<p class="mt-2 text-sm text-gray-500">
							Request official documents, permits, and utility connections including certifications
							and electrical service authorization.
						</p>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</div>
