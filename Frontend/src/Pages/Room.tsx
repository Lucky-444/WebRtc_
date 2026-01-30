import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { socketContext } from "../Context/SocketContext";

const Room: React.FC = () => {
  const { id } = useParams();
  console.log(id)
  
  const  socket  = useContext(socketContext);
  console.log(socket);
  

  useEffect(() => {
         //Emmiting This Event so that creator of room and joinee of room 
         //anyone is added the server that new People hasbeen added to this Meeting




    socket.emit("joined-room", { roomId: id });
  });

  return <div>room : ${id}</div>;
};
export default Room;
