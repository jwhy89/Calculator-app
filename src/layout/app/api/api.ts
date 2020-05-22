import axios, { AxiosResponse } from "axios";
import { ICalculator } from "../models/calculator";

axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(responseBody)
};
export const getCalculations = (): Promise<ICalculator[]> => requests.get("/calculations");
export const postCalculation = (calculationMap): Promise<ICalculator[]> => requests.post("/calculations", calculationMap);

// page startup pull last 10 calculations from db
// get last 10 calculations/when someone hits "=" button - post inputHistory to db (db may need dates to track most recent)
// api 
// ?