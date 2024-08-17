import React, { useEffect, useState } from 'react';
import '../StoreStyle/Cartitems.css';
import { useNavigate } from 'react-router-dom';

const Cartitems = () => {
    let [cart, setCart] = useState([]);
    function f1(id,title){
        let x=window.confirm(`Do you want to delete ${title} from the cart`) 
        if(x){
          fetch(`http://localhost:4000/cartitems/${id}`,{method:"DELETE"});
            alert(`${title} successfully deleted from the cart`)
        }
        else{
            alert(`Could not add ${title} to cart`)
        }
    }
    let empty=Boolean(cart.length)
    useEffect(() => {
        fetch('http://localhost:4000/cartitems')
            .then(response => response.json())
            .then(data => setCart(data));
    }, []);
    let sum = cart.reduce((total, item) => {
        return total + item.cartprice;
    }, 0);
    let sum1=Math.floor(sum)
  
    return (
        <div className='nn'>
            <table border={3}>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Image</th>
                        <th>Product Description</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((a) => (
                        <tr className="cartbox">
                            <td>{a.cartid}</td>
                            <td>{a.carttitle}</td>
                            <td>{a.cartprice}</td>
                            <td><img src={a.cartimage} alt={a.carttitle} /></td>
                            <td>{a.cartdesc}</td>
                            <td><button onClick={() => f1(a.id, a.carttitle)}>Delete</button></td>
                        </tr>
                    ))}
                    <tr><td colSpan={6}>The total price of the products is {sum}</td></tr>
                     {empty?"" :(
                            <tr>
                                <td colSpan={6}>No books in the cart</td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
};

export default Cartitems;
