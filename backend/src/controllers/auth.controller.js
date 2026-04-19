export const signUp = (req, res) => {
    try{
        const (fullName, username, password, confirmPassword) = req.body
    }catch(error){

    }
}

export const login = (req, res) => {
    console.log("LoginUser");
}

export const logOut = (req, res) => {
    console.log("LogOut");
}
