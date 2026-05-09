import { createContext } from "react";


export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(localStorage.getItem("authUser") || null);
    return <AuthContext.Provider value={{}}>
        {children}

        </AuthContext.Provider>;     
}