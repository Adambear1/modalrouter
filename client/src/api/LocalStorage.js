import axios from "axios";

const route = "http://localhost:5000/api";

export default {
  get: async () => {
    return axios.get(route);
  },
  post: async (data) => {
    return axios.post(route, {
      body: data,
    });
  },
};
