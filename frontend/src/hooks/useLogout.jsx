import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";
const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logOut = async () => {
        setLoading(true)
        try{

            const res = await fetch("/api/v1/auth/logout", {
                method:"POST",
                headers:{"Content-Type":"application/json"},});

            // Backend might return HTML on error (e.g. proxy/route mismatch). Avoid crashing on res.json().
            const contentType = res.headers.get("content-type") || "";
            const isJson = contentType.includes("application/json");
            const data = isJson ? await res.json() : null;

            if(data?.error){
                throw new Error(data.error)
            }

            // Always clear local auth on logout click.
            localStorage.removeItem("authUser");
            setAuthUser(null);
        }catch(error) {
            toast.error(error.message);
        }finally {
            setLoading(false);
        }
    }
    return {loading, logOut}
}
export default useLogout;





//The original sarter code 
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useAuthContext } from "../context/AuthContext.jsx";
// const useLogout = () => {
//     const [loading, setLoading] = useState(false);
//     const { setAuthUser } = useAuthContext();

//     const logOut = async () => {
//         setLoading(true)
//         try{
//             const res = await fetch("/api/v1/auth/logout", {
//                 method:"POST",
//                 headers:{"Content-Type":"application/json"},
//             });
//             const data = await res.json();
//             if(data.error){
//                 throw new Error(data.error)
//             }
//             localStorage.removeItem("authUser");
//             setAuthUser(null);
//         }catch(error) {
//             toast.error(error.message);
//         }finally {
//             setLoading(false);
//         }
//     }
//     return {loading, logOut}
// }
// export default useLogout;