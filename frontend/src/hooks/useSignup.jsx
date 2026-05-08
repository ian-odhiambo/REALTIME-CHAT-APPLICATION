import React from 'react'

const useSignup = () => {
  const[loading, setLoading] = useState(false);

  const signup = async ({fullName,username,password,confirmPassword,gender}) => {
    const success= handleInputErrors({fullName,username,password,confirmPassword,gender})
    if(!success) return ;
  }
}

export default useSignup;

function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("All fields are required");
        return false;
    }

    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false;
    }
}