<template>
    <div>
        <header class="px-5 z-[999] w-full shadow-sm fixed top-0 left-0 bg-slate-900/50 border-b border-slate-600">
            <div class="flex items-center justify-between h-[4.5rem]">
                <div class="w-auto shrink-0 h-14">
                    <img :src="logoUrl" class="w-full h-full" alt="Image Logo" />
                </div>
                <nav>
                    <ul class="header-navigation flex items-center font-medium text-slate-400 gap-2 text-[15px] relative" @mouseleave="removeActiveBar">
                        <li class="rounded-full hover:text-white" @mouseover="activeRoute">
                            <nuxt-link class="px-5 py-2" to="/">Overview</nuxt-link>
                        </li>
                        <li class="rounded-full hover:text-white" @mouseover="activeRoute">
                            <nuxt-link class="relative" to="/photography">
                                <span class="px-5 py-2">Photography</span>
                                <div class="absolute -top-3 -right-1 text-[10px] bg-sky-500 text-white font-medium rounded-full px-2 flex items-center h-4">New</div>
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
                <div class="active-bar hidden transition-all -z-10 absolute top-1/2 -translate-y-1/2 left-0 w-[87.8px] bg-slate-500 rounded-full h-9"></div>
            </div>
        </header>
        <main class="mt-[4.5rem]">
            <slot />
        </main>

        <footer class="mt-5">

        </footer>
    </div>
</template>

<script setup>
    import myLogo from '~/assets/images/logo/logo.png'; // Import using the tilde (~) for root directory

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