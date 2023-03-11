import React, { useState } from 'react'
import '../index.css'
import { choosingItem } from './ProductsBox'

const ProductsModalContainer = ({myLoanStyle ,modalRef,ProductsData,productId  }) => {

  const selectedData = ProductsData.find((item=>item.id === productId ))
  const [months, setMonths] = useState()
  const handleChange =(e)=>{
    setMonths(e.target.value)
  }
  return (
    <div>
            
              <div className='modal-container' style={myLoanStyle}>
              <div style={myLoanStyle} ref={modalRef}  className='product-loan'> 
              <div className='product-loan-links'>
                <div>
                  <img className='product-loan-img' src={selectedData?.image.url} alt="" />
                  <div className='product-loan-name'>{selectedData?.name}</div>  
                </div>
                <div className='product-loan-price'>{selectedData?.price + " azn"}</div>
                </div>
                <form>
                  <label className='product-loan-months'>Choose Months (slide it) :</label>
                  <input className='product-loan-monthsChange' type="range" onChange={handleChange}  min="2"  max='12'></input>
                </form>
                {
                  <div className='product-loan-calculate'>
                    <div className='product-loan-items'>
                      <div>Months : </div>
                      <div className='product-loan-item'>{months}</div>
                    </div>
                    <div className='product-loan-items'>
                      <div>Initial payment : </div>
                      <div className='product-loan-item'>{selectedData?.price / 10} azn</div>
                    </div>
                    <div className='product-loan-items'>
                      <div>Monthly payment : </div>
                      <div className='product-loan-item'>{Math.round(((selectedData?.price - selectedData?.price/10) / months)*10) /10} azn</div>
                        
                    </div>
                  </div>
                }
              </div>
              </div>
            
    </div>
  )
}

export default ProductsModalContainer