<script setup>

const clickButton = () => {
    alert('彩蛋！🎉 啥也没有')
}

</script>

<template>
    <div class="flex flex-col gap-3 justify-center items-center text-3xl font-bold">
        <p>About</p>
        <button class="btn btn-outline" @click="clickButton">
            <span class="loading loading-spinner"></span>
            building...
        </button>
    </div>
</template>