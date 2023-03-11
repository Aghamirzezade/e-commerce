import {useState, useRef} from 'react'
import ProductsData from '../../../products.json'
import ProductsNav from '../products-nav/Products-nav';
import ProductsHead from './productsHead';
import { Button } from "@chakra-ui/react";
import useOnClickOutside from '../../../helpers/useOutsideClick'
import '../index.css'
import ProductsModalContainer from '../productsHelp.jsx/ProductsModalContainer'



const Tablets = () => {
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
        <div className='productBoxes'>
      {
        ProductsData.filter(material=>material.type==="Tablet").map((item,i)=>(
          <div className='productBox'>
          <img className='productImg' src={item.image.url}  width={item.image.width}/>
          <div className='productAbout'>
              <div className='productName'>{item.name}</div>
              <div className='productPrice'>{item.price} Azn</div>
          </div>
          <Button onClick={()=>{handleClick(item.id)}} className='productBtn' colorScheme="green">
          Calculate the monthly loan
          </Button>
          <Button className='productBtn' colorScheme="pink">
              Add to basket
          </Button>
      </div>
        ))
      }
      </div>
      <ProductsModalContainer
          myLoanStyle={myLoanStyle}
          modalRef={modalRef}
          ProductsData={ProductsData}
          productId={selectedProductId}
        />
    </div>
  )
}

export default Tablets