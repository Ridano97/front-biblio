import axios from "axios";

class AuteursService {
    static getAllAuteurs(){
        return axios.get("http://127.0.0.1:3005/auteurs");
    }
}

export default AuteursService;