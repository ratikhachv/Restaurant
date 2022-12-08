import React, { useContext } from 'react'
import './productCard.css'
import { useNavigate } from 'react-router-dom'
import { Context } from './Context'

export default function ProductCard(props) {
    const context = useContext(Context)
    let navigate=useNavigate()
  return (
    <div className="product-card" >
        <div className="product-img" style={{backgroundImage: `url(${props.src})`}}>
            <button onClick={()=>{context.selectProducts(props.name); 
            context.countCartItems(props.cartBtn)}}>{props.cartBtn}</button>
        </div>
        <div className="product-info">
            <p className="name">{props.name}</p>
            <div>
                <p className='price'>{props.price}$</p>
                <button onClick={()=>{navigate(`/menu/${props.name}`)}}>Details</button>
            </div>
        </div>
    </div>
  )
}
