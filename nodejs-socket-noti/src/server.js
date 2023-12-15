import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("user disconnect");
  });

  socket.on("new_user_login", (data) => {
    io.emit("new_user_login", { message: data.message });
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
