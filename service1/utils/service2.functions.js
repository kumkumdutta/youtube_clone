import * as Helper from './helper.js'
const getdata = async ({ Collection, filterdata }) => {
    try {
 
      let data = await Helper.callApi(`http://localhost:22001/service3/find?collection=${Collection}`, filterdata, 'post')

      
  
      return data
    } catch (error) {
  
      console.log(error);
  
    }
  }
  
  const get_single_data = async ({ Collection, filterdata }) => {
    try {
      console.log(Collection, filterdata, "body");
      let data = await Helper.callApi(`http://localhost:22001/service3/findOne?collection=${Collection}`, filterdata, 'post')
      console.log(data, "data is here");
      return data.data
    } catch (error) {
      console.log(error);
    }
  }
  
  const make_db_entry = async ({ Collection, document }) => {
    try {
      console.log(Collection, document,"opppppppppppppppppp");
      
      
      let data = await Helper.callApi(`http://localhost:22001/service3/create?collection=${Collection}`, document, 'post')
      console.log(data, "postdataaaa");
      
     
      return data
    } catch (error) {
      console.log(error);
    }
  }
   
  const update_single_data = async ({ Collection, filterdata, document }) => {
    try {
      console.log(Collection, filterdata, document, "body");
      let data = await Helper.callApi(`http://localhost:22001/service3/updateOne?collection=${Collection}`, { filterdata, document }, 'put')
      console.log(data, "data is here");
      return data.data
    } catch (error) {
      console.log(error);
    }
      }
  
    const update_many_data = async ({ Collection, filterdata, document }) => {
      try {
        console.log(Collection, filterdata, document, "body");
        let data = await Helper.callApi(`http://localhost:22001/service3/updateMany?collection=${Collection}`, { filterdata, document }, 'put')
        console.log(data, "data is here");
        return data.data
      } catch (error) {
        console.log(error);
      }
        }
  
  
    const delete_single_data = async ({ Collection, filterdata }) => {
      try {
        console.log(Collection, filterdata, "body");
        let data = await Helper.callApi(`http://localhost:22001/service3/deleteOne?collection=${Collection}`, filterdata, 'delete')
        console.log(data, "data is here");
        return data.data
      } catch (error) {
        console.log(error);
      }
    }
  
    const delete_many_data = async ({ Collection, filterdata }) => {
      try {
        console.log(Collection, filterdata, "body");
        let data = await Helper.callApi(`http://localhost:22001/service3/deleteMany?collection=${Collection}`, filterdata, 'delete')
        console.log(data, "data is here");
        return data.data
      } catch (error) {
        console.log(error);
      }
    }
  
  
  export {
    getdata,
    get_single_data,
    make_db_entry,
    update_single_data,
    update_many_data,
    delete_single_data,
    delete_many_data
  }