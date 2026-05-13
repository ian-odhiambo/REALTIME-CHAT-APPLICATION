import { createContet } from "react";

export const socketContext = createContext();

export const SocketProvider = ({ children }) => {
    return (
        <socketContext.Provider value={{}}>
            {children}
        </socketContext.Provider>
    )
}
 