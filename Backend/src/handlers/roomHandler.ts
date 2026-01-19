import { Socket } from "socket.io";
import { v4 as UUidv4 } from "uuid";

const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    const roomId = UUidv4();
    socket.join(roomId); // we will make the socket connection make a new room
    socket.emit("room Created", { roomId }); // we will emit an event from server side that room is successfully created and Roomid Is -> roomId;
  };


  const joinroom = () => {
         console.log("room Joined");
         
  }
   
  //when we call the above functions
//we will call the event when client will emit events to create room and Joinroom
  socket.on("create-room" , createRoom);
  socket.on("join-room" , joinroom);
};

export default roomHandler;
