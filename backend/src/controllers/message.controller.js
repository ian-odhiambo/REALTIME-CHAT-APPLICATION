export const sendMessage = async (req, res) => {
  try{

  }catch(error){
    console.log("Error in message controller", error);
    res.status(500).json({error:"internal server error"});
  }
  
};
