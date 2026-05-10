import { useState } from "react";
import { BsSend } from "react-icons/bs";  
import useSendMessage from "../../hooks/useSendMessage";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
  const[message, setMessage] = useState("");
  const {loading, sendMessage}= useSendMessage()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");  
  
  }


  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">  
        <input 
          type="text"
          placeholder="send a message..." 
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pe-3">  
          <BsSend />  
        </button>
      </div>
    </form>
  )
}

export default MessageInput


//THIS IS THE STARTER CODE
// import { BaSend } from "react-icons/bs";
// const MessageInput = () => {
//   return (
//     <form className="px-4 my-3">
//       <div className="w-full">
//         <input 
//         type="text"
//          placeholder="Type a message..." 
//          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
//          />
//          <button type="submit" className="absolute insert-y-0 flex items-center pe-3">
//           <BaSend />
//           icon
//          </button>
//       </div>
//     </form>
//   )
// }

// export default MessageInput