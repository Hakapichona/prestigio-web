import { ContactDto } from "~/models/Contact.model";

export const useContactComposable = () => {
  const sendContactEmail = async (contactDto: ContactDto | FormData) => {
    const { data, error }: any = await useCustomFetch("/contact", {
      method: "POST",
      body: contactDto,
    });

    if (error.value) {
      throw new Error(error.value.message);
    }

    if (data.value) {
      return data.value;
    }
  };

  return {
    sendContactEmail,
  };
};
