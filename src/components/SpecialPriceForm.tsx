import {useState, useEffect} from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { SpecialPrice } from "../types/specialPrice";
import { getProducts, getUsers, sendSpecialPrice } from "../services/apiService";
import { User } from "../types/user";
import { Product } from "../types/product";

export default function SpecialPriceForm() {

   const [userId, setUserId] = useState<string>("");
   const [productId, setProductId] = useState<string>("");
   const [specialPrice, setSpecialPrice] = useState<number>(0);
   const [products, setProducts] = useState<Product[]>([]);
   const [users, setUsers] = useState<User[]>([]);

   const handleSubmit = async () => {
       try {
           const datos: SpecialPrice = { productId, userId, specialPrice};
           const response = await sendSpecialPrice("/specialOffer", datos);
           console.log("Respuesta de la API:", response);
       } catch (error) {
           console.error("Error al enviar datos:", error);
       }
   };

    useEffect(() => {
         const fetchDropdowns= async() => {
           const productData = await getProducts();
           const userData = await getUsers();
           console.log(productData);
           setProducts(productData)
           setUsers(userData);
         }
         fetchDropdowns();
       },[])
    
    const productOptions = products.map(product => ({
        label: product.name,
        value: product._id,
    }));

    const userOptions = users.map(user => ({
        label: user.name,
        value: user._id,
    })) 

    return (
        <div style={{ width: '70%', justifyContent: 'center', display: 'inline-grid' }}>
            <h1>Crear un nuevo Precio Especial</h1>
            <div>
                <form className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="userDropdown">Usuario</label>
                        <Dropdown 
                        id="userDropdown" 
                        placeholder="Selecciona el usuario"
                        value={userId}
                        options={userOptions}
                        onChange={(e) => setUserId(e.value)}></Dropdown>
                    </div>
                    <div className="p-field">
                        <label htmlFor="productDropdown">Producto</label>
                        <Dropdown 
                        id="productDropdown" 
                        placeholder="Selecciona el producto"
                        options={productOptions}
                        value={productId}
                        onChange={(e) => setProductId(e.value)}></Dropdown>
                    </div>
                    <div className="p-field">
                        <label htmlFor="specialPriceInput">Precio Especial</label>
                        <InputText 
                        id="specialPriceInputText" 
                        value={String(specialPrice)} 
                        placeholder="Ingrese el precio especial"
                        onChange={(e) => setSpecialPrice(Number(e.target.value))}></InputText>
                    </div>
                    <Button 
                    type="submit" 
                    label="Guardar"
                    onClick={handleSubmit}></Button>
                </form>
            </div>
        </div>
    )
}