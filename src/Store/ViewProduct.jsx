import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../StoreStyle/ViewProduct.css'

const ViewProduct = () => {
  let param=useParams()
  let [product,setProduct]=useState([])
  let nav=useNavigate()
  useEffect(()=>{
    let api=fetch(`https://fakestoreapi.com/products/${param.id}`)
    let x=api.then((first)=>{
        return first.json()
    })
    x.then((second)=>{
        setProduct(second)
    })
  },[])
  let back=()=>{
    nav(`/producttable`)
  }
  return (
    <div className='mnn'>
        <div className="prd">
                <div className="imgs">
                    <img src={product.image} alt={product.title} height={250} width={300} />
                </div>
                <div className="detail">
                    <h3>{product.title}</h3><br />
                    <p>{product.description}</p>
                    <h3>${product.price}</h3><br />
                    <button onClick={back}>BACK</button>
                </div>
            </div>
    </div>
  )
}

export default ViewProduct
