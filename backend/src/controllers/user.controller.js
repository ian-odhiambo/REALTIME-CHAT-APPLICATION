export const getUsersforSidebar = async(req, res) => {
    try{

        const loggedInUserId = req.user_id

    }catch(error){
        console.log("Error in the getUsersforSidebar", error)
        res.status(500).json({error: "internal server error" })
    }
}