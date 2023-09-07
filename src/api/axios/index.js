import axios from "axios";

const instance = axios.create({
  // baseURL: "https://backofficeapi.besanaglobal.com/",
  baseURL: "https://backoffice.besanaglobal.com/api/",
  // baseURL: "http://127.0.0.1:8000/api/",

  timeout: 15000,
});

export const AxiosGet = async (url, params = {}) => {
 
  try {
    let result = await instance.get(url, {
      params: params,
      rejectUnauthorized: false
    });

   
    return result.data;
  } catch (e) {
    alert("Error : " + e.response.data.message);
  }
};

export const getCurrencyApi = async (url, currency) => {
  try {
    let result = await instance.get(url + currency);
    return result.data.rates[currency];
  } catch (e) {
    alert("Error: aqui es" + e.response.data.message);
  }
};

export const AxiosPost = async (url, params = {}) => {
  try {
    if (url==='Buy') {
      let result = await instance.post(url, params);
      return result.data;
    }
    if(url==='Sponsor'){
      console.log(params)
     
      let result = await instance.post(url, params);
      console.log(result)

      return result;

    }
    let result = await instance.post(url, params);
    return result.data.entity;
  } catch (e) {
    alert("Error: " + e.response.data.message);
    return null;
  }
};