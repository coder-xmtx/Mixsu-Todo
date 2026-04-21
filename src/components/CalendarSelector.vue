<template>
    <div class="relative w-full">
        <!-- 隐藏的原生日期时间输入框 -->
        <input ref="dateInputRef" :value="internalValue" type="datetime-local" class="sr-only" @input="handleInput"
            @change="handleChange" />

        <!-- 自定义触发区域 -->
        <button type="button"
            class="input input-md input-bordered w-full flex items-center justify-between gap-2 cursor-pointer"
            @click="openPicker">
            <span :class="{ 'opacity-50': !displayText }">
                {{ displayText || placeholder }}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-60" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        </button>

        <!-- 清除按钮 -->
        <button v-if="internalValue" type="button"
            class="absolute right-8 top-1/2 -translate-y-1/2 p-1 hover:bg-base-200 rounded-full transition"
            @click="clearDate">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50" viewBox="0 0 24 24" fill="none"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'Setting Deadline (Optional)'
    }
})

const emit = defineEmits(['update:modelValue'])

const dateInputRef = ref(null)
const internalValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
    internalValue.value = newVal
})

// 格式化显示：将 "2025-04-21T14:30" 显示为 "2025年4月21日 14:30"
const displayText = computed(() => {
    if (!internalValue.value) return ''
    const [date, time] = internalValue.value.split('T')
    if (!date) return internalValue.value
    const [year, month, day] = date.split('-')
    const formattedTime = time ? ` ${time}` : ''
    return `${year}年${month}月${day}日${formattedTime}`
})

const openPicker = () => {
    if (dateInputRef.value && typeof dateInputRef.value.showPicker === 'function') {
        dateInputRef.value.showPicker()
    } else {
        dateInputRef.value?.focus()
    }
}

const handleInput = (e) => {
    const newVal = e.target.value
    console.log('CalendarSelector handleInput:', newVal)
    internalValue.value = newVal
    emit('update:modelValue', newVal)
}

const handleChange = (e) => {
    const newVal = e.target.value
    console.log('CalendarSelector handleChange:', newVal)
    // 如果input事件已经处理过，这里可以跳过重复emit
    // 但为了安全，仍然更新internalValue
    internalValue.value = newVal
    emit('update:modelValue', newVal)
}

const clearDate = () => {
    console.log('CalendarSelector clearDate')
    internalValue.value = ''
    emit('update:modelValue', '')
}
</script>