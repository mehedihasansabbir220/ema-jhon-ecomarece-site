import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
    // console.log(props)
    const { img, name, seller, price, star, stock } = props.product;
    return (
        <div className='producat-container' >
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <p>by:{seller}</p>
                <h5>${price}</h5>
                <h6>{star}
                    <p>
                        <Rating
                            readonly
                            initialRating={star}

                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star icon-color"
                        ></Rating>
                    </p>
                </h6>
                <p>Only {stock} left-order now </p>
                <button onClick={() => props.eventHandler(props.product)} className='button'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;