
class userService {

    static login(email, password) {
        const url = myUrl + "petshop_user/_find";

        const loginData = {
            selector: {
                email: email,
                password: password
            },
            fields: ["_id", "email", "password", "role"],
        };
        return axios.post(url, loginData, { headers: { 'Authorization': basicAuth } });
    }
    static register(regData) {
        const url = myUrl + "petshop_user";
        return axios.post(url, regData, { headers: { 'Authorization': basicAuth } });
    }
}







