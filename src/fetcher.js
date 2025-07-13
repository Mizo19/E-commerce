// fetcher.js
const BASE_URL = "https://e-commerce-13-xy5k.onrender.com";

export const fetcher = async (url) => {
  let responseObject = { errorMessage: '', data: [] };

  try {
    const response = await fetch(BASE_URL + url);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }
    const responseData = await response.json();
    responseObject.errorMessage = '';
    responseObject.data = responseData;

    return responseObject;
  }
  catch (err) {
    responseObject.errorMessage = err.message;
    return responseObject;
  }

}

export const getProductById = subCatId=> {
 
  return fetcher("/products/"+ subCatId);
  
}