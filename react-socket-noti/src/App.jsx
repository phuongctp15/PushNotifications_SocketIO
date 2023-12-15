import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";
import { io } from "socket.io-client";
function App() {
  const { addToast } = useToasts();
  const socket = io("http://localhost:3000/", { transports: ["websocket"] });
  useEffect(() => {
    socket.on("new_user_login", (data) => {
      console.log("end here");
      addToast(data.message, {
        appearance: "info",
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleRealtimeEvent = () => {
    socket.emit("new_user_login", {
      message: "A new user logged in",
    });
  };

  const handleLocalEvent = () => {
    console.log("aa");
    addToast(`Click on "Local event" `, {
      appearance: "success",
    });
  };

  return (
    <div className="wrapper_website">
      <div>
        <h3 className=" text-3xl font-bold">
          Real-time notifications with ReactJS & SocketIO by PhuongCTb
        </h3>

        <div className="mt-10 flex items-center justify-center">
          <button
            className="bg-blue-500 shadow-lg shadow-blue-500/50 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/50 p-2 rounded-md text-[#fff]"
            onClick={() => handleRealtimeEvent()}
          >
            Click for Real-time event
          </button>

          <button
            className="bg-purple-500 shadow-lg shadow-purple-500/50 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/50 p-2 rounded-md text-[#fff] ml-3"
            onClick={handleLocalEvent}
          >
            Click for Local event
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
