import { createStore } from 'vuex'
import user from '@/store/modules/user'
import getters from './getters'
import app from '@/store/modules/app'
import theme from '@/store/modules/theme'

export default createStore({
  getters,
  modules: {
    user,
    app,
    theme
  }
})
