import { NitroFetchRequest } from "nitropack";
import { navigateTo, UseFetchOptions } from "#app";
import { KeyOfRes } from "#app/composables/asyncData";

export function useCustomFetch<T>(
  request: NitroFetchRequest,
  opts?:
    | UseFetchOptions<
        T extends void ? unknown : T,
        (res: T extends void ? unknown : T) => T extends void ? unknown : T,
        // @ts-ignore
        KeyOfRes<
          (res: T extends void ? unknown : T) => T extends void ? unknown : T
        >
      >
    | undefined,
) {
  const config = useRuntimeConfig();

  // @ts-ignore
  return useFetch(request, {
    baseURL: config.public.apiBaseUrl,
    async onResponse({ response }: any) {
      if (!response.ok) {
        if (response.status === 401 && response.url.search("login") === -1) {
          location.reload();
        }
        if (response.status >= 400 && response.status < 500) {
          throw new Error(response._data.message);
        }
        throw new Error(response._data.message);
      }
      return response._data;
    },
    async onRequestError({ error }: any) {
      if (error.message === "Failed to fetch") {
        navigateTo({ name: "500" });
      }
    },
    ...opts,
  });
}
