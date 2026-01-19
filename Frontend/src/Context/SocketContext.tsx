import SocketIoClient from "socket.io-client";
import { createContext } from "react";

const wsServer = "http://localhost:8080";

const socketContext = createContext<any | null>(null);

const socket = SocketIoClient(wsServer);

interface props {
  children: React.ReactNode;
};

const SocketProvider: React.FC<props> = ({ children }) => {
  return (
    <socketContext.Provider value={socket}>
      {children}
    </socketContext.Provider>
  );
};

export default SocketProvider;
