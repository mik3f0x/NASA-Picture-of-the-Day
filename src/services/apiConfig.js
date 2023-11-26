import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://astronomy-api-3a059f9816f1.herokuapp.com/api/astronomy",
  development: "https://astronomy-api-3a059f9816f1.herokuapp.com/api/astronomy",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
