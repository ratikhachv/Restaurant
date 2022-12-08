import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context'
import {NavLink , Outlet} from 'react-router-dom'
import "./slider.css"

export default function Slider() {
    const context = useContext(Context)
    const [index, setindex] = useState(0)
    useEffect(() => {
        let interval = setInterval(()=>{
            setindex(index + 1)
        },[3000])
        if(index >= 15){
            clearInterval(interval)
            setindex(0)
         }    
    },[index])
    
  return (
    <>
    <div className="slider">
        <img src={context.data[index].image} alt="" />
    </div>
    </>
  )
}
