import { io, Socket } from "socket.io-client";
import env from "./env";

let socket: Socket;

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(env.BACKEND_URL, { autoConnect: false });
  }
  return socket;
};
