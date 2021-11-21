import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../products/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    //Scarch Product 
    const [displayProduct, setDisplayProduct] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                //Reaload korla jata empty na aesa tai 2 ta data dese 
                setDisplayProduct(data)
            })
    }, []);
    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storeCart = [];
            for (const key in saveCart) {
                const addPoduct = products.find(product => product.key === key);
                if (addPoduct) {
                    const quantity = saveCart[key];
                    addPoduct.quantity = quantity;
                    storeCart.push(addPoduct);
                }
            }
            setCart(storeCart)
        }

    }, [products])
    const eventHandler = (product) => {
        const newtotal = [...cart, product];
        setCart(newtotal);
        //Save to Loacal Stroge 
        addToDb(product.key);


    }

    const handelScarch = event => {
        const scarchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(scarchText.toLowerCase()));
        // console.log(matchProduct.length);
        setDisplayProduct(matchProduct);
        // console.log(displayProduct)
    }


    return (
        <>
            <div className="scarch-contanier">
                <input onChange={handelScarch} type="text" placeholder='scarch your text ' />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    <h1>Producat:{displayProduct.length}</h1>
                    {
                        // products.map change when includes scarch value 
                        displayProduct.map(product => <Product
                            // product={product}
                            product={product}
                            eventHandler={eventHandler}
                            key={product.key}
                        ></Product>)
                    }

                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </>
    );
};

export default Shop;