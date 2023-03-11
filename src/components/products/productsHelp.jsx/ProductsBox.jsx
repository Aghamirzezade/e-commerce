import React, { useState } from 'react'
import '../index.css'
import { Button } from "@chakra-ui/react";



const ProductsBox = ({ProductsData,setIsClicking}) => {
    const onHandleSubmit =(e)=>{
        setChoosingItem(e.target)
    }
    const [choosingItem, setChoosingItem] = useState()
    console.log(choosingItem);
  return (
        <div className='productBoxes'>
               {ProductsData.filter(material=>material.id % 2 ===1).map((item,i)=>(  
                <form  onChange={onHandleSubmit}  className='productBox' >
                    <img className='productImg' src={item.image.url} width={item.image.width} height={item.image.height}/>
                    <div className='productAbout'>
                        <div className='productName'>{item.name}</div>
                        <div className='productPrice'>{item.price} Azn</div>
                    </div>
                    <Button onClick={()=>{setIsClicking(true)}} className='productBtn'colorScheme="green">
                    Calculate the monthly loan
                    </Button>
                    <Button className='productBtn' colorScheme="pink">
                       Add to basket
                    </Button>
                </form>
                
                ))}
                </div>
  )
}

export default ProductsBox