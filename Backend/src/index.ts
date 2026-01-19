import express from "express";
import ServerConfig from "./config/ServerConfig";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import roomHandler from "./handlers/roomHandler";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New user connected");
  roomHandler(socket); // pass the socket connection to the room handler for room creation and joining
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

console.log(ServerConfig.PORT);


server.listen(ServerConfig.PORT, () => {
  console.log(`Server is up at port ${ServerConfig.PORT}`);
});
