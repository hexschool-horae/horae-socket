import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

const baseURL = 'https://horae-api.onrender.com/'

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

// 強制 payload 一定要帶 token
interface authRequest {
  token: string
}

const onRequest = (config: InternalAxiosRequestConfig) => {
  const controller = new AbortController()
  const { data } = config
  const { token } = data
  if (!token) {
    controller.abort()
  }
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
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

function get<T extends authRequest>(url: string, params: T): Promise<AxiosResponse> {
  return instance.get<T>(url, { params }).then((response: AxiosResponse) => Promise.resolve(response.data))
}

function post<T extends authRequest>(url: string, data: T): Promise<AxiosResponse> {
  return instance.post<T>(url, data).then((response: AxiosResponse) => Promise.resolve(response.data))
}

function patch<T extends authRequest>(url: string, data: T): Promise<AxiosResponse> {
  return instance.patch<T>(url, data).then((response: AxiosResponse) => Promise.resolve(response.data))
}

function del<T extends authRequest>(url: string, params: T): Promise<AxiosResponse> {
  return instance.delete<T>(url, { params }).then((response: AxiosResponse) => Promise.resolve(response.data))
}

export default {
  get,
  post,
  delete: del,
  patch,
}
