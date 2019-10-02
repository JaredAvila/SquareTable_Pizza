import axios from "axios";

const instance = axios.create({
  baseURL: "https://squaretable-1984f.firebaseio.com/"
});

export default instance;
