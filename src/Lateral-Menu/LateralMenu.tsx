
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';

export default function LateralMenu() {

    let items: MenuItem[] = [
        {label: 'Articulos'},
        {label: 'Subida'}
    ]
    return (
        <div>
          <h1>Productos</h1>
          <Menu model={items} />
        </div>
      )

}