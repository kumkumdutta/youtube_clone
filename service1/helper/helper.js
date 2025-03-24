import axios from "axios";
import { Collection } from "mongoose";

async function callApi(url,filterdata) {
    try {
      const response = await axios.post(url,filterdata);
      console.log(response);
      return response
    } catch (error) {
      console.error(error);
    }
  }


const getdata= ({Collection, filterdata}) =>{
try {
    let data = callApi(`http://localhost:22001/get?collection=${Collection}`, filterdata)
    return data
} catch (error) {
   
   console.log(error);
    
}
}

  export {
    callApi,
    getdata
  }