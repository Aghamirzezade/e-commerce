import React, { useState, useRef } from "react";
import ProductsNav from "./products-nav/Products-nav";
import MovingComponent from "react-moving-text";
import "./index.css";
import ProductsData from "../../products.json";
import useOnClickOutside from "../../helpers/useOutsideClick";
import ProductsHead from "./products-components/productsHead";
import ProductsBox from "./productsHelp.jsx/ProductsBox";
import ProductsModalContainer from "./productsHelp.jsx/ProductsModalContainer";
import { Button } from "@chakra-ui/react";


const Products = () => {
  const [selectedProductId, setSelectedProductId] = useState('');
  const handleClick = (id)=>{
    setSelectedProductId(id);
    setIsClicking(true)
  }
  
  
  const [isClicking, setIsClicking] = useState(false);
  const myLoanStyle = {
    display: isClicking ? "block" : "none",
  };
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, () => {
    setIsClicking(false);
  });

  return (
    <div>
        <div>
          <h2>Offers For You</h2>

          <div className='productBoxes'>
               {ProductsData.filter(material=>material.id % 2 ===1).map((item,i)=>(  
                <form   className='productBox' >
                    <img className='productImg' src={item.image.url} width={item.image.width} height={item.image.height}/>
                    <div className='productAbout'>
                        <div className='productName'>{item.name}</div>
                        <div className='productPrice'>{item.price} Azn</div>
                    </div>
                    <Button onClick={()=>{handleClick(item.id)}} className='productBtn'colorScheme="green">
                    Calculate the monthly loan
                    </Button>
                    <Button className='productBtn' colorScheme="pink">
                       Add to basket
                    </Button>
                </form>
                
                ))}
                </div>
        </div>
        
        <ProductsModalContainer
          myLoanStyle={myLoanStyle}
          modalRef={modalRef}
          ProductsData={ProductsData}
          productId={selectedProductId}
        />
    </div>
  );
};

export default Products;
