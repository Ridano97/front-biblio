import axios from "axios";

class EmprunteursServices{

    static getAllEmprunteurs(){
        return axios.get("http://127.0.0.1:3000/emprunteurs");
    }
}

export default EmprunteursServices;