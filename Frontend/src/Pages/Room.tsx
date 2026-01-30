import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { socketContext } from "../Context/SocketContext";
import UserFeedPlayer from "../Components/userFeedPlayer";

const Room: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  const { socket , user , stream} = useContext(socketContext);
  console.log(socket);

  useEffect(() => {
    //Emmiting This Event so that creator of room and joinee of room
    //anyone is added the server that new People hasbeen added to this Meeting

     if(user) socket.emit("joined-room", { roomId: id , peerId : user._id });
  }, [id , user , socket]);

  return (
    <div>
      room : {id} 

      <UserFeedPlayer stream={stream} />
    </div>
  )
};
export default Room;
