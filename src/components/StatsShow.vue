<script setup>
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore()
</script>

<template>
    <!-- 定位在页面的底部中心 -->
    <!-- <div class="stats fixed bottom-5 left-1/2 -translate-x-1/2 transform stats-horizontal shadow w-5/6">
        <div class="stat">
            <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-8 w-8 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div class="stat-title">Total Tasks</div>
            <div class="stat-value">{{ todoStore.totalCount }}</div>
            <div class="stat-desc">Long long ago ...</div>
        </div>

        <div class="stat">
            <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-8 w-8 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                    </path>
                </svg>
            </div>
            <div class="stat-title">Active Tasks</div>
            <div class="stat-value text-warning">{{ todoStore.unfinishedCount }}</div>
            <div class="stat-desc">Just do it !</div>
        </div>

        <div class="stat">
            <div class="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-8 w-8 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
            </div>
            <div class="stat-title">Finished Tasks</div>
            <div class="stat-value text-success">{{ todoStore.finishedCount }}</div>
            <div class="stat-desc">You are great !</div>
        </div>
    </div> -->

    <div
        class="flex left-1/2 transform -translate-x-1/2 md:w-lg w-sm fixed bottom-5 shadow rounded-xl p-2 hover:-translate-y-2 transition duration-300 ease-in-out gap-2">
        <div class="w-1/3 flex flex-col gap-2 px-3">
            <div class="text-xs opacity-60 ">Total Tasks</div>
            <div class="flex justify-between items-center">
                <p class="text-3xl font-extrabold">{{ todoStore.totalCount }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-8 w-8 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </div>
            <div class="text-xs opacity-60">ヾ(≧▽≦*)o</div>
        </div>
        <div class="w-1/3 flex flex-col gap-2 px-3 border-x-2 border-primary/30 border-dashed">
            <div class="text-xs opacity-60">Active Tasks</div>
            <div class="flex justify-between items-center">
                <p class="text-3xl font-extrabold text-warning">{{ todoStore.unfinishedCount }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-8 w-8 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                    </path>
                </svg>
            </div>
            <div class="text-xs opacity-60">Just do it !</div>
        </div>
        <div class="w-1/3 flex flex-col gap-2 px-3">
            <div class="text-xs opacity-60">Finished Tasks</div>
            <div class="flex justify-between items-center">
                <p class="text-3xl font-extrabold text-success">{{ todoStore.finishedCount }}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-8 w-8 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
            </div>
            <div class="text-xs opacity-60">You are great !</div>
        </div>
    </div>
</template>