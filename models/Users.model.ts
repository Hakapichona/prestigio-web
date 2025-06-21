
export enum UserRoles {
    ADMIN = 'ADMIN',
}
export interface Users {
    firstName: string;
    lastName: string;
    fullName: string;
    birthday: string;
    dni: number;
    email: string;
    password: string;
    role: UserRoles;
    // company: Company
}

export interface UserDto {
    firstName: string
    lastName: string
    dni: number | null;
    birthday?: Date
    email: string
    password: string
    phoneNumber?: string
}