import { GalerytDto } from "~/models/Galery.model";
import { useAuthStore } from "~/stores/auth";

export const useGaleryComposable = () => {
  const authStore = useAuthStore();

  const uploadImage = async (file: File): Promise<GalerytDto> => {
    const formData = new FormData();
    formData.append("file", file);

    const token = authStore.token;

    try {
      const { data, error }: any = await useCustomFetch("/upload", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (error.value) {
        throw new Error(error.value.message);
      }

      const file = data.value?.file;
      if (file) {
        return {
          uuid: file.uuid,
          filePath: file.path,
        };
      }

      throw new Error("Respuesta inválida del servidor");
    } catch (err: any) {
      console.error(" Error :", err);
      throw err;
    }
  };

  const getAllImages = async () => {
    const { data, error }: any = await useCustomFetch("/upload");
    if (error.value) {
      throw new Error(error.value);
    }

    return data.value;
  };

  return {
    uploadImage,
    getAllImages,
  };
};
