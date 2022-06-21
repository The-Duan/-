import layout from '@/layout/layout-index.vue'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'roleList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/role',
      component: () => import('@/views/role-list/RoleList'),
      meta: {
        title: 'roleList',
        icon: 'role'
      }
    }
  ]
}
