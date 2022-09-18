import axios from 'axios'

// baseURL设置/超时时间设置
const instance = axios.create({
  baseURL: 'http://xxx.xxx.xx', // 配置请求基地址
  timeout: 5000 // 配置等待时间
})

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 操作请求
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 操作响应
    return response.data
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

/**
 * @param {String} - url  请求地址
 * @param {String} - method  请求类型
 * @param {Object} - submitData  对象类型，提交数据
 */
const request = (url, method, submitData) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
