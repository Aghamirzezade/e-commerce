import { Outlet } from "react-router-dom";
import ProductsHead from "../products/products-components/productsHead";
import ProductsNav from "../products/products-nav/Products-nav";
import NavBar from '../Navbar/Nav'

export default function ProductLayout() {
  return (
    <>
      <NavBar/>
      <ProductsHead />
      <div className="products-content">
        <ProductsNav />
        <Outlet />
      </div>
    </>
  );
}
