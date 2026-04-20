<script setup>
import { ref, onMounted } from 'vue';
import Pikaday from "pikaday";

const myDatepicker = ref(null);
const container = ref(null);

onMounted(() => {
    const picker = new Pikaday({
        field: myDatepicker.value,
        container: container.value,
        zIndex: 9999
    });
});
</script>

<template>
    <div ref="container" class="relative">
        <input type="text" class="input pika-single w-full" ref="myDatepicker" value="Pick your DDL" />
    </div>
</template>

<style scoped>
/* Ensure the date picker appears above modal overlay */
:deep(.pika-single) {
    z-index: 9999 !important;
}
</style>