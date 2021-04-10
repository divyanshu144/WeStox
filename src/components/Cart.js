import React from 'react';
import  './Cart.css'
import { makeStyles } from '@material-ui/core/styles';
import {Button } from '@material-ui/core';
import Example from "./Example";


const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: '12px',
  },

  }));

export default function Cart({ cart, setCart }) {
  
  const classes = useStyles();
  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <div>
      <Example />
      <h1 className="top">Saved Data</h1>
      {cart.length > 0 && (
        <Button className={classes.button} variant="contained" color="primary" 
          onClick={clearCart}>Clear All
      </Button> 
      )}
        {cart.map((product, idx) => (
          <div className="products">
          <div className="cart-container" key={idx}>
            <div className="cart-row">
                <div className="cart">
                    <img src={product.image} alt='crypto' />
                    <h1>{product.name}</h1>
                    <p className='symbol'>{product.symbol}</p>
                </div>
                <div className="cart-data">
                    <p className='price'>${product.current_price}</p>
                    <p className='volume'>${product.market_cap}</p>

                    <p className="marketcap">
                        Mkt Cap: ${product.total_volume}
                    </p>
                    <Button className={classes.button} variant="contained" color="primary" 
                      onClick={() => removeFromCart(product)}>Remove
                    </Button>
                </div>
                </div>
                </div>
            </div>
        ))};
      </div>
  );
}