import {useEffect, useRef} from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const {messages,loading} = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {},[])
  
  // console.log("messages:", messages);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        Array.isArray(messages) &&
        messages.length > 0 &&
        messages.map((message) => (
          <Message  message={message} />
        ))}

      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-white">No messages yet. Start the conversation!</p>
        </div>
      )}
    </div>
  );
};

export default Messages;

//this is the starter code
// import Message from "./Message";

// const Messages = () => {
//   return (
//     <div clasName="px-4 flex-1 overflow-auto">
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages
// const Messages = () => {
//   return (
//     <div clasName="px-4 flex-1 overflow-auto">
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages
