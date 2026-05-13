import { createContet,useState,useEffect } from "react";
import io from "socket.io-client";

export const socketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:8000");
            setSocket(socket);
            return () => socket.close();
        }else{
            if(socket) {
                socket.close();
                setSocket(null)
            }
        }
    },[]);
    return (
        <socketContext.Provider value={{}}>
            {children}
        </socketContext.Provider>
    )
}
 