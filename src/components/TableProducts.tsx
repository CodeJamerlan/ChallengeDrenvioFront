import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { getProductsById } from '../services/apiService';


const TableProducts = ({userId} : {userId:string}) => {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      const fetchData = async() => {
        const data = await getProductsById(userId);
        setProducts(data)
      }
      fetchData();
    },[])

    const formatCurrency = (value:number) => {
      return value.toLocaleString('en-US', {style:'currency', currency:'USD'});
    }

    const priceBodyTemplate = (product: Product) => {
      return formatCurrency(product.price);
    }

    return (
      <div>
        <div>
          <h1>Articulos</h1>
        </div>
        <div>
          <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
            <Column field="name" header="Nombre"></Column>
            <Column field="price" header="Precio" body={priceBodyTemplate}></Column>
            <Column field="description" header="Descripcion"></Column>
            <Column field="stock" header="Inventario"></Column>
          </DataTable>
        </div>
      </div>
    )
};

export default TableProducts