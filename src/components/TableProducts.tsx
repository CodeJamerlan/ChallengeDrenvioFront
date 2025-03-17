import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { getProducts } from '../services/apiService';


const TableProducts = ({userId} : {userId:string}) => {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
      const fetchData = async() => {
        const data = await getProducts(userId);
        setProducts(data)
      }
      fetchData();
    },[])

    return (
      <div>
        <div>
          <h1>Productos</h1>
        </div>
        <div>
          <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
          </DataTable>
        </div>
      </div>
    )
};

export default TableProducts