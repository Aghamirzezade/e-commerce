import React from 'react'
import MovingComponent from 'react-moving-text'
import '../index.css'


const ProductsHead = () => {
  return (
    <div className='products-moving-text'>
        <MovingComponent
        
            type="typewriter"
            
            dataText={["You can easily get the desired product with credit or cash..."]}
          />
    </div>
  )
}

export default ProductsHead;