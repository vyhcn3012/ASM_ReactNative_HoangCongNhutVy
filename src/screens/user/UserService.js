import { View, Text } from 'react-native';
import axiosInstance from '../../utils/axios';
import React from 'react';

export const login = async (email, password) => {
    const data={
        email: email,
        password: password
    }
    const res=await axiosInstance.post('api/auth/login',data);
    return res;
}


export const register = async (email, password) => {
    const data={
        email: email,
        password: password
    }
    const res=await axiosInstance.post('api/users/register',data);
    return res;
}


