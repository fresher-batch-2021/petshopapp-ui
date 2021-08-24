class OrderValidation {
    static validate(name, phonenumber, address, products) {
        if (name == null || name.trim() == "") {
            throw new Error("Name Cant be Blank");

        }
        else if (phonenumber.length < 10) {
            throw new Error("please Enter a Valid Number");


        }
        else if (products.length == 0 ){
            throw new Error("Please select any item");
        }
        else if(address == null || address.trim() == ""){
            throw new Error("please enter address")
        }
    }
}