<template>
    <div>
        <header class="px-5 relative z-[999] shadow-sm">
            <div class="flex h-20 items-center justify-between">
                <div class="text-color font-bold text-xl font-mono italic">Welcome</div>
                <nav>
                    <ul class="flex font-medium text-slate-600 gap-7 text-[15px]">
                        <li>
                            <nuxt-link to="/">Home</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/product">Product</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/special-deal">
                                <div class="relative">
                                    <span>Special Deal</span>
                                    <div class="absolute -top-2 -right-5 text-[10px] bg-red-500 text-white font-medium rounded-full px-2 flex items-center h-4">New</div>
                                </div>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/feature">Feature</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about">About</nuxt-link>
                        </li>
                    </ul>
                </nav>
                <aside class="flex items-center gap-16">
                    <div class="flex items-center gap-5">
                        <button type="button" class="text-color font-medium relative">
                            <i class="bi bi-cart3 text-xl"></i>
                            <div class="absolute -top-1 -right-2 rounded-full bg-red-500 text-white flex items-center justify-center w-4 h-4">
                                <span class="text-[10px]">0</span>
                            </div>
                        </button>
                        <div>
                            <button type="button" class="px-3 py-1 text-white font-medium rounded-lg bg-color">Login</button>
                        </div>
                    </div>
                </aside>
            </div>
        </header>
        <main>
            <slot />
        </main>

        <footer>

        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>