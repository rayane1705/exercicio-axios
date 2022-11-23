import axios from "axios";

const blogFetch = axios.create({
    baseURL: "https://projeto-individual-mecanica-resilia.onrender.com",
    headers: {
        "Content-Type": "application/json",
        
    },
})

export default blogFetch;