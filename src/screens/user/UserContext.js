
import React,{useState,createContext} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login,register } from './UserService';

export const UserContext=createContext();
export const UserContextProvider = (props) => {
  const {children}=props;
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const onLogin=async (email,password) =>{
      try {
          const res= await login(email,password);
          if(res.error==false){
              const {token,user}=res.data;
              await AsyncStorage.setItem('token',token);
              await AsyncStorage.setItem('user',JSON.stringify(user));
              setisLoggedIn(true);
              return true
          }else{
            setisLoggedIn(false);
          }
      } catch (error) {
          console.log('onLogin error: ',error);
      }
      return false;
  }

  const onRegister =async(email,password) =>{
      try {
          const res=await register(email,password);
          if(res.error==false){
              return true;
          }
      } catch (error) {
          console.log('onRegister error: ',error);
      }
      return false;
  }
  return (
        <UserContext.Provider
        value={{isLoggedIn,onLogin, onRegister}}>
            {children}
        </UserContext.Provider>
  );
};


