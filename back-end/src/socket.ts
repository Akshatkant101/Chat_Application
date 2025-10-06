import type { Server } from "socket.io";

export function setupSocket(io: Server) {
  io.on("connection", (socket) => {
    console.log("The socket connected...", socket.id);

    socket.on("message", (data) => {
      console.log("Server side messsage", data);
      socket.broadcast.emit("message", data);
    });

    socket.on("disssconnect", () => {
      console.log(" A user dissconnected", socket.id);
    });
  });
}
