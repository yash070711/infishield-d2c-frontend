import { ReactNode } from "react";

export interface User {
  id?: string;
  first_name: string;
  last_name?: string;
  email: string;
  username: string;
}

export type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

export interface AuthUserInterface {
  userid: number; 
  isActive: string;
  mobileno: string;
  emailid: string;
  fullname : string;
}

export interface LoginInterface {
  mobile: number | null,
  otp: number | null
}