class RegisterValidator{
    static validate(name,email,password,confirmPassword){
        if(name==""||name=="null"|| name.trim() ==""){
            throw new Error("name can't be blank");
        }else if(email==""||email=="null"|| email.trim() ==""){
            throw new Error("please enter email");
        }else if(password.length<8){
            throw new Error("password must be greater then 8 characters");
        }else if(password!=confirmPassword){
            throw new Error("password and confirm password does not match");
        }
    }
}