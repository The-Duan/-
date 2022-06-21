import layout from '@/layout/layout-index.vue'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'permissionList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/permission',
      component: () => import('@/views/permission-list/PermissionList'),
      meta: {
        title: 'permissionList',
        icon: 'permission'
      }
    }
  ]
}
