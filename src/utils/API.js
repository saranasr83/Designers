import axios from "axios";

export default {
     // Makes Ajax call to the DB and get results for a searched item
    getResult: function(data){
        console.log("axios data",data)
        return axios.get("/api/result/" + data);
    }
}