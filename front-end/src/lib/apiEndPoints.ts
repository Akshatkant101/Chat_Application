import Env from "./env";

export const BASE_URL = Env.BACKEND_URL;
export const APi_URL = BASE_URL + "/api";
export const LOGIN_URL = APi_URL + "/auth/login";
export const Chat_Group_URL = APi_URL + "/chat-group";
