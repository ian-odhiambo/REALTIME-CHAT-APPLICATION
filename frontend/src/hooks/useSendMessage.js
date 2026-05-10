import {useState} from "react";
import useConversation from "../zustand/useConversation"

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const {messages,setMessages,selectedConversation}= useConversation();

  const sendMessage = async(message) => {
    setLoading(true)

    try{

    }catch(error){

    }finally{

    }
  }

}

export default useSendMessage