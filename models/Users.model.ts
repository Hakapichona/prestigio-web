
export enum UserRoles {
    ADMIN = 'ADMIN',
}
export interface Users {

    fullName: string;
    email: string;
    password: string;
    // company: Companyx
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