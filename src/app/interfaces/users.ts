export interface User{
  name:string;
  login:string;
  password:string;
  email:string;
  address:string;
}

export interface Users {
  [key: string]: User
}

