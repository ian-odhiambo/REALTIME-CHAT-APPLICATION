export const getUsersforSidebar = async(req, res) => {
    try{

        const loggedInUserId = req.user_id
        const filteredUsers = await user.find({_id: { $ne: loggedInUserId }})

        res.status(200).json(filteredUsers);

    }catch(error){
        console.log("Error in the getUsersforSidebar", error.message)
        res.status(500).json({error: "internal server error" })
    }
}