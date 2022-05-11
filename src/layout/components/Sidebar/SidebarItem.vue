<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
    </template>
    <!-- 循环渲染 -->
    <sidebar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-sub-menu>
  <!-- 渲染 item 项 -->
  <el-menu-item v-else :index="route.path">
      <MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
  </el-menu-item>
</template>

<script setup>
import SidebarItem from '@/layout/components/Sidebar/SidebarItem'
import { defineProps } from 'vue'
import MenuItem from '@/layout/components/Sidebar/MenuItem'

// 定义 props
defineProps({
  route: {
    type: Object,
    required: true
  }
})
console.log(SidebarItem, MenuItem)
</script>
