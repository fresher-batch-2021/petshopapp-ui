class LoginValidator
{
    static Validate(email,password)
    {
        if(email==""|| email == null || email.trim()== "")
        {
            throw new Error("please enter email");
        }else if(password.length<8)
        {
            throw new Error("password must be 8 character");
        }

    }
}