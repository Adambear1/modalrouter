import axios from "axios";

const query = (searchValue) =>
  `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&api_key=${
    process.env.REACT_APP_GOOGLE_API_KEY ||
    "AIzaSyCkI3AgjTwxHJPCNkgioQX3_4bcuqWdTws"
  }`;
export default {
  GetAll: (input = "a") => {
    return axios.get(query(input));
  },
};
