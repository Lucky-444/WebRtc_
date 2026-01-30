import { useContext } from "react";
import { socketContext } from "../Context/SocketContext";

const CreateRoom: React.FC = () => {
  const {socket}  = useContext(socketContext);

  const initRoom = () => {
    console.log("Initialize a Room", socket);
    socket.emit("create-room");
  };

  return (

      <button onClick={initRoom} className="btn btn-primary btn-wide shadow-lg">
        🎥 Start a Meeting
      </button>
   
  );
};

export default CreateRoom;
