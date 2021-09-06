class RegisterValidator{
    static validate(name,email,password,confirmPassword){
        if(name==""||name=="null"|| name.trim() ==""){
            throw new Error("Please enter the name");
        }else if(email==""||email=="null"|| email.trim() ==""){
            throw new Error("Please enter email");
        }else if(password.length<8){
            throw new Error("Password must be greater than 8 characters");
        }else if(password!=confirmPassword){
            throw new Error("Password and confirm password does not match");
        }
    }
}