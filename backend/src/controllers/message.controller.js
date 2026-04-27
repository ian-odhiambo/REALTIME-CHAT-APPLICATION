export const sendMessage = async (req, res) => {
  try{
    const {message} = req.body;
    const {id} = req.params;
  }catch(error){
    console.log("Error in message controller", error.message);
    res.status(500).json({error:"internal server error"});
  }
  
};
