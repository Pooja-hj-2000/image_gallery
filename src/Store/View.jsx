import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../StoreStyle/View.css';

const View = () => {
    let param = useParams();
    let navigate = useNavigate();

    let back = () => {
        navigate('/products');
    }

    let [cartItems, setCartItems] = useState([]);
    let [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${param.id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });


        fetch("http://localhost:4000/cartitems")
            .then(response => response.json())
            .then(data => {
                setCartItems(data.map(item => item.cartid));
            })
            .catch(error => {
                console.error('Error fetching cart items:', error);
            });
    }, [param.id]);

    let cart = (id, title, price, description, image) => {
        let cartitem = {
            cartid: id,
            carttitle: title,
            cartprice: price,
            cartdesc: description,
            cartimage: image,
        };


        if (cartItems.includes(id)) {
            alert(`product already exists in the cart`);
        } else {
            fetch("http://localhost:4000/cartitems", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartitem)
            })
            .then(response => {
                if (response.ok) {
                    alert(`Product added to cart successfully`);
                    navigate(`/cartitems`);
                } else {
                    alert('Failed to add product to cart');
                }
            })
        }
    }
 
    return (
        <div className='m'>
            <div className="productt">
                <div className="im">
                    <img src={product.image} alt={product.title} height={200} width={200} />
                </div>
                <div className="details">
                    <h3>{product.title}</h3><br />
                    <p>{product.description}</p>
                    <h3>${product.price}</h3><br />
                    <button onClick={() => cart(product.id, product.title, product.price, product.description, product.image)}>ADD TO CART</button> &nbsp;
                    <button onClick={back}>BACK</button>
                </div>
            </div>
        </div>
    );
}

export default View;
