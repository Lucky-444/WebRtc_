import { Socket } from "socket.io";
import { v4 as UUidv4 } from "uuid";
import IRoomParams from "../interfaces/IRoomParams";
  //below map stores for a room what all peers have Joined
  const rooms : Record<string , string[]> = {};

const roomHandler = (socket: Socket) => {





  /**
   * Data Base Looks Like
   * {1 , [u1 , u2 , u3 , u4] 
   *  2 , [v1 , v2 , v3 ,v4]
   * .
   * .
   * . 
   * }
   * 
   */













  const createRoom = () => {
    const roomId = UUidv4();
    //Create A New entry for the Room
    rooms[roomId] = [];

    socket.join(roomId); // we will make the socket connection make a new room
    socket.emit("room-created", { roomId }); // we will emit an event from server side that room is successfully created and Roomid Is -> roomId;
    console.log("Room Created With Id :", roomId);
  };


  //the Below Function is executed Every time a User(creator , Joinee) joins a new room


  const joinedroom = ({roomId , peerId} : IRoomParams) => {
    if(rooms[roomId]){
      //if the Given room Id exist in the in memory db then 
      console.log(`New User Has Been Joined ${roomId} Room With ${peerId} PeerId`);
      //The Moment a new User joins add the PeerID to the Key Of roomID
      rooms[roomId].push(peerId);
      socket.join(roomId); //Make The User join the Socket room

      //Below events is for logging purpose
      socket.emit("get-users" , {
        roomId , 
        particpants : rooms[roomId]
      })
      
    }
  };

  // when we call the above functions
  // we will call the event when client will emit events to create room and Joinroom
  socket.on("create-room", createRoom);
  socket.on("joined-room", joinedroom);
};

export default roomHandler;
