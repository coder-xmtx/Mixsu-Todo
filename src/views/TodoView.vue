<script setup>
import CreateTodo from '@/components/CreateTodo.vue';
import ShowTodoList from '@/components/ShowTodoList.vue';
import { ref } from 'vue';

// 构建todo数据结构
const todoList = ref([])

// 接收子组件传递过来的数据
const addTodo = (todo) => {
    todoList.value.push(todo)
}

</script>

<template>
    <CreateTodo @addTodo="addTodo" />
    <ShowTodoList :todoList="todoList" />

</template>