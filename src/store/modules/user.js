import { getUserInfo, login } from '@/api/sys'
import md5 from 'md5'
import { getItem, removeAllItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}
  }),
  mutations: {
    setToken (state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    /* 登录请求动作 */
    login (context, useInfo) {
      const {
        username,
        password
      } = useInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then(data => {
            console.log(data)
            this.commit('user/setToken', data.token)
            // 跳转
            router.push('/')
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    /* 获取用户信息 */
    async getUserInfo (context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    /* 退出登录 */
    logout () {
      // 清理掉当前用户缓存的数据
      this.commit('user/setToken', '')
      this.commit('user/setUserInfo', {})
      removeAllItem()
      // TODO: 清理权限相关的配置
      // 返回到登录页
      router.push('./login')
    }
  }
}
