<template>
  <!-- 支持渲染多级 menu 菜单 -->
  <el-submenu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <MenuItem :title="route.meta.title" :icon="route.meta.icon"></MenuItem>
    </template>
    <!-- 循环渲染 -->
    <sidebar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-submenu>
  <!-- 渲染 item 项 -->
  <el-menu-item v-else :index="route.path">
    <menu-item :title="route.meta.title" :icon="route.meta.icon"></menu-item>
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
