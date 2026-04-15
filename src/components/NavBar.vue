<script setup>
import { RouterLink } from 'vue-router';

import ThemeSwap from './ThemeSwap.vue';

</script>

<template>
    <div class="navbar bg-base-100 shadow-sm">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="-1"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                        <RouterLink to="/todo">Todo</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/tag">Tag</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                </ul>
            </div>
            <RouterLink
                class="text-xl normal-case text-primary font-bold px-2 hover:cursor-pointer transition duration-300 ease-in-out"
                to="/">Mixsu Todo</RouterLink>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <RouterLink to="/todo">Todo</RouterLink>
                </li>
                <li>
                    <RouterLink to="/tag">Tag</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
            </ul>
        </div>
        <div class="navbar-end">
            <ThemeSwap />
        </div>
    </div>
</template>