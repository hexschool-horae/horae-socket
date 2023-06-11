import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

const baseURL = 'https://horae-api-5x0d.onrender.com/'

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

const onRequest = (config: InternalAxiosRequestConfig) => {
  const method = config.method as string
  const token = (() => {
    if (['post', 'patch', 'put'].indexOf(method) > -1) {
      const token = config.data.token as string
      delete config.data.token
      return token
    } else if (['get', 'delete'].indexOf(method) > -1) {
      const token = config.params.token as string
      delete config.params.token
      return token
    }
    return ''
  })()
  // if (!token) {
  //   return Promise.reject('該請求沒有 token')
  // }
  config.headers.Authorization = token
  return config
}

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse) => {
  return response.data
}

instance.interceptors.request.use(onRequest, onErrorResponse)
instance.interceptors.response.use(onResponse, onErrorResponse)

function get<T>(url: string, params: unknown): Promise<T> {
  return instance.get<T>(url, { params }).then((response: AxiosResponse) => Promise.resolve(response.data))
}

function post<T>(url: string, data: unknown): Promise<T> {
  return instance.post<T>(url, data).then((response: AxiosResponse) => Promise.resolve(response.data))
}

function put<T>(url: string, data: unknown): Promise<T> {
  return instance.put<T>(url, data).then((response: AxiosResponse) => Promise.resolve(response.data))
}

function patch<T>(url: string, data: unknown): Promise<T> {
  return instance.patch<T>(url, data).then((response: AxiosResponse) => Promise.resolve(response.data))
}

function del<T>(url: string, params: unknown): Promise<T> {
  return instance
    .delete<T>(url, { params, data: params })
    .then((response: AxiosResponse) => Promise.resolve(response.data))
}

export default {
  get,
  post,
  delete: del,
  patch,
  put,
}
