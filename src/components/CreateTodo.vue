<script setup>
import { ref, nextTick, watch, onBeforeUnmount } from 'vue'
import { nanoid } from 'nanoid'
import IconSubmit from './icons/IconSubmit.vue'
import { useTodoStore } from '@/stores/todo'

const todoStore = useTodoStore()

// 将数据传出给todoList组件
const addTodo = () => {
    // 校验非空
    if (!inputValue.value.trim()) {
        alert('内容不能为空！')
        return
    }
    // 存入数据
    todoStore.addTodo({
        id: nanoid(10),
        content: inputValue.value,
        time: new Date().toLocaleString(),
        completed: false
    })
    // 关闭模态框
    closeModal()
}

// 控制模态框显示/隐藏
const isModalOpen = ref(false)
// 输入框绑定的值
const inputValue = ref('')
// 输入框元素的引用，用于自动聚焦
const inputRef = ref(null)

// 打开模态框的方法
const openModal = () => {
    // 清空上一次输入的内容
    inputValue.value = ''
    // 显示模态框
    isModalOpen.value = true
    // 等待 DOM 更新后，让输入框自动获得焦点
    nextTick(() => {
        if (inputRef.value) {
            inputRef.value.focus()
        }
    })
}

// 关闭模态框
const closeModal = () => {
    isModalOpen.value = false
}

// 监听模态框状态，控制 body 滚动条锁定（提升用户体验）
watch(isModalOpen, (newVal) => {
    if (newVal) {
        // 模态框打开时，禁止页面滚动
        document.body.style.overflow = 'hidden'
    } else {
        // 关闭时恢复滚动
        document.body.style.overflow = ''
    }
})

// 组件销毁前，确保恢复 body 滚动（防止意外）
onBeforeUnmount(() => {
    document.body.style.overflow = ''
})
</script>

<template>
    <div class="flex justify-center my-4">
        <!-- 触发按钮 -->
        <button class="btn btn-primary" @click="openModal">Create Your Todo List</button>

        <!-- 使用 Teleport 将模态框传送到 body 下，避免层级问题 -->
        <Teleport to="body">
            <!-- 模态框遮罩层，点击背景关闭 -->
            <div v-show="isModalOpen"
                class="fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-xs flex items-center justify-center z-1000 transition duration-300 ease-in-out"
                @keydown.esc="closeModal">
                <!-- 模态框内容容器，阻止点击冒泡，防止点击内容区关闭 -->
                <div class="card w-96 bg-base-100  shadow-sm border border-primary animate-slideUp" @click.stop>
                    <figure>
                        <img src="/haha2.png" />
                    </figure>
                    <div class="card-body gap-5">
                        <label class="floating-label">
                            <span>TODO</span>
                            <input type="text" placeholder="TODO" v-model.trim="inputValue"
                                class="input input-md outline-none w-full" />
                        </label>
                        <div class="flex flex-col gap-2">
                            <p class="font-semibold">Choose a Tag:</p>
                            <form class="filter">
                                <input class="btn btn-info btn-outline btn-sm" type="radio" name="frameworks"
                                    aria-label="Work" />
                                <input class="btn btn-info btn-outline btn-sm" type="radio" name="frameworks"
                                    aria-label="Life" />
                                <input class="btn btn-info btn-outline btn-sm" type="radio" name="frameworks"
                                    aria-label="Study" />
                                <input class="btn btn-info btn-outline btn-sm btn-square" type="reset" value="×" />
                            </form>
                        </div>
                        <div class="card-actions justify-end">
                            <button class="btn btn-soft btn-sm btn-primary" @click="closeModal">Cancel</button>
                            <button class="btn  btn-sm btn-primary" @click="addTodo">
                                <IconSubmit />
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<style scoped></style>