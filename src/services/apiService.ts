import axios from "axios";
import { User } from "../types/user";
import { Product } from "../types/product";

const api = axios.create({
    baseURL: "http://localhost:3000/api"
});

export const getUserById = async (userId:string): Promise<User> => {
    const response = await api.get(`/user/${userId}`)
    return response.data
};

export const getProducts = async (userId:string) : Promise<Product[]> => {
    const response = await api.get(`/products/${userId}`);
    return response.data
}