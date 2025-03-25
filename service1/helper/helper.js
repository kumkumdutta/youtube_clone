import axios from "axios";
// import { Collection } from "mongoose";

async function callApi(url,filterdata) {
    try {
      const response = await axios.post(url,filterdata);
      console.log(response.data,'**************************');
      return response.data
    } catch (error) {
      console.error(error);
    }
  }


const getdata= async ({Collection, filterdata}) =>{
  console.log(Collection,"*************");
  
try {
  console.log(Collection, filterdata, "body");
    let data = await callApi(`http://localhost:22001/get?collection=${Collection}`, filterdata)

    
    return data.data
} catch (error) {
   
   console.log(error);
    
}
}


  export {
    callApi,
    getdata
  }