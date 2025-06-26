import { acceptHMRUpdate, defineStore } from 'pinia'

import { useCustomFetch } from '~/composables/use-customFetch'
import { Users } from '~/models/Users.model'

export const useUsersStore = defineStore('users', () => {
    const authStore = useAuthStore()

    const currentUser = ref<Users>()

    const me = async () => {
        const { data, error }: any = await useCustomFetch('/auth/me')

        if (error.value) {
            return authStore.logout()
        }

        currentUser.value = data.value
    }

    const logoutUser = () => {
        currentUser.value = undefined
    }

    return {
        currentUser,
        me,
        logoutUser
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}