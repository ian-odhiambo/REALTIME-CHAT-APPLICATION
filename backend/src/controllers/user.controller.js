export const getUsersforSidebar = async(req, res) => {
    try{

    }catch(error){
        console.log("Error in the getUsersforSidebar", error)
        res.status(500).json({error: "internal server error" })
    }
}