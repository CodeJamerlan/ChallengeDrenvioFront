import axios from "axios";
import { User } from "../types/user";
import { Product } from "../types/product";
import { SpecialPrice } from "../types/specialPrice";

const api = axios.create({
    baseURL: "https://challenge-drenvio-back.vercel.app/api",
    headers: {
        "Content-Type": "application/json",
    },
});

/**
 * metodo que traer el usuario por su Id
 * @param userId 
 * @returns retorna la informacion del usuario
 */
export const getUserById = async (userId:string): Promise<User> => {
    const response = await api.get(`/user/${userId}`)
    return response.data
};

/**
 * metodo que consulta los productos, necesita el usuario para poder verificar si tiene precios especiales
 * @param userId 
 * @returns retorna una lista de productos con los detalles de cada producto
 */
export const getProductsById = async (userId:string) : Promise<Product[]> => {
    const response = await api.get(`/products/${userId}`);
    return response.data
};
/**
 * metodo que inserta un nuevo precio especial, recibe una interfaz tipo Precio especial
 * @param url 
 * @param data 
 * @returns retorna un mensaje de insercion exitosa
 */
export const sendSpecialPrice = async (url:string, data: SpecialPrice): Promise<any> => {
    try {
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("Error de Axios:", error.response?.data || error.message);
        } else {
            console.error("Error desconocido:", error);
        }
        throw error;
    }
};

/**
 * metodo que consulta todos los usuarios
 * @returns una coleccion de usuarios
 */
export const getUsers = async () => {
    const response = await api.get("/users");
    return response.data
};

/**
 * metodo que consulta todos los productos sin ninguna discriminacion
 * @returns una coleccion de productos
 */
export const getProducts = async() => {
    const response = await api.get("/products");
    return response.data
};