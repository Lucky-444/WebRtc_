import SocketIoClient from "socket.io-client";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  useEffect(() => {
    const enterRoom = ({roomId} : {roomId : string}) => {
      navigate(`/room/${roomId}`)
    }
    
    //We will transfer the user to the room Page when we Collect the an Event room created From Server
    socket.on("room-created" , enterRoom);
  }, [])


  return (
    <socketContext.Provider value={socket}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
