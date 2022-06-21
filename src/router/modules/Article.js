import layout from '@/layout/layout-index.vue'

export default {
  path: '/article',
  component: layout,
  redirect: '/article/ranking',
  name: 'articleRanking',
  meta: { title: 'article', icon: 'article' },
  children: [
    {
      path: '/article/ranking',
      component: () => import('@/views/article-ranking/ArticleRanking'),
      meta: {
        title: 'articleRanking',
        icon: 'article-ranking'
      }
    },
    {
      path: '/article/:id',
      component: () => import('@/views/article-detail/ArticleDetail'),
      meta: {
        title: 'articleDetail'
      }
    }
  ]
}
