import { useState } from 'react';
import './reset.css'
import './App.css';
import { Context } from './Context';
import Footer from './Footer';
import { Routes, Route } from 'react-router';
import Header from './Header';
import Slider from './Slider';
import Menu from './Menu';
import ContactUs from './ContactUs';
import Detail from './Detail';
import Cart from './Cart';


let everyDishinfo = require("./data for react project.json")

function App() {
  const [data, setData] = useState(everyDishinfo)
  const [cartItemsNum, setCartItemsNum] = useState(0)
  
  function selectProducts(name){
    data.map((el)=>{
        if(el.name == name){
          if(el.status == "Add to cart"){
            return el.status = "Remove from cart"
          }else{
            return el.status = "Add to cart"
          }
        }
    })
  }
  function countCartItems(status){
    if(status=="Remove from cart"){
      setCartItemsNum(cartItemsNum - 1)
    }else{
      setCartItemsNum(cartItemsNum + 1)
    }
   
  }
  
  return (
    <>
    <Context.Provider value={{data, selectProducts, cartItemsNum, countCartItems}}>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Slider/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path="/menu/:id" element={<Detail/>} />
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Route>
    </Routes>
    </Context.Provider>
    <Footer/>
    </>
    
  );
}

export default App;
