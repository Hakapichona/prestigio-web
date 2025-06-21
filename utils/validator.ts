export function required(value: string) {
  return !!value || "Este campo es requerido";
}

export function mail(value: string) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(value) || "El correo no es de formato válido ";
}

export function maxLength(value: string, size: number) {
  return (
    value.length <= size ||
    `Este campo debe tener ${size} caracteres como máximo`
  );
}
