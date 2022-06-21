import axios from "axios";

export const fetchApi = axios.create({
  baseURL: "localhost:3000/api/v1",
});
