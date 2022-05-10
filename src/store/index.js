import { createStore } from 'vuex'
import user from '@/store/modules/user'
import getters from './getters'
import app from '@/store/modules/app'

export default createStore({
  getters,
  modules: {
    user,
    app
  }
})
