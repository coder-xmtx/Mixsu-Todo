<script setup>
import { animate, stagger, splitText } from 'animejs';
import { onMounted } from 'vue';

onMounted(() => {
    // 确保 DOM 已渲染
    const result = splitText('.flex h1 p', { words: true, chars: true })
    const { chars } = result

    animate(chars, {
        y: [
            { to: '-2.75rem', ease: 'outExpo', duration: 600 },
            { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
        ],
        rotate: {
            from: '-1turn',
            delay: 0
        },
        delay: stagger(50),
        ease: 'inOutCirc',
        loopDelay: 1000,
        loop: true
    })
})

</script>

<template>
    <div class="flex justify-center">
        <h1 class="flex flex-col text-3xl font-bold">
            <p>Welcome To My Todo Website</p>
        </h1>
    </div>
</template>