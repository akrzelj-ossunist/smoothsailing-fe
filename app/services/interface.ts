export interface IRegisterForm {
    name: string;
    surname: string;
    license: boolean;
    email: string;
    repeatEmail: string;
    password: string;
    repeatPassword: string;
    birthday: string;
    gender: string;
  }

export interface ILoginForm {
    email: string;
    password: string;
  }