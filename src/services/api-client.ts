import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "5cc70bbb53bc4adab60ad651fa95fdd4"
    }
});