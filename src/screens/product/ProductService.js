import axiosInstance from '../../utils/axios';
export const getProductForHomePage= async()=>{
    const res=await axiosInstance.get('/api/products/get-for-home-page');
    return res;

}
export const getProductDetail= async(id)=>{
    const res=await axiosInstance.get(`/api/products/${id}/view`);
   
    return res;

}
export const saveCart = async (data)=>{
    const res=await axiosInstance.post(`/api/carts`,data);
   
    return res;

}