import * as RESTAPI from "./axios";
const baseURL = "http://localhost:8000";

export const LoginMember = () => RESTAPI.POST("/login");

