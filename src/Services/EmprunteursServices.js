import axios from "axios";

class EmprunteursServices{

    static getAllEmprunteurs(){
        return axios.get("http://127.0.0.1:3005/emprunteurs");
    }
}

export default EmprunteursServices;