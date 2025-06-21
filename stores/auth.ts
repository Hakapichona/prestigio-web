import { defineStore } from 'pinia'
import { useCustomFetch } from '~/composables/use-customFetch'
import { useUsersStore } from '~/stores/users'

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter()
    const userStore = useUsersStore()

    const token = ref<string>()

    const retrieveToken = () => {
        if (window.localStorage) {
            const value = window.localStorage.getItem('token')

            if (value) {
                token.value = JSON.parse(value)
            }

            return value
        }
    }

    const setToken = (value: string) => {
        token.value = value

        if (window.localStorage) {
            window.localStorage.setItem('token', JSON.stringify(value))
        }
    }



    const login = async (email: string, password: string) => {
        const { data, error }: any = await useCustomFetch('/auth/login', {
            method: 'POST',
            body: { email, password }
        })

        if (error.value) {
            throw new Error(error.value.message)
        }

        if (data.value) {
            setToken(data.value.accessToken)
        }

        return data.value
    }

    const logout = async () => {
        token.value = ''
        userStore.logoutUser()

        if (window.localStorage) {
            window.localStorage.clear()
        }
    }

    return {
        token,
        retrieveToken,
        login,
        logout,
    }
})