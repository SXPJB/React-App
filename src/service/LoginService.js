import axios from "axios";

export class LoginService {

    constructor() {
        this.basrURL = "http://localhost:8080/acceso/"
    }
    
    insertUser(user) {
        let rest = null;
        try {
            rest = axios.post(this.basrURL + "insertUser", user).then(res => {
                console.log(res);
            }).catch(e => {
                console.log(e);
            })
        } catch (e) {
            console.log("error", e)
        }
        return rest;
    }
}