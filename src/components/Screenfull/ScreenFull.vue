<template>
  <div @click="onToggle">
    <svg-icon :icon="isFullscreen ? 'exit-fullscreen' : 'fullscreen'"></svg-icon>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import screenfull from 'screenfull'

// 当前是否全屏
const isFullscreen = ref(false)
// 切换事件
const onToggle = () => {
  screenfull.toggle()
}
// 监听screenfull的变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}
// on:绑定监听
onMounted(() => {
  screenfull.on('change', change)
})
// off:取消监听
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<style lang="scss" scoped></style>
