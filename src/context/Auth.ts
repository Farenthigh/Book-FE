import { createContext } from "react";

export type TRole = "admin" | "user";

export interface IUserData {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: TRole | null;
  isAuth: boolean;
}

export const InitAuthValue: IUserData = {
  id: "",
  email: "",
  firstname: "",
  lastname: "",
  role: null,
  isAuth: false,
};

interface IAuthContextType {
  auth: IUserData;
  setAuth: (value: IUserData) => void;
}

export const AuthContext = createContext<IAuthContextType | null>(null);
