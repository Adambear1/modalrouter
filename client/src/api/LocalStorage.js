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
  update: async (data) => {
    return axios.post(route + "/update", {
      body: data,
    });
  },
  clear: async () => {
    return axios.post(route + "/clear");
  },
};
