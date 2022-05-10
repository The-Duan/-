import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout/layout-index.vue'

// 私有路由表
const privateRoutes = [
  {
    path: '/user',
    component: layout,
    redirect: '/user/manage',
    meta: {
      title: 'user',
      icon: 'personnel'
    },
    children: [
      // 员工管理
      {
        path: '/user/manage',
        component: () => import('@/views/user-manage/UserManage-index.vue'),
        meta: {
          title: 'userManage',
          icon: 'personnel-manage'
        }
      },
      // 角色列表
      {
        path: '/user/role',
        name: 'userRole',
        component: () => import('@/views/role-list/RoleList-index.vue'),
        meta: {
          title: 'roleList',
          icon: 'role'
        }
      },
      // 权限列表
      {
        path: '/user/permission',
        name: 'userPermission',
        component: () => import('@/views/permission-list/permission-index.vue'),
        meta: {
          title: 'permissionList',
          icon: 'permission'
        }
      },
      // 用户信息
      {
        path: '/user/info/:id',
        name: 'userInfo',
        component: () => import('@/views/user-info/UserInfo-index.vue'),
        meta: {
          title: 'userInfo'
        }
      },
      // 用户导入
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import/import-index.vue'),
        meta: {
          title: 'excelImport'
        }
      }
    ]
  },
  {
    path: '/article',
    component: layout,
    redirect: '/article/ranking',
    meta: {
      title: 'article',
      icon: 'article'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'articleRanking',
        component: () => import('@/views/article-ranking/ArticleRanking-index.vue'),
        meta: {
          title: 'articleRanking',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('@/views/article-detail/ArticleDetail-index.vue'),
        meta: {
          title: 'articleDetail'
        }
      },
      {
        path: '/article/create',
        name: 'articleCreate',
        component: () => import('@/views/article-create/ArticleCreate-index.vue'),
        meta: {
          title: 'articleCreate',
          icon: 'article-create'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'articleEditor',
        component: () => import('@/views/article-create/ArticleCreate-index.vue'),
        meta: {
          title: 'articleEditor'
        }
      }
    ]
  }
]
// 公开路由表
const publicRoutes = [
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
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
