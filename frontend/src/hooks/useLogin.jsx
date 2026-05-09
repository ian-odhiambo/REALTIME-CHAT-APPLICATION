import {useState} from "react";
const useLogin = () => {
  const[loading, setLoading] = useState(false);
  const login = async(username, password) =>{
    setLoading(true);
    try{

    }catch(error){

    }finally{
        setLoading(false);
    }
  }
}

export default useLogin