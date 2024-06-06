import axios from "axios";

class LivresServices{

    static getAllLivres(){
        return axios.get("http://127.0.0.1:3005/livres");
    }

    static getAllLivresById(id){
        return axios.get("http://127.0.0.1:3005/livres/" + id)
    }
}

export default LivresServices;