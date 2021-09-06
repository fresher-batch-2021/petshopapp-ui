class LoginValidator
{
    static Validate(email,password)
    {
        if(email==""|| email == null || email.trim()== "")
        {
            throw new Error("Please enter email");
        }else if(password.length<8)
        {
            throw new Error("Password must be 8 character");
        }

    }
}