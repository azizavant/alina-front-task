import axios from 'axios'

// Достаем для работы апишку
export const API = import.meta.env.VITE_APP_API_URL

const $host = axios.create({
  baseURL: API,
  withCredentials: true
})

const $authHost = axios.create({
  baseURL: API,
  withCredentials: true
})

const authInterceptor = async (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

$authHost.interceptors.response.use(
  config => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (
      error.response.status == 401 &&
      error.config &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.post('api/auth/token/refresh/', {
          withCredentials: true
        })
        localStorage.setItem('accessToken', response.data.access)
        return await $authHost.request(originalRequest)
      } catch (e) {
        console.log(e)
        window.location.href = '/authorization'
        // useUserStore.setState?.({
        //   user: undefined
        // })
      }
    } else {
      throw error
    }
  }
)

export { $authHost, $host }
