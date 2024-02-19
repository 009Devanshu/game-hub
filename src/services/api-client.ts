import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'af7f2e4472724d6c974618270c46fab9'
    }
})