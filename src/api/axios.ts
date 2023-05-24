import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios'

const baseURL = 'https://horae-api.onrender.com/'

const instance: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
})

const onRequest = (config: InternalAxiosRequestConfig) => {
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

function get<T>(url: string, params?: object): Promise<T> {
  return instance.get<T>(url, { params }).then((response: AxiosResponse<T>) => response.data)
}

function post<T>(url: string, data?: object): Promise<T> {
  return instance.post<T>(url, data).then((response: AxiosResponse<T>) => response.data)
}

function patch<T>(url: string, data?: object): Promise<T> {
  return instance.patch<T>(url, data).then((response: AxiosResponse<T>) => response.data)
}

function del<T>(url: string): Promise<T> {
  return instance.delete<T>(url).then((response: AxiosResponse<T>) => response.data)
}

export default {
  get,
  post,
  delete: del,
  patch,
}
