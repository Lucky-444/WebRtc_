import { useContext } from "react";
import { socketContext } from "../Context/SocketContext";

const CreateRoom: React.FC = () => {
  const socket  = useContext(socketContext);

  const initRoom = () => {
    console.log("Initialize a Room", socket);
    socket.emit("create-room");
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <button onClick={initRoom} className="btn btn-primary btn-wide shadow-lg">
        🎥 Start a Meeting
      </button>
    </div>
  );
};

export default CreateRoom;
