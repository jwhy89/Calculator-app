import axios, { AxiosResponse } from "axios";
import { ICalculator } from "../models/calculator";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(responseBody)
};
const Calculations = {
  list: (): Promise<ICalculator[]> => requests.get("/calculations"),
};
export default {
  Calculations
};
