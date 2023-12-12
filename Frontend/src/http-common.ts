import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8800",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});