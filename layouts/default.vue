<template>
    <div>
        <header class="px-5 z-[999] w-full shadow-sm fixed top-0 left-0 bg-slate-900/50 border-b border-slate-600">
            <div class="flex items-center justify-between h-[4.5rem]">
                <!-- Logo -->
                <div class="w-auto shrink-0 h-14">
                    <img :src="logoUrl" class="w-full h-full" alt="Image Logo" />
                </div>
                <!-- Navigation -->
                <nav>
                    <ul class="header-navigation flex items-center font-medium text-slate-400 gap-2 text-[15px] relative" @mouseleave="removeActiveBar">
                        <li class="rounded-full hover:text-white" @mouseover="activeRoute">
                            <nuxt-link class="px-5 py-2" to="/">Overview</nuxt-link>
                        </li>
                        <li class="rounded-full hover:text-white" @mouseover="activeRoute">
                            <nuxt-link class="relative" to="/photography">
                                <span class="px-5 py-2">Photography</span>
                                <div class="absolute -top-3 -right-1 text-[10px] bg-sky-700 text-slate-100 font-medium rounded-full px-2 flex items-center h-4">New</div>
                            </nuxt-link>
                        </li>
                        <li class="rounded-full hover:text-white" @mouseover="activeRoute">
                            <nuxt-link class="px-5 py-2" to="/feature">Feature</nuxt-link>
                        </li>
                        <li class="rounded-full hover:text-white" @mouseover="activeRoute">
                            <nuxt-link class="px-5 py-2" to="/about">About</nuxt-link>
                        </li>
                        <li class="rounded-full hover:text-white" @mouseover="activeRoute">
                            <nuxt-link class="px-5 py-2" to="/contact">Contact</nuxt-link>
                        </li>
                    </ul>
                </nav>
                <!-- Git -->
                <a href="https://github.com/HoeunPichet" target="_blank" title="Github">
                    <svg xmlns="http://www.w3.org/2000/svg" class="p-0.5 text-white border-2 border-white rounded-full" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                </a>
                <!-- Active Hover Target -->
                <div class="active-bar hidden transition-all -z-10 absolute top-1/2 -translate-y-1/2 left-0 w-[87.8px] bg-slate-500 rounded-full h-9"></div>
            </div>
        </header>
        <main class="mt-[4.5rem]">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup>
    import myLogo from "~/assets/images/logo/logo.png"; // Import using the tilde (~) for root directory
    import Footer from "~/components/Footer"; // Import Footer

    const logoUrl = myLogo; // Assign the imported module to a variable


    /**
     * Handles the active route state by updating the position and width of the active bar element.
     * @param {Event} event - The mouseover event object.
     */
    const hoveredTarget = ref(null);
    const activeRoute = (event) =>
    {
        hoveredTarget.value = event.target; // Updates the hovered navigation link element

        const element = hoveredTarget.value;
        const activeBar = document.querySelector(".active-bar");
        const rectElem = element.getBoundingClientRect();
        const widthElem = rectElem.width;
        const leftElem = rectElem.left;
        const leftMove = leftElem;

        activeBar.classList.remove("hidden");
        activeBar.style.width = widthElem + "px";
        activeBar.style.left = leftMove + "px";
    };

    /**
     * Hides the active bar element that indicates the currently hovered navigation link.
     */
    const removeActiveBar = () =>
    {
        const activeBar = document.querySelector(".active-bar");
        activeBar.classList.add("hidden");
    }

</script>

<style lang="scss" scoped>

</style>