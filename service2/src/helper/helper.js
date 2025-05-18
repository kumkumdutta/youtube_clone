import axios from "axios";

import dotenv from 'dotenv'
dotenv.config()


async function callApi(url, filterdata,method) {
  console.log(url, filterdata,method,"pppppppppppp");
  
  try {
    const response = await axios[method](url, filterdata);
    console.log(response.data, '**************************');
    return response.data
  } catch (error) {
    console.error(error);
  }
}



export {
  callApi
}