<template>
  <div class="app-wrapper"
       :class="[$store.getters.sidebarOpened ? 'openSidebar': 'hideSidebar']">
    <!-- 左侧 menu -->
    <SidebarIndex
      class="sidebar-container"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <NavBar />
        <!--tags-->
        <tags-view></tags-view>
      </div>
      <!-- 内容区 -->
      <AppMain />
    </div>
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import NavBar from './components/NavBar.vue'
import SidebarIndex from './components/Sidebar/Sidebar-index'
import TagsView from '@/components/TagsView/TagsView'

</script>

<style lang="scss" scoped>
@import '../styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
