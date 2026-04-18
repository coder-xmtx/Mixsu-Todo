<script setup>
import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore();


</script>

<template>
    <ul class="list rounded-box gap-3">

        <li v-for="todo in todoStore.todoList" :key="todo.id"
            class="list-row border-primary border flex items-center shadow-md hover:bg-base-200 transition duration-300 ease-in-out">
            <div><input type="checkbox" :checked="todo.completed" class="checkbox checkbox-primary"
                    @change="todoStore.toggleComplete(todo.id)" /></div>
            <div class="list-col-grow flex-1">
                <div class="font-semibold text-xl" :class="{ 'line-through opacity-50': todo.completed }">{{
                    todo.content }}
                </div>
                <div class="text-xs uppercase font-semibold opacity-60">{{ todo.time }}</div>
            </div>
            <button class="btn btn-square btn-ghost" @click="todoStore.deleteTodo(todo.id)">
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