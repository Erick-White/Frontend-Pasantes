export interface PasantesAll {
    idInternt: string;
    name?: string;
    lastname?: string;
    idUser?: string;
    user?: User;
    cedula?: string;
    phone?: string;
    userImg?: string;
    github?: string;
    linkedin?: string;
    cv?: string;
    birthDate?: Date;
}

export class User {
    email?: string;

}

