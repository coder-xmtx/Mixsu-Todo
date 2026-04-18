<script setup>
// 接收父组件传递的数据
const props = defineProps(['todoList'])


</script>

<template>
    <ul class="list rounded-box gap-3">

        <li v-for="todo in todoList" :key="todo.id"
            class="list-row border-primary border flex items-center shadow-md hover:bg-base-200 transition duration-300 ease-in-out">
            <div><input type="checkbox" :checked="todo.completed" class="checkbox checkbox-primary" /></div>
            <div class="list-col-grow flex-1">
                <div class="font-semibold">{{ todo.content }}</div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ todo.time }}</div>
            </div>
            <button class="btn btn-square btn-ghost">
                <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none"
                        stroke="currentColor">
                        <path d="M6 3L20 12 6 21 6 3z"></path>
                    </g>
                </svg>
            </button>
        </li>
    </ul>
</template>