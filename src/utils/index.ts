import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL: any = import.meta.env.VITE_API_URL
const axios = Axios.create({
  baseURL,
  timeout: 20000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (response: any) => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    // response.headers[
    //   'X-Token'
    // ] = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTYzODI1ODk5OCwiZXhwIjoxNjM4MzQ1Mzk4fQ.YYOvHDgFKAf0S5ZT-o70y8rzH8bccLzjbwD7HfayJvY`

    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  // eslint-disable-next-line consistent-return
  (response: any) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    const { code, data, msg } = response.data
    if (code === 200) {
      return data
    }
    ElMessage.error(`Code: ${code}, Message: ${msg}`)
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
