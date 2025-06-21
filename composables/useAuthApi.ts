export const useAuthApi = () => {
    const config = useRuntimeConfig();
    const baseURL = config.public.apiUrl;

    const login = async (credentials: { email: string; password: string }) => {
        return await $fetch<{ accessToken: string }>(`${baseURL}/auth/login`, {
            method: 'POST',
            body: credentials,
        });
    };

    const register = async (data: any) => {
        return await $fetch<{ accessToken: string }>(`${baseURL}/auth/register`, {
            method: 'POST',
            body: data,
        });
    };

    const getProfile = async (token: string) => {
        return await $fetch(`${baseURL}/auth/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    return { login, register, getProfile };
};
function useRuntimeConfig() {
    throw new Error("Function not implemented.");
}

