<script lang="ts">
import backdrop from '$static/assets/nk.jpg';
import coa from '$static/assets/coa.svg';
</script>

<div class="relative isolate overflow-hidden bg-gray-900">
    <div
        class="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
    >
    <img src={coa} alt="" class="absolute inset-0 -z-10 size-full object-cover opacity-30" />
        <!-- <defs>
            <pattern
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
            >
                <path d="M.5 200V.5H200" fill="none" />
            </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-600/20">
            <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                stroke-width="0"
            />
        </svg>
        <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#DFB6B64C-de6d-4c3f-8d64-b9761d1534cc)"
        /> -->
</div>
    <div
        class="absolute left-[calc(50%-4rem)] top-8 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
    >
        <div
            class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#447496] to-[#aaa8d8] opacity-20"
            style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
        ></div>
    </div>
    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-10">
        <div class="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
            <!-- <img class="h-11" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> -->
            <div class="mt-24 sm:mt-32 lg:mt-16">
                <a href="#" class="inline-flex space-x-6">
                    <span
                        class="rounded-full bg-gray-500/10 px-3 py-1 text-sm/6  text-gray-300 ring-1 ring-inset ring-gray-500/20"
                        >What's new</span
                    >
                    <span class="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                        <span>Just shipped v1.0</span>
                        <svg
                            class="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </a>
            </div>
            <h1 class="mt-10 text-pretty text-white text-xl font-semibold tracking-tight sm:text-3xl">
                Your Gateway to Ghana's E-Services and Payment Solutions
            </h1>
            <p class="mt-8 text-pretty text-gray-300">
                Access a comprehensive suite of digital services and secure payment options designed
                specifically for Ghana. Our platform connects you to essential government services,
                financial transactions, and digital solutions, making it easier to handle your daily needs
                online with convenience and reliability.
            </p>
            <div class="mt-10 flex items-center gap-x-6">
                <a
                    href="#"
                    class="rounded-sm bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                    >Get started</a
                >
                <a href="#" class="text-sm/6 font-medium text-white"
                    >Learn more <span aria-hidden="true">→</span></a
                >
            </div>
        </div>
        <div
            class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
        >
            <div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img
                    src={backdrop}
                    alt="App screenshot"
                    width="2432"
                    height="1442"
                    class="w-[50rem] rounded-md opacity-90 shadow-2xl "
                />
            </div>
        </div>
    </div>
</div>