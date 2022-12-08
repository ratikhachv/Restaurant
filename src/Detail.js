import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from './Context'
import './detail.css'

export default function Detail() {
  const context = useContext(Context)
  let { id } = useParams()
  return (
    <>
     {context.data.map((el)=>{
      if(el.name===id){
        return (
          <div className='detail'>
            <div className='detail-img'>
              <img src={el.image} alt="" />
            </div>
            <div className='detail-info'>
              <p>category: {el.category}</p>
              <p>name: {el.name}</p>
              <p>description: {el.description}</p>
              <p>price: {el.price} $</p>
            </div>
          </div>
        )
      }
      })}
    </>
  )
}
