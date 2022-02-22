
import React,{useState,createContext} from 'react';
import {getProductForHomePage, getProductDetail} from './ProductServie'

export const ProductContext=createContext();
export const ProductContextProvider = (props) => {

  const {children}=props;

  const onGetProductForHomePage = async () => {
	try {
	    const res = await getProductForHomePage();
	    if(res.error == false){
		    return res.data;
	    }
	}catch (error) {
	    console.log('onGetProductForHomePage error: ', error);
	}
	return [];
  }

  const onGetProductDetail = async (id) => {
    try {
        const res = await getProductDetail(id);
        if (res.error == false) {
            return res.data;
	}
		} catch (error) {
			console.log('onGetProductDetail error: ', error);
		}
		return null;
     	}

  return (
        <ProductContext.Provider
        value={{onGetProductForHomePage, onGetProductDetail}}>
            {children}
        </ProductContext.Provider>
  );
};


