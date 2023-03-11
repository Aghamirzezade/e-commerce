import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import './products-nav.css'


  
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Computers & Laptops', 'sub1', <AppstoreOutlined />, [
    getItem(<Link to="/products/computers">Computers</Link>),
    getItem(<Link to="/products/laptops">Laptops</Link>),
  ]),
  {
    type: 'divider',
  },
  getItem('Phones & Tablets', 'sub2', <AppstoreOutlined />, [
    getItem(<Link to="/products/phones">Phones</Link>),
    getItem(<Link to="/products/tablets">Tablets</Link>),
  ]),
  {
    type: 'divider',
  },
  getItem('Accessories', 'sub4', <AppstoreOutlined />, [
    getItem(<Link to="/products/accessories">Accessories</Link>),
  ]),
];
const App = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
    className='products-nav-menu'
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1', 'sub2' , 'sub4']}
      mode="inline"
      items={items}
    />
  );
};

const ProductsNav =()=>{
  return (
    <App/>
  )
}
export default ProductsNav;