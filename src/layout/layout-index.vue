<template>
  <div class="app-wrapper">
    <!-- 左侧 menu -->
    <SidebarIndex class="selected-container"
                  :style="{backgroundColor:variables.menuBg}"></SidebarIndex>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 navbar -->
        <NavBar class="NavBar"/>
      </div>
      <!-- 内容区 -->
      <AppMain/>
    </div>

  </div>
</template>

<script setup>
import variables from '@/styles/variables.module.scss'
import AppMain from '@/layout/components/AppMain'
import NavBar from '@/layout/components/NavBar'
import SidebarIndex from '@/layout/components/Sidebar/Sidebar-index'

// export default {
//   components: {
//     SidebarIndex,
//     NavBar,
//     AppMain,
//     variables
//   }
// }

</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  border: 1px solid red;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
