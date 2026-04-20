export const signUp = (req, res) => {
    try{
        const {fullName, username, password, confirmPassword} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match"})
        }

    }catch(error){

    }
}

export const login = (req, res) => {
    console.log("LoginUser");
}

export const logOut = (req, res) => {
    console.log("LogOut");
}
