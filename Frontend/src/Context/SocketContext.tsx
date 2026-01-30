import SocketIoClient from "socket.io-client";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs"
import {v4 as UUIDv4} from "uuid";




const wsServer = "http://localhost:8080";

export const socketContext = createContext<any | null>(null);

const socket = SocketIoClient(wsServer, {
  withCredentials: false,
  transports: ["polling", "websocket"],
});;

interface props {
  children: React.ReactNode;
};

const SocketProvider: React.FC<props> = ({ children }) => {
  const navigate = useNavigate();


  //State Variable to store the UserId
  const [user , setUser] = useState<Peer>();












  useEffect(() => {

    const userId = UUIDv4();
    const newPeer = new Peer(userId);

    setUser(newPeer);




    const enterRoom = ({roomId} : {roomId : string}) => {
      navigate(`/room/${roomId}`)
    }
    
    //We will transfer the user to the room Page when we Collect the an Event room created From Server
    socket.on("room-created" , enterRoom);
  }, [])


  return (
    <socketContext.Provider value={{socket, user}} >
      {children }
    </socketContext.Provider>
  );
};

export default SocketProvider;
