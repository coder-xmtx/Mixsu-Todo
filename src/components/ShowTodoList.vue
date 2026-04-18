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
                <svg t="1776526557880" class="icon fill-primary" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                    <path
                        d="M905.92 237.76a32 32 0 0 0-52.48 36.48A416 416 0 1 1 96 512a418.56 418.56 0 0 1 297.28-398.72 32 32 0 1 0-18.24-61.44A480 480 0 1 0 992 512a477.12 477.12 0 0 0-86.08-274.24z">
                    </path>
                    <path
                        d="M630.72 113.28a413.76 413.76 0 0 1 137.28 72 32 32 0 0 0 39.68-50.24 476.8 476.8 0 0 0-160-83.2 32 32 0 0 0-18.24 61.44zM489.28 86.72a36.8 36.8 0 0 0 10.56 6.72 30.08 30.08 0 0 0 24.32 0 37.12 37.12 0 0 0 10.56-6.72A32 32 0 0 0 544 64a33.6 33.6 0 0 0-9.28-22.72A32 32 0 0 0 505.6 32a20.8 20.8 0 0 0-5.76 1.92 23.68 23.68 0 0 0-5.76 2.88l-4.8 3.84a32 32 0 0 0-6.72 10.56A32 32 0 0 0 480 64a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56z m237.44 210.56a32 32 0 0 0-45.12 0L512 466.88l-169.28-169.6a32 32 0 0 0-45.12 45.12L466.88 512l-169.6 169.28a32 32 0 1 0 45.12 45.12L512 557.12 681.28 726.4a32 32 0 0 0 45.12-45.12L557.12 512 726.4 342.72a32 32 0 0 0 0.32-45.44z">
                    </path>
                </svg>
            </button>
        </li>
    </ul>
</template>