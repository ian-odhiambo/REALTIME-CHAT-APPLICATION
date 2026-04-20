import User from "../models/user.model";

export const signUp = (req, res) => {
    try{
        const {fullName, username, password, confirmPassword} = req.body;

        if(password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match"})
        }

        const user = await User.findOne({username});
        if(user) {
            return res.status(400).json({error:"Username already exists"})
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
