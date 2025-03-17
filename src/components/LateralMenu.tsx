
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import  styles  from './LateralMenu.module.css'

export default function LateralMenu() {

    let items: MenuItem[] = [
        {label: 'Articulos'},
        {label: 'Subida'}
    ]
    return (
        <div className={styles.lateralmenucontainer}>
          <h1>Menu</h1>
          <Menu model={items} />
        </div>
      )

}