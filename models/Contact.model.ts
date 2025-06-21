export interface ContactDto {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  cv: any;
}

export const contactDtoInitialState = () => ({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  cv: null,
});
