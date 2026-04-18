<script setup>
import CreateTodo from '@/components/CreateTodo.vue';
import ShowTodoList from '@/components/ShowTodoList.vue';
import StatsShow from '@/components/StatsShow.vue';

import { useTodoStore } from '@/stores/todo';

const todoStore = useTodoStore()

</script>

<template>
    <CreateTodo />
    <ShowTodoList />

    <StatsShow />

</template>