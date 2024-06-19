<template>
    <footer class="grid w-full grid-cols-1 px-5 py-10 bg-slate-700">
        <section class="grid w-full h-full mx-auto gap-7 md:grid-cols-3 max-w-container">
            <article class="flex flex-col w-full">
                <div class="flex flex-col items-center gap-3">
                    <img class="w-24" src="~/assets/images/logo/logo.png" alt="Logo" />
                    <div class="flex flex-col">
                        <p class="flex justify-center gap-2 text-lg font-bold font-oswald">
                            <span class="text-white">NAME</span>
                            <span class="text-primary-500">HOEUN PICHET</span>
                        </p>
                        <p class="text-lg font-bold text-center text-orange-500 font-oswald">FRONT-END DEVELOPER</p>
                    </div>
                    <div class="flex self-center overflow-hidden border border-white divide-x rounded-lg w-fit">
                        <div v-for="n in 6" :key="n" class="px-5 py-4 bg-yellow-500"></div>
                    </div>
                </div>
            </article>
            <article class="flex flex-col w-full">
                <h1 class="relative w-fit text-lg font-bold text-white font-oswald before:absolute before:bottom-0 before:left-0 before:contents-[''] before:h-0.5 before:rounded-full before:w-12 before:bg-primary-500">
                    General Information
                </h1>
                <div class="flex flex-col w-full mt-5">
                    <p class="text-base text-slate-400 font-kanit">Front-end developers are the creative minds behind the interactive experiences you see and use on your web browser every day. They act as the bridge between designers and users, translating stunning design concepts into functional and visually appealing user interfaces (UIs).</p>
                </div>
            </article>
            <article class="flex flex-col w-full">
                <h1 class="relative w-fit text-lg font-bold text-white font-oswald before:absolute before:bottom-0 before:left-0 before:contents-[''] before:h-0.5 before:rounded-full before:w-12 before:bg-primary-500">
                    Have a Questions ?
                </h1>
                <ul role="list" class="flex flex-col w-full mt-5 gap-y-2">
                    <li role="listitem" class="flex flex-wrap items-center w-full gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span class="text-slate-400 font-base font-kanit">(855) 88 711 5088</span>
                    </li>
                    <li role="listitem" class="flex flex-wrap items-center w-full gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <span class="text-slate-400 font-base font-kanit">good123vichet@gmail.com</span>
                    </li>
                    <li role="listitem" class="flex flex-wrap w-full gap-x-2">
                        <span class="text-slate-400 font-base font-kanit">Street #271, Teuk Thlar Commune, Sen Sok District, Phnom Penh, Cambodia</span>
                    </li>
                </ul>
            </article>
        </section>
        <div class="w-full mx-auto mt-8 max-w-container">
            <div class="w-full h-0.5 max-w-sm mx-auto bg-white"></div>
            <nav class="flex items-center justify-center w-full p-5 pb-0">
                <ul role="list" class="flex items-center justify-center gap-3">
                    <!-- Facebook -->
                    <li role="listitem" aria-label="Read more about Facebook">
                        <a href="#" aria-labelledby="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 p-0.5 text-slate-100 fill-sky-600 bg-sky-600 border border-slate-100 rounded-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                            </svg>
                        </a>
                    </li>
                    <!-- Instagram -->
                    <li role="listitem" aria-label="Read more about Instagram">
                        <a href="#" aria-labelledby="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 p-0.5 text-slate-100 fill-pink-600 bg-pink-600 border border-slate-100 rounded-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                            </svg>
                        </a>
                    </li>
                    <!-- Twitter -->
                    <li role="listitem" aria-label="Read more about Twitter">
                        <a href="#" aria-labelledby="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 p-0.5 text-slate-100 fill-sky-500 bg-slate-100 border border-slate-100 rounded-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                            </svg>
                        </a>
                    </li>
                    <!-- You Tube -->
                    <li role="listitem" aria-label="Read more about You Tube">
                        <a href="#" aria-labelledby="You Tube">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 p-0.5 text-slate-100 fill-red-500 bg-white border border-slate-100 rounded-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                            </svg>
                        </a>
                    </li>
                    <!-- LinkedIn -->
                    <li role="listitem" aria-label="Read more about LinkedIn">
                        <a href="#" aria-labelledby="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 p-0.5 text-slate-100 fill-sky-700 bg-sky-700 border border-slate-100 rounded-md" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                                <rect x="2" y="9" width="4" height="12"/>
                                <circle cx="4" cy="4" r="2"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
    <div class="w-full py-3 text-center bg-sky-700">
        <p class="px-5 text-sm font-medium text-center text-white font-kanit">Copyright @2024 All rights reserved</p>
    </div>
</template>