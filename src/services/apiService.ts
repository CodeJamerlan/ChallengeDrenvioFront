const BASE_URL = "http://localhost:3000/api";

export const fetchData = async <T>(endpoint: string): Promise<T> =>{
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);    
        }
        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
    }
};
