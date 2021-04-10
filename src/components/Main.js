import React, { useState } from 'react';
import './Main.css';
import Book from './Book';
import Cart from './Cart';
//import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';
import {Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  button1 : {
      borderRadius: '12px',
    backgroundColor: theme.palette.success.dark + '!important',
  },
  button: {
    borderRadius: '12px',
  },

  }));


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Main() {

    const classes = useStyles();

  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div className="App">
      <header>
        <Button className={classes.button1} variant="contained" color="success" onClick={()=> navigateTo(PAGE_CART)}>
             View Save Data
        </Button>

        <Button className={classes.button} variant="contained" color="secondary" onClick={()=> navigateTo(PAGE_PRODUCTS)}>
             View All
        </Button>
      </header>
      {page === PAGE_PRODUCTS && (
        <Book cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
      
      </div>
  );
}

export default Main;