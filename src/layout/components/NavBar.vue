<template>
  <div class="navbar">
<!--    汉堡按钮-->
    <Hamburger class="hamburger-container"/>
<!--    面包屑-->
    <BreadCrumb class="breadcrumb-container"/>
    <div class="right-menu">
<!--      搜索按钮-->
      <header-search class="right-menu-item hover-effect"></header-search>
<!--      全屏按钮-->
      <screen-full class="right-menu-item hover-effect"></screen-full>
<!--      中英文切换按钮-->
      <theme-select class="right-menu-item hover-effect"></theme-select>
<!--      设置按钮-->
      <lang-select class="right-menu-item hover-effect"></lang-select>

      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            src="https://mms1.baidu.com/it/u=4113123888,3436296091&fm=253&app=120&f=JPEG&fmt=auto&q=75?w=500&h=500"
          ></el-avatar>
          <el-icon><Tools /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> {{ $t('msg.navBar.home') }} </el-dropdown-item>
            </router-link>
            <a target="_blank" href="">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="logout"> {{ $t('msg.navBar.logout') }} </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import { Tools } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import Hamburger from '../components/Hamburger/HambUrger.vue'
import BreadCrumb from '@/components/Breadcrumb/BreadCrumb'
import LangSelect from '@/components/LangSelect/LangSelect.vue'
import ThemeSelect from '@/components/ThemeSelect/ThemeSelect'
import ScreenFull from '@/components/Screenfull/ScreenFull'
import HeaderSearch from '@/components/HeaderSearch/HeaderSearch'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container{
    line-height: 46px;
    height: 100%;
    float:left;
    cursor: pointer;
    // hover动画
    transition: background 0.5s;

    &:hover{
      background: rgba(0,0,0,0.1);
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect{
        cursor: pointer;
      }
    }

    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
    .breadcrumb-container{
      float:left;
    }
  }
}
</style>
