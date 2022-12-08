import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context'
import ProductCard from './ProductCard'
import './cart.css'

export default function Cart() {
    const [totalPrice, setTotalPrice] = useState("")
    const context = useContext(Context)
    let totalP=0;
    useEffect(() => {
        function total(){
            context.data.map((el)=>{
                if(el.status == "Remove from cart"){
                    return totalP += el.price
                }
                setTotalPrice(totalP)
            })
        }
        total()
    },)
    
   

  return (
    <>
    <div className="cart">
        {context.data.map((el)=>{
            if(el.status == "Remove from cart"){
                return(
                    <>
                        <ProductCard name={el.name} price={el.price} src={el.image} cartBtn={el.status} /> 
                    </>
            )}
        })}
        <span>total price is: {totalPrice}$</span>
    </div>
    </>
  )
}
