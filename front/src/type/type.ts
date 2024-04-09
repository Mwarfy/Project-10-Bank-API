export interface INav {
  label?: string;
  url: string;
}

export interface IStatus {
  status: number;
  message: string;
}

export interface IBodyLogin {
  token: string;
}

export interface IBodySignup {
  id: string;
  email: string;
}

export interface IResponseLogin extends IStatus {
  body?: IBodyLogin;
}

export interface IResponseUser extends IStatus {
  body?: IBodySignup;
}

export interface IResponseProfil extends IStatus {
  body?: ICallSignup;
}

export interface ICallLogin {
  email: string;
  password: string;
}

export interface ICallSignup {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ICallUpdateProfile {
  token: string;
  firstName: string;
  lastName: string;
}
