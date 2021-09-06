class OrderValidation {
    static validate(name, phonenumber, address, products) {
        if (name == null || name.trim() == "") {
            throw new Error("Please enter the name");

        }
        else if (phonenumber.length < 10) {
            throw new Error("Please enter a valid number");


        }
        else if (products.length == 0 ){
            throw new Error("Please select any item");
        }
        else if(address == null || address.trim() == ""){
            throw new Error("Please enter address")
        }
    }
}