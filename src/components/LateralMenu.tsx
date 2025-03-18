
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

export default function LateralMenu() {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {label: 'Articulos', command:() => navigate('/Articulos')},
    {label: 'Subida', command:() => navigate('/Subida')}
  ];
    return (
        <div>
          <h1>Menu</h1>
          <Menu model={items} />
        </div>
        
      )

}