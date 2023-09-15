import axios from "axios";

const token = "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";
const instance = axios.create({
    headers: {
        Authorization: `Bearer ${token}`,
    },
    baseURL: "https://api.github.com/"
});

export default instance;
