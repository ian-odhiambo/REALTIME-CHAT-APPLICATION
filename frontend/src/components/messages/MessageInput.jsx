import { BsSend } from "react-icons/bs";  // Changed from BaSend to BsSend

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full ">  
        <input 
          type="text"
          placeholder="send a message..." 
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white" 
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