// src/stores/todo.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodoStore = defineStore(
  "todo",
  () => {
    // -------------------- State (状态) --------------------
    const todoList = ref([]);

    // -------------------- Getters (计算属性) --------------------
    // 1. 未完成事项的数量
    const unfinishedCount = computed(() => {
      return todoList.value.filter((todo) => !todo.completed).length;
    });

    // 2. 已完成事项的数量
    const finishedCount = computed(() => {
      return todoList.value.filter((todo) => todo.completed).length;
    });

    // 3. 总事项数量
    const totalCount = computed(() => todoList.value.length);

    // -------------------- Actions (修改状态的方法) --------------------
    // 添加待办
    function addTodo(todo) {
      // 保证传入的数据结构符合预期，可以加上简单校验
      if (!todo || !todo.content) return;
      todoList.value.push({
        id: todo.id,
        content: todo.content,
        time: todo.time || new Date().toLocaleString(),
        completed: todo.completed || false,
      });
    }

    // 删除待办
    function deleteTodo(id) {
      todoList.value = todoList.value.filter((todo) => todo.id !== id);
    }

    // 切换完成状态
    function toggleComplete(id) {
      const todo = todoList.value.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }

    // 清空所有已完成事项 (可选功能，让你的应用更完整)
    function clearCompleted() {
      todoList.value = todoList.value.filter((todo) => !todo.completed);
    }

    // 必须返回所有需要暴露的内容
    return {
      todoList,
      unfinishedCount,
      finishedCount,
      totalCount,
      addTodo,
      deleteTodo,
      toggleComplete,
      clearCompleted,
    };
  },
  {
    // 👇 持久化配置：这就是插件发挥作用的地方！
    persist: {
      key: "vue-todo-app", // 存储在 localStorage 中的键名，可以自定义
      storage: localStorage, // 存储介质，默认就是 localStorage，可省略
      // paths: ['todoList'],   // 如果只想持久化 todoList，而忽略其他状态，可以指定路径
      // 默认会持久化所有 state，这里我们想全部保留，所以不写 paths
    },
  },
);
