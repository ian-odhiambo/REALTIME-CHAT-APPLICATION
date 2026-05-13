import { createContet,useState,useEffect } from "react";

export const socketContext = createContext();

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);

    useEffect(() => {},[]);
    return (
        <socketContext.Provider value={{}}>
            {children}
        </socketContext.Provider>
    )
}
 