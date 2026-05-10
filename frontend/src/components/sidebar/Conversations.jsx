import Conversation from "./Conversation"

const Conversations = () => { 
  const {loading, conversations}= useSetConversatons();
  console.log("CONVERSATIONS",conversations);
  return (
    <div className="py-2 flex flex-col overflow-auto">
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
    </div>
  )
}

export default Conversations;


//THE ORIGINAL STARTER CODE
// import Conversation from "./Conversation"

// const Conversations = () => {
//   return (
//     <div className="py-2 flex flex-col overflow-auto">
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//     </div>
//   )
// }

// export default Conversations