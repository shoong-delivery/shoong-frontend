import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { userNameStorage } from '#/storages/userName'

export const BASE_URL = import.meta.env.VITE_API_BASE_URL

interface HttpClient extends AxiosInstance {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>
}

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
}

function createHttpClient() {
  const axiosInstance = axios.create(axiosConfig)

  axiosInstance.interceptors.request.use(
    (requestConfig) => {
      const userName = userNameStorage.get()

      if (userName) {
        requestConfig.params = {
          ...(requestConfig.params ?? {}),
          userName,
        }
      }

      return requestConfig
    },
    (error) => {
      return Promise.reject(error)
    },
  )

  axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response) {
        return Promise.reject(error)
      }
    },
  )

  return axiosInstance
}

export const httpClient: HttpClient = createHttpClient()
