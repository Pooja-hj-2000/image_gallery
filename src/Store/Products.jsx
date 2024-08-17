import React, { useEffect, useState } from 'react'
import '../StoreStyle/Products.css'
import { useNavigate } from 'react-router-dom'
import '../data.json'

const Products = () => {
    let nav=useNavigate()
    let view=(id)=>{
      nav(`/view/${id}`)
      console.log(id)
    }
    let [product,setProduct]=useState([])
    useEffect((id)=>{
        let url=fetch('http://localhost:4000/products')
        let x=url.then((first)=>{
           return first.json();
        })
        x.then((second)=>{
          setProduct(second)
          console.log(second);
        })
    },[])
  return (
    <div className='mn'>
       {product.map((a)=>{
        return(
            <div className="product">
                <img src={a.image} alt="" height={200} width={200} />
                <h3>{a.title}</h3><br />
                <button onClick={()=>view(a.id)}>View Product</button>
            </div>
        )
       })} 
      
    </div>
  )
}

export default Products
