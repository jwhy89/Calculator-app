  
import axios, { AxiosResponse } from "axios";
import { ICalculator } from "../models/calculator";

axios.defaults.baseURL = process.env.DATABASE_URL || "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(responseBody)
};
export const getCalculations = (): Promise<ICalculator[]> => requests.get("/calculations");
export const postCalculation = (calculationMap): Promise<ICalculator[]> => requests.post("/calculations", calculationMap);