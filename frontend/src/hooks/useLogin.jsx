import {useState} from "react";
const useLogin = () => {
  const[loading, setLoading] = useState(false);
  const login = async(username, password) =>{
    setLoading(true);
    try{
        const res = await fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, password}),
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        
    }catch(error){
        toast.error(error.message)
    }finally{
        setLoading(false);
    }
  }
}

export default useLogin