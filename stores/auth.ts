import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()

    const token = ref<string>('')

    const retrieveToken = () => {
        const value = window.localStorage.getItem('token')
        if (value) {
            token.value = JSON.parse(value)
        }
        return token.value
    }

    const setToken = (value: string) => {
        token.value = value
        window.localStorage.setItem('token', JSON.stringify(value))
    }

    const login = async (email: string, password: string, noRedirect = false) => {
        const { data, error }: any = await useCustomFetch('/auth/login', {
            method: 'POST',
            body: { email, password },
        })

        if (error.value) {
            throw new Error(error.value.message)
        }

        if (data.value) {
            setToken(data.value.accessToken)
        }

        if (!noRedirect) {
            await router.replace('/')
        }

        return data.value
    }

    const logout = async (redirect = true) => {
        token.value = ''
        window.localStorage.clear()

        if (redirect) {
            await router.replace({ name: 'auth-login' })
        }
    }

    return {
        token,
        retrieveToken,
        login,
        logout,
    }
})
