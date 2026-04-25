import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { userNameStorage } from '#/storages/userName'

interface HttpClient extends AxiosInstance {
  get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>
}

const axiosConfig: AxiosRequestConfig = {
  // TODO: 임시 BASE_URL, 나중에 환경변수로 관리하기
  baseURL: 'https://shoong-backend.fly.dev',
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
