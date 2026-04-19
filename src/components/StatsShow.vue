<script setup>
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore()
</script>

<template>
    <div
        class="fixed inset-x-4 bottom-5 max-w-lg mx-auto shadow rounded-xl p-2 hover:-translate-y-2 transition duration-300 ease-in-out gap-2 bg-base-100/80 backdrop-blur-sm">
        <!-- 内部 flex 容器，保证在小屏下内容不换行 -->
        <div class="flex items-stretch divide-x divide-dashed divide-primary/30">
            <!-- Total Tasks -->
            <div class="flex-1 flex flex-col gap-1 px-3">
                <div class="text-xs opacity-60 whitespace-nowrap">Total Tasks</div>
                <div class="flex justify-between items-center">
                    <p class="text-2xl sm:text-3xl font-extrabold">{{ todoStore.totalCount }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block h-6 w-6 sm:h-8 sm:w-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="text-xs opacity-60 whitespace-nowrap">ヾ(≧▽≦*)o</div>
            </div>

            <!-- Active Tasks -->
            <div class="flex-1 flex flex-col gap-1 px-3">
                <div class="text-xs opacity-60 whitespace-nowrap">Active Tasks</div>
                <div class="flex justify-between items-center">
                    <p class="text-2xl sm:text-3xl font-extrabold text-warning">{{ todoStore.unfinishedCount }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block h-6 w-6 sm:h-8 sm:w-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4">
                        </path>
                    </svg>
                </div>
                <div class="text-xs opacity-60 whitespace-nowrap">Just do it !</div>
            </div>

            <!-- Finished Tasks -->
            <div class="flex-1 flex flex-col gap-1 px-3">
                <div class="text-xs opacity-60 whitespace-nowrap">Finished Tasks</div>
                <div class="flex justify-between items-center">
                    <p class="text-2xl sm:text-3xl font-extrabold text-success">{{ todoStore.finishedCount }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block h-6 w-6 sm:h-8 sm:w-8 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                        </path>
                    </svg>
                </div>
                <div class="text-xs opacity-60 whitespace-nowrap">You are great !</div>
            </div>
        </div>
    </div>
</template>