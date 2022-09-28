import { Jwt } from "../store/models/auth";

export const isAuth = (): boolean | Jwt => {
  const jwt = localStorage.getItem("jwt");
  return jwt ? JSON.parse(jwt) : false;
};
