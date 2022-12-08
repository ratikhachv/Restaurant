import React, { useContext } from 'react'
import { Context } from './Context'
import './menu.css'
import ProductCard from './ProductCard'

export default function Menu() {
  const context = useContext(Context)
  return (
    <div className="menu">
        {context.data.map(el=><ProductCard name={el.name} price={el.price} src={el.image} cartBtn={el.status}/>)}
    </div>
  )
}
