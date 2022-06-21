import { createRouter, createWebHashHistory } from 'vue-router'
import UserManage from '@/router/modules/UserManage'
import RoleList from '@/router/modules/RoleList'
import PermissionList from '@/router/modules/PermissionList'
import Article from '@/router/modules/Article'
import ArticleCreate from '@/router/modules/ArticleCreate'

// 私有路由表
export const privateRoutes = [
  UserManage,
  RoleList,
  PermissionList,
  Article,
  ArticleCreate
]
// 公开路由表
export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/login-index.vue')
  },
  {
    path: '/',
    redirect: 'profile',
    component: () => import('@/layout/layout-index.vue'),
    children: [
      // 个人中心
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/profile-index.vue'),
        meta: {
          title: 'profile',
          icon: 'PersonalCenter'
        }
      },
      // 404
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/Error-404.vue')
      },
      // 401
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/Error-401.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
