import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

export default service

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加icode
    config.headers.icode = 'ED5BD770A85A4C12'
    // 必须返回config
    return config
  }
)
