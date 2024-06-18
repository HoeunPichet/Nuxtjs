<template>
    <!-- Banner Section -->
    <section class="bg-slate-950 h-[32rem] w-full overflow-hidden relative">
        <img src="~/assets/images/banner/trading.jpg" class="absolute bottom-0 left-0 object-cover object-bottom w-full h-full opacity-20" loading="lazy" alt="Overview Banner">

        <div class="relative flex flex-col items-center justify-center w-full h-full">
            <svg class="text-banner">
                <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                    Hello, everyone!
                </text>
            </svg>
            <div class="flex justify-center">
                <button type="button" class="hover:bg-slate-800 uppercase w-40 px-3 py-1.5 rounded-tl-md rounded-bl-md text-white border border-white font-medium">Information</button>
                <button type="button" class="hover:bg-slate-800 uppercase w-40 px-3 py-1.5 rounded-tr-md rounded-br-md text-white border border-white font-medium flex justify-center items-center gap-2">
                    <span>Contact me</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </button>
            </div>
            <div class="flex justify-center mt-8">
                <p class="text-sm font-medium text-white">___ <span class="px-3">Pen by <span class="font-bold text-primary-500 font-oswald">Zire Frizzy</span></span> ___</p>
            </div>
        </div>
    </section>
    <!-- Basic Programming Langauge Section -->
    <section class="grid w-full grid-cols-1 mt-16">
        <dl class="flex flex-col items-center justify-center w-full gap-5 p-5">
            <dt class="text-5xl font-bold text-center text-white font-oswald">Basic Coding</dt>
            <dd class="max-w-3xl text-base font-medium text-center text-slate-400">The basic coding concepts include variable declaration, basic control structures, data structures, object-oriented programming, troubleshooting and debugging, and various programming tools.</dd>
        </dl>
        <article class="grid w-full grid-cols-3 gap-5 mx-auto mt-5 max-w-container">
            <!-- HTML -->
            <div class="relative flex flex-col w-full pb-16 overflow-hidden border rounded-xl border-slate-400">
                <div class="w-full h-56">
                    <img src="~/assets/images/programming/card-html.webp" loading="lazy" class="object-cover w-full h-full" alt="Javascript">
                </div>
                <div class="absolute bottom-0 left-0 flex gap-5 p-3 bg-white rounded-tl-3xl rounded-tr-3xl">
                    <div class="shrink-0 w-14 h-14">
                        <img src="~/assets/images/programming/icon-html.png" loading="lazy" class="object-cover w-full h-full rounded-full" alt="Javascript Logo">
                    </div>
                    <dl class="flex flex-col">
                        <dt class="text-lg font-bold text-slate-900 font-oswald">HTML</dt>
                        <dd class="text-sm text-slate-600"><span class="font-medium">Knowledge:</span> Define Document Structure, Embed Multimedia, Create Interactive Elements, Link Pages Together, etc.</dd>
                    </dl>
                </div>
            </div>
            <!-- CSS -->
            <div class="relative flex flex-col w-full pb-16 overflow-hidden border rounded-xl border-slate-400">
                <div class="w-full h-56">
                    <img src="~/assets/images/programming/card-css.png" loading="lazy" class="object-cover w-full h-full" alt="Javascript">
                </div>
                <div class="absolute bottom-0 left-0 flex gap-5 p-3 bg-white rounded-tl-3xl rounded-tr-3xl">
                    <div class="shrink-0 w-14 h-14">
                        <img src="~/assets/images/programming/icon-css.webp" loading="lazy" class="object-cover w-full h-full rounded-full" alt="Javascript Logo">
                    </div>
                    <dl class="flex flex-col">
                        <dt class="text-lg font-bold text-slate-900 font-oswald">CSS</dt>
                        <dd class="text-sm text-slate-600"><span class="font-medium">Knowledge:</span> Style Elements, Separation of Concerns, Responsive Design, Layout and Positioning, Accessibility, etc.</dd>
                    </dl>
                </div>
            </div>
            <!-- Javascript -->
            <div class="relative flex flex-col w-full pb-16 overflow-hidden border rounded-xl border-slate-400">
                <div class="w-full h-56">
                    <img src="~/assets/images/programming/card-js.png" loading="lazy" class="object-cover w-full h-full" alt="Javascript">
                </div>
                <div class="absolute bottom-0 left-0 flex gap-5 p-3 bg-white rounded-tl-3xl rounded-tr-3xl">
                    <div class="shrink-0 w-14 h-14">
                        <img src="~/assets/images/programming/icon-js.png" loading="lazy" class="object-cover w-full h-full rounded-full" alt="Javascript Logo">
                    </div>
                    <dl class="flex flex-col">
                        <dt class="text-lg font-bold text-slate-900 font-oswald">Javascript</dt>
                        <dd class="text-sm text-slate-600"><span class="font-medium">Knowledge:</span> DOM Manipulation, Event-Driven Programming, Asynchronous Programming, Object-Oriented Programming, etc.</dd>
                    </dl>
                </div>
            </div>
        </article>
    </section>
    <!-- Advanced Programming Langauge Section -->
    <section class="grid w-full grid-cols-1 mt-28 overflow-hidden bg-slate-200 h-[30rem] relative">
        <article class="grid w-full grid-cols-2 mx-auto max-w-container">
            <div class="flex flex-col gap-10 py-10">
                <h1 class="text-4xl font-bold font-oswald text-slate-900">Introduction</h1>
                <span class="text-lg text-slate-800">I'm <span class="font-medium text-slate-900">front-end developer</span>, also sometimes called a client-side developer, is the magician behind the curtain when it comes to websites and web applications. They are the ones who translate designs and ideas into the interactive experiences we see and use every day on our browsers.</span>
            </div>
            <div class="flex justify-end w-full">
                <img src="~/assets/images/programming/developer.jpg" alt="Coding Developer">
            </div>
        </article>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>