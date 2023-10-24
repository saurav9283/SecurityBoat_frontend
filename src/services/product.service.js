import axios from "axios";
export const addProduct=(data)=>axios.post('https://crud-api-omega.vercel.app/product',data);
export const getProducts= (page)=>axios.get(`https://crud-api-omega.vercel.app/product?page=${page}`);
// export const deleteProduct= (id)=>axios.delete(`https://crud-api-omega.vercel.app/product/${id}`);
export const deleteProduct= (id)=>axios.delete(`https://crud-api-omega.vercel.app/product/${id}`);
export const updateMyProduct= (data,id)=>axios.put(`https://crud-api-omega.vercel.app/product/${id}`,data);

// http://localhost:5000/product?page=${page}`)