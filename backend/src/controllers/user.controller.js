export const getUsersforSidebar = async(req, res) => {
    try{

        const loggedInUserId = req.user_id
        const filteredUsers = await user.find({_id: { $ne: loggedInUserId }})

    }catch(error){
        console.log("Error in the getUsersforSidebar", error)
        res.status(500).json({error: "internal server error" })
    }
}