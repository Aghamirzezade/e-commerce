import "./App.css";
import {Routes,Route} from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./components/Home/home";
import Products from "./components/products/Products";
import ProductLayout from "./components/Layouts/ProductLayout";
import Computers from "./components/products/products-components/computers";
import Laptops from "./components/products/products-components/laptops";
import Phones from "./components/products/products-components/phones";
import Tablets from "./components/products/products-components/tablets";
import Accessories from "./components/products/products-components/accesories";
import Register from "./components/register/register";
import Login from "./components/login/login";
import ProfileLayout from "./components/Profile/ProfileLayout";
import ProductsNav from "./components/products/products-nav/Products-nav";



function App(){
  return(
  <Routes>
    <Route path="/" element={<MainLayout/>} >
      <Route index={true} element={<Home/>}/>
    </Route>
    <Route path="/products" element={<ProductLayout/>} >
      <Route index={true} element={<Products/>} />
      <Route path="computers" element={<Computers/>} />
      <Route path="laptops" element={<Laptops/>} />
      <Route path="phones" element={<Phones/>} />
      <Route path="tablets" element={<Tablets/>} />
      <Route path="accessories" element={<Accessories/>} />
    </Route>
    <Route path="/register"  element={<Register/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<ProfileLayout/>}>
      <Route index={true} element={<Products/>} />
    </Route>
  </Routes>
)}

export default App;



