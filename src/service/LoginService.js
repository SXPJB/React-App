import axios from "axios";

export class LoginService {
    
    constructor(){
        this.basrURL="http://localhost:8080/acceso/"
    }


    loginAccess(user) {
        let rest = null;
        try {
            rest = axios.post(this.basrURL+"loging", user).then(res => {
                console.log(res);
            }).catch(e => {
                console.log(e);
            })
        } catch (e) {
            console.log("error",e)
        }
        return rest;
    }

    insertUser(user){
        let rest = null;
        try {
            rest = axios.post(this.basrURL+"insertUser", user).then(res => {
                console.log(res);
            }).catch(e => {
                console.log(e);
            })
        } catch (e) {
            console.log("error",e)
        }
        return rest;
    }

    getAllUsers(){
        let rest=null;
        try{
            rest=axios.get(this.basrURL+"getAllUsers").then(res=>{
               console.log(res.data)
            })
        }catch(e){
            console.log("error",e)
        }
        
        return rest;
    }

}