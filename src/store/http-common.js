import axios from "axios";

export const HTTP = axios.create({
  baseURL: `https://obscure-plains-60445.herokuapp.com/api/`
});
